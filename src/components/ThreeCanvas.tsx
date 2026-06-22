import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GestureType, Landmark, DebugSettings } from '../types';
import { PINCH_IMAGES } from '../utils/images';

interface ThreeCanvasProps {
  gesture: GestureType;
  handLandmarks: Landmark[] | null;
  handLandmarksRef?: React.RefObject<Landmark[] | null>;
  debugSettings: DebugSettings;
  fpsRef: React.MutableRefObject<number>;
}

// Color schemes
export const COLOR_SCHEMES: Record<string, {
  name: string;
  cakeBody: THREE.Color[];
  frosting: THREE.Color;
  cherry: THREE.Color;
  stem: THREE.Color;
  sprinkles: THREE.Color[];
}> = {
  gourmet: {
    name: '经典美味 (巧克力粉红)',
    cakeBody: [
      new THREE.Color(0x3B2314), // Dark chocolate brown
      new THREE.Color(0xFF69B4), // Strawberry pink
      new THREE.Color(0xFFD300), // Cream sponge yellow
    ],
    frosting: new THREE.Color(0xFFFFFF), // Vanilla white
    cherry: new THREE.Color(0xD30000), // Cherry red
    stem: new THREE.Color(0x556B2F), // Stem green
    sprinkles: [
      new THREE.Color(0xFFFF00), // Gold
      new THREE.Color(0x00FFFF), // Cyan
      new THREE.Color(0xFF00FF), // Magenta
    ]
  },
  galaxy: {
    name: '星系极光 (蓝紫霓虹)',
    cakeBody: [
      new THREE.Color(0x0F052D), // Deep cosmos purple
      new THREE.Color(0x1F2D5A), // Cyber blue
      new THREE.Color(0x7F00FF), // Neon purple
    ],
    frosting: new THREE.Color(0x9400D3), // Pink violet
    cherry: new THREE.Color(0x00FFFF), // Cyan cherry
    stem: new THREE.Color(0xADFF2F), // Lime stem
    sprinkles: [
      new THREE.Color(0xFF1493), // Neon pink
      new THREE.Color(0x39FF14), // Bright green
      new THREE.Color(0xFFE600), // Yellow
    ]
  },
  lava: {
    name: '烈焰熔岩 (橙红金黄)',
    cakeBody: [
      new THREE.Color(0x8B0000), // Dark red
      new THREE.Color(0xFF4500), // Orange red
      new THREE.Color(0x3E1111), // Midnight black charcoal
    ],
    frosting: new THREE.Color(0xFF8C00), // Dark orange
    cherry: new THREE.Color(0xFFD700), // Golden cherry
    stem: new THREE.Color(0xFFFFFF), // White glow stem
    sprinkles: [
      new THREE.Color(0xFF0000), // Fire red
      new THREE.Color(0xFF9900), // Orange
      new THREE.Color(0xCCCCCC), // Ash grey
    ]
  }
};

// Shaders GLSL code
const VERTEX_SHADER = `
  precision mediump float;
  attribute vec3 aTargetPosition;
  attribute float aSize;
  attribute vec3 aColor;

  uniform float uProgress;
  uniform float uTime;
  uniform float uNoiseScale;

  varying vec3 vColor;

  // Custom simple smoothstep for GLSL ES 100 compatibility
  float ease(float x) {
    return smoothstep(0.0, 1.0, x);
  }

  void main() {
    float eased = ease(uProgress);

    // Dynamic linear interpolation from original position to targeted explosion position
    vec3 pos = mix(position, aTargetPosition, eased);

    // Apply smooth sinusoidal noise perturbation driven by time & explosion progression uProgress
    float noise = sin(pos.x * 2.5 + uTime) * cos(pos.y * 1.8 + uTime * 0.8) * sin(pos.z * 1.8 + uTime * 0.5);
    
    // Even when uProgress is 0 (fully formed cake), give it a tiny, delicate shimmer (0.018) to feel "alive"
    // and escalate to 0.45 for dynamic explosion dispersion as eased reaches 1.0. We scale this based on uNoiseScale.
    float noiseAmount = (0.016 + 0.434 * eased) * uNoiseScale;
    pos += vec3(noise * noiseAmount);

    // Expand scaling over time but shrink individual sparkles as they go thin
    float size = aSize * (1.1 - 0.45 * eased);

    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Perspective scale calculation to render tiny spherical pixels
    gl_PointSize = size * (250.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec3 vColor;
  uniform float uProgress;

  void main() {
    // Generate a sharp circular boundary point mapping
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    // Soft antialiasing for natural star particles
    float alpha = 1.0 - smoothstep(0.25, 0.5, dist);

    // Add a glowing core effect which looks exceptionally beautiful
    float coreGlow = 1.0 - (dist / 0.25);
    coreGlow = max(0.0, coreGlow);
    vec3 color = mix(vColor, vec3(1.0), coreGlow * 0.35);

    // Fade slightly during dispersion state
    alpha *= mix(1.0, 0.45, uProgress);

    gl_FragColor = vec4(color, alpha);
  }
`;

interface PinchMeta {
  mesh: THREE.Mesh;
  texture: THREE.Texture;
  scale: number;
  targetScale: number;
  initialTime: number;
  isReleased: boolean;
  releaseTime: number;
  pos: THREE.Vector3;
  velocity: THREE.Vector3;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  gesture,
  handLandmarks,
  handLandmarksRef,
  debugSettings,
  fpsRef
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fallbackCanvasRef = useRef<HTMLCanvasElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const hudTextRef = useRef<HTMLSpanElement>(null);
  const hudSubRef = useRef<HTMLSpanElement>(null);
  const stateRef = useRef({
    gesture,
    handLandmarks,
    debugSettings,
    progress: 0.0,
    targetProgress: 0.0,
    currentImageIndex: 0,
    prevGesture: 'none' as GestureType,
    smoothedHandX: 0.0,
    smoothedHandY: 0.0,
    isHandDetected: false,
  });

  // Mouse Drag & Zoom interaction state fallbacks
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const dragRotationRef = useRef({ x: 0.15, y: -0.35 }); // Initial default tilt angle
  const zoomScaleRef = useRef(1.0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Left click only
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    dragRotationRef.current.y += deltaX * 0.007;
    dragRotationRef.current.x += deltaY * 0.007;

    // Clamp vertical rotation (X-axis) to avoid flipping upside down
    dragRotationRef.current.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, dragRotationRef.current.x));

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    zoomScaleRef.current += e.deltaY * -0.001;
    // Restrict zoom limits
    zoomScaleRef.current = Math.max(0.4, Math.min(2.5, zoomScaleRef.current));
  };

  // Sync React values with rendering loop ref to prevent stale closuring
  useEffect(() => {
    stateRef.current.gesture = gesture;
    stateRef.current.handLandmarks = handLandmarks;
    stateRef.current.debugSettings = debugSettings;
  }, [gesture, handLandmarks, debugSettings]);

  const [webglError, setWebglError] = useState<string | null>(null);

  useEffect(() => {
    if (!webglError || !fallbackCanvasRef.current) return;

    const canvas = fallbackCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = canvas.width = canvas.clientWidth || 800;
    let height = canvas.height = canvas.clientHeight || 600;

    const resizeHandler = () => {
      width = canvas.width = canvas.clientWidth || 800;
      height = canvas.height = canvas.clientHeight || 600;
    };
    window.addEventListener('resize', resizeHandler);

    // Generate 350 particles in 2D forming a cylinder / slice
    const particles: Array<{
      x: number;
      y: number;
      ox: number; 
      oy: number; 
      oz: number; 
      color: string;
      size: number;
      speed: number;
    }> = [];

    const colorsPreset = ['#3B2314', '#FF69B4', '#FFD300', '#FFFFFF', '#D30000', '#00f7ff'];

    for (let i = 0; i < 350; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.random() * 100 + 15;
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);
      const y = (Math.random() - 0.5) * 120;

      particles.push({
        x: 0,
        y: 0,
        ox: x,
        oy: y,
        oz: z,
        color: colorsPreset[Math.floor(Math.random() * colorsPreset.length)],
        size: Math.random() * 2.5 + 1.2,
        speed: Math.random() * 0.05 + 0.02,
      });
    }

    let angle = 0;
    let lastUProgressValue = -1.0;

    const tick = () => {
      ctx.fillStyle = '#060212';
      ctx.fillRect(0, 0, width, height);

      angle += 0.015;

      // 1. Fetch updated state from stateRef or handLandmarksRef
      const currentGesture = stateRef.current.gesture;
      const handLandmarks = (handLandmarksRef && handLandmarksRef.current !== undefined) ? handLandmarksRef.current : stateRef.current.handLandmarks;
      const debugSettings = stateRef.current.debugSettings;

      // 2. Compute Hand tracking coordinates
      let mappedX = 0;
      let mappedY = 0;
      let handDetected = false;

      if (handLandmarks && handLandmarks.length >= 21) {
        handDetected = true;
        let trackX = 0;
        let trackY = 0;

        if (currentGesture === 'ok') {
          const thumbTip = handLandmarks[4];
          const indexTip = handLandmarks[8];
          trackX = (thumbTip.x + indexTip.x) / 2;
          trackY = (thumbTip.y + indexTip.y) / 2;
        } else {
          // Use stable middle finger knuckle (landmark 9) representing the center of palm for smoother translate sweeping
          const palmCenter = handLandmarks[9];
          trackX = palmCenter.x;
          trackY = palmCenter.y;
        }

        const widthScale = 7.0;
        const heightScale = 5.2;
        mappedX = (0.5 - trackX) * widthScale;
        mappedY = -(trackY - 0.5) * heightScale;
      }

      // Smooth follow hand coordinates
      if (handDetected) {
        stateRef.current.smoothedHandX += (mappedX - stateRef.current.smoothedHandX) * 0.12;
        stateRef.current.smoothedHandY += (mappedY - stateRef.current.smoothedHandY) * 0.12;
        stateRef.current.isHandDetected = true;
      } else {
        stateRef.current.smoothedHandX += (0.0 - stateRef.current.smoothedHandX) * 0.06;
        stateRef.current.smoothedHandY += (0.0 - stateRef.current.smoothedHandY) * 0.06;
        stateRef.current.isHandDetected = false;
      }

      const handX = stateRef.current.smoothedHandX;
      const handY = stateRef.current.smoothedHandY;

      // 3. Update transition uProgress based on gestures
      if (debugSettings.manualProgress) {
        stateRef.current.targetProgress = debugSettings.progressValue;
      } else {
        if (currentGesture === 'fist' || currentGesture === 'none') {
          stateRef.current.targetProgress = 0.0;
        } else if (currentGesture === 'open' || currentGesture === 'one' || currentGesture === 'two' || currentGesture === 'ok') {
          stateRef.current.targetProgress = 1.0;
        }
      }

      stateRef.current.progress += (stateRef.current.targetProgress - stateRef.current.progress) * 0.08;
      if (Math.abs(stateRef.current.progress - stateRef.current.targetProgress) < 0.001) {
        stateRef.current.progress = stateRef.current.targetProgress;
      }

      const progress = stateRef.current.progress;

      // Draw 2D stars in background
      ctx.fillStyle = 'rgba(147, 112, 219, 0.45)';
      for (let s = 0; s < 40; s++) {
        const sx = (Math.sin(s * 87.2) * 0.5 + 0.5) * width;
        const sy = (Math.cos(s * 43.1) * 0.5 + 0.5) * height;
        ctx.fillRect(sx, sy, 1.5, 1.5);
      }

      // Render 2D particles focusing around active hand tracking centers
      const cx = width / 2 + handX * 80;
      const cy = height / 2 - handY * 80;

      // Update live 2D fallback diagnostic HUD if elements are present on screen
      const tMode = document.getElementById('telemetry-mode');
      const tFps = document.getElementById('telemetry-fps');
      const tHand = document.getElementById('telemetry-hand');
      const tCoords = document.getElementById('telemetry-coords');
      const tMesh = document.getElementById('telemetry-mesh');

      if (tMode) tMode.innerText = 'RENDER MODE: 2D 星河粒子';
      if (tFps) tFps.innerText = `刷新帧率: ${fpsRef.current || 60} FPS (2D 帧数)`;
      if (tHand) {
        tHand.innerText = `手部连接: ${handLandmarks ? `已连接手部数据 (${handLandmarks.length} 点)` : '未探测到手部输入'}`;
        tHand.style.color = handLandmarks ? '#10b981' : '#f43f5e';
      }
      if (tCoords) {
        tCoords.innerText = `手势映射 X/Y: (${stateRef.current.smoothedHandX.toFixed(2)}, ${stateRef.current.smoothedHandY.toFixed(2)})`;
      }
      if (tMesh) {
        tMesh.innerText = `画布粒子重心: (${cx.toFixed(0)}, ${cy.toFixed(0)}) px`;
      }

      particles.forEach((p) => {
        const rx = p.ox * Math.cos(angle) - p.oz * Math.sin(angle);
        const rz = p.ox * Math.sin(angle) + p.oz * Math.cos(angle);

        // Disperse outwards when progress is 1.0
        const spreadDistance = progress * 2.2 + 1.0;
        const px = rx * spreadDistance;
        const py = p.oy * spreadDistance;

        const screenX = cx + px;
        const screenY = cy + py;

        const depthScale = (rz + 200) / 200;
        const size = p.size * depthScale * (1.1 - 0.45 * progress);

        ctx.beginPath();
        ctx.fillStyle = p.color;
        
        ctx.shadowBlur = progress > 0.1 ? 6 : 2;
        ctx.shadowColor = p.color;
        ctx.arc(screenX, screenY, Math.max(0.5, size), 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;

      // Update floating HUD inside 2D fallback too
      const hud = hudRef.current;
      const hudText = hudTextRef.current;
      const hudSub = hudSubRef.current;

      if (hud && hudText && hudSub) {
        let showHologram = false;
        let text = '';
        let subText = '';
        
        if (currentGesture === 'one') {
          showHologram = true;
          text = '🎄';
          subText = 'HOLIDAY TREE | 圣诞树';
        } else if (currentGesture === 'two') {
          showHologram = true;
          text = '🐷';
          subText = 'PIGGY DREAM | 甜梦小猪';
        }
        
        if (showHologram) {
          hudText.innerText = text;
          hudSub.innerText = subText;
          
          const pctX = (0.5 + handX / 7.0) * 100;
          const pctY = (0.5 - handY / 5.2) * 100;
          
          hud.style.left = `${pctX}%`;
          hud.style.top = `${pctY - 12}%`;
          hud.style.transform = `translate(-50%, -50%) scale(${1.0 + Math.sin(Date.now() / 200) * 0.08})`;
          hud.style.opacity = '1';
        } else {
          hud.style.opacity = '0';
        }
      }

      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.font = '10px monospace';
      ctx.fillText(`🎮 2D 极速渲染兼容模式 (Holographic 2D Fallback Live)`, 16, 26);

      animId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animId);
    };
  }, [webglError]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || webglError) return;

    // Clear any potential leftover canvases to completely prevent duplicate canvas bugs in StrictMode/HMR
    container.innerHTML = '';

    // Guard against initial 0 client dimensions of absolute layout container during mounting,
    // protecting against NaN camera aspect ratios and 0x0 buffer allocation in Bloom Pass!
    const width = container.clientWidth || window.innerWidth || 800;
    const height = container.clientHeight || window.innerHeight || 600;

    // 1. Scene, Camera, WebGL Renderer setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060212, 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, failIfMajorPerformanceCaveat: false });
      const testCtx = renderer.getContext();
      if (!testCtx) {
        throw new Error("Could not acquire true WebGL API drawing context.");
      }
    } catch (e: any) {
      console.warn("WebGL initialization failed, switching to 2D Canvas Fallback:", e);
      setWebglError(e?.message || "WebGL is disabled or unsupported on this device/browser.");
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Light Sources
    const ambientLight = new THREE.AmbientLight(0x0b071e, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffeedd, 0.9);
    dirLight.position.set(5, 8, 4);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x752eff, 1.8, 12);
    pointLight.position.set(0, -1.5, 0); // Beneath the cake for mysterious ambient underglow
    scene.add(pointLight);

    // 3. Ambient Background Starfield (200 gentle wandering particles)
    const starCount = 200;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starVelAndSpeed = new Float32Array(starCount * 2); // angle speed, radius
    for (let i = 0; i < starCount; i++) {
      const radius = 6 + Math.random() * 14;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 10;
      starPos[i * 3] = radius * Math.cos(angle);
      starPos[i * 3 + 1] = y;
      starPos[i * 3 + 2] = radius * Math.sin(angle);
      
      starVelAndSpeed[i * 2] = (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1); // angular speed
      starVelAndSpeed[i * 2 + 1] = radius;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x9370db,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 4. Procedural Particle Cake System (Dynamic count according to debugSettings)
    const particleCount = debugSettings.particleCount || 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Helper functions for shape generations
    const applyExplosionTarget = (
      index: number,
      origX: number,
      origY: number,
      origZ: number,
      mode: string,
      heightFactor: number // used for altitude radial grading
    ) => {
      let tx = origX;
      let ty = origY;
      let tz = origZ;

      if (mode === 'radial') {
        // Radial explosion vector outwards from vertical center axis
        const dir = new THREE.Vector3(origX, 0, origZ).normalize();
        if (dir.length() === 0) {
          dir.set(Math.random() - 0.5, 0, Math.random() - 0.5).normalize();
        }
        
        // Add height grading: upper positions fly further (upwards/out), plates barely budge
        const heightGradient = (origY + 1.2) / 2.3; // values from 0.0 to 1.0 approx
        const speedMultiplier = heightGradient * 4.5 + 1.5; // 1.5 to 6.0
        const distance = speedMultiplier + Math.random() * 2.0;

        tx = origX + dir.x * distance;
        ty = origY + (heightGradient * 1.5 * (Math.random() * 0.5 + 0.5)); // fly slightly upwards
        tz = origZ + dir.z * distance;

      } else if (mode === 'upward') {
        // Upward spraying volcano fountain
        const radiusSpeed = Math.sqrt(origX * origX + origZ * origZ);
        tx = origX * (2.0 + Math.random() * 1.5);
        ty = origY + 3.5 + Math.random() * 5.0; // blast up
        tz = origZ * (2.0 + Math.random() * 1.5);

      } else if (mode === 'spiral') {
        // Spiral galaxy spin target
        const currentAngle = Math.atan2(origZ, origX);
        const radius = Math.sqrt(origX * origX + origZ * origZ);
        const targetRadius = radius + 3.0 + Math.random() * 3.5;
        const targetAngle = currentAngle + 2.5 + (1.0 - radius / 2.0); // twist arm

        tx = targetRadius * Math.cos(targetAngle);
        ty = origY + Math.random() * 2.0;
        tz = targetRadius * Math.sin(targetAngle);
      }

      targetPositions[index * 3] = tx;
      targetPositions[index * 3 + 1] = ty;
      targetPositions[index * 3 + 2] = tz;
    };

    const applyShapeTargets = (shapeName: string, schemeKey: string, expMode: string) => {
      const activeScheme = COLOR_SCHEMES[schemeKey] || COLOR_SCHEMES.gourmet;
      const cakeColors = activeScheme.cakeBody;
      const frostClr = activeScheme.frosting;

      const pColor = new THREE.Color();

      if (shapeName === 'tree') {
        // --- 🎄 3D BEAUTIFUL INTEGRATED CHRISTMAS TREE ---
        for (let i = 0; i < particleCount; i++) {
          let tx = 0, ty = 0, tz = 0;
          
          if (i < Math.round(particleCount * 0.08)) {
            // 1. Golden Star Diamond Ornament on top (8% of particles)
            const yMin = 1.6, yMax = 1.95;
            const cy = yMin + Math.random() * (yMax - yMin);
            const rMax = 0.18 - Math.abs(cy - 1.77) * 0.8;
            const radius = Math.random() * Math.max(0.04, rMax);
            const angle = Math.random() * Math.PI * 2;
            tx = radius * Math.cos(angle);
            ty = cy;
            tz = radius * Math.sin(angle);
            
            pColor.setHex(0xffdd00); // Golden shine
          } else if (i < Math.round(particleCount * 0.15)) {
            // 2. Trunk cylinder at tree base (7% of particles)
            const angle = Math.random() * Math.PI * 2;
            const r = Math.random() * 0.16;
            tx = r * Math.cos(angle);
            ty = -1.6 + Math.random() * 0.6;
            tz = r * Math.sin(angle);
            
            pColor.setHex(0x8b5a2b); // Amber wood brown
          } else {
            // 3. Foliage cone (85% of particles)
            const bottomY = -1.0;
            const topY = 1.6;
            const cy = bottomY + Math.random() * (topY - bottomY);
            const pct = (cy - bottomY) / (topY - bottomY); // 0 at bottom, 1 at top
            
            // Cone base radius narrows as we approach the summit
            const maxR = (1.0 - pct) * 1.35 + 0.1;
            // Place particles closely on a thick outer shell for high definition silhouette
            const radius = (0.7 + 0.3 * Math.sqrt(Math.random())) * maxR;
            const angle = Math.random() * Math.PI * 2;
            
            tx = radius * Math.cos(angle);
            ty = cy;
            tz = radius * Math.sin(angle);
            
            // Rich multi-colored hanging decoration ornaments
            const seed = (i * 73) % 100;
            if (seed < 8) {
              pColor.setHex(0xff1e32); // Ruby red balls
            } else if (seed < 14) {
              pColor.setHex(0xffaa00); // Amber orange light strings
            } else if (seed < 18) {
              pColor.setHex(0x3de5ff); // Frost ice-blue gems
            } else if (seed < 22) {
              pColor.setHex(0xffffff); // Sparkling white snow glints
            } else {
              // Standard volumetric green tree pines with gradient
              const greenSeed = seed % 3;
              if (greenSeed === 0) pColor.setHex(0x135422);      // Deep forest green
              else if (greenSeed === 1) pColor.setHex(0x228b22); // Vibrant evergreen green
              else pColor.setHex(0x32cd32);                      // Bright mossy lime green
            }
          }

          targetPositions[i * 3] = tx;
          targetPositions[i * 3 + 1] = ty;
          targetPositions[i * 3 + 2] = tz;
          pColor.toArray(colors, i * 3);
        }
      } else if (shapeName === 'pig_girl') {
        // --- 🐷 3D PARALLAX BILLBOARD SLEEPING PIG-HAT GIRL ---
        // Generates the charming sleeping cartoon pig-hat girl exactly as shown in the reference image
        const fOutlineLimit = Math.round(particleCount * 0.22);
        const fSkinLimit = fOutlineLimit + Math.round(particleCount * 0.14);
        const fBlushLimit = fSkinLimit + Math.round(particleCount * 0.05);
        const fFeaturesLimit = fBlushLimit + Math.round(particleCount * 0.04);
        const fHairLimit = fFeaturesLimit + Math.round(particleCount * 0.16);
        const fHatLimit = fHairLimit + Math.round(particleCount * 0.18);
        const fHatFeaturesLimit = fHatLimit + Math.round(particleCount * 0.05);
        const fShirtLimit = fHatFeaturesLimit + Math.round(particleCount * 0.12);
        const fBubbleLimit = fShirtLimit + Math.round(particleCount * 0.02);

        for (let i = 0; i < particleCount; i++) {
          let tx = 0, ty = 0, tz = 0;

          if (i < fOutlineLimit) {
            // 1. Precise Thick Dark Outlines (0x221a18)
            const type = i % 14;
            if (type === 0) {
              // A. Hat Dome Outer Rim (Semi-ellipse)
              const theta = Math.random() * Math.PI;
              tx = 0.72 * Math.cos(theta);
              ty = 0.12 + 0.48 * Math.sin(theta);
              tz = 0.06;
            } else if (type === 1) {
              // B. Left Ear Outline (Pointed Triangle)
              const t = Math.random();
              if (t < 0.5) {
                const ratio = t / 0.5;
                tx = -0.48 + ratio * (-0.56 - -0.48);
                ty = 0.44 + ratio * (0.65 - 0.44);
              } else {
                const ratio = (t - 0.5) / 0.5;
                tx = -0.56 + ratio * (-0.28 - -0.56);
                ty = 0.65 + ratio * (0.52 - 0.65);
              }
              tz = 0.06;
            } else if (type === 2) {
              // C. Right Ear Outline (Pointed Triangle)
              const t = Math.random();
              if (t < 0.5) {
                const ratio = t / 0.5;
                tx = 0.48 + ratio * (0.56 - 0.48);
                ty = 0.44 + ratio * (0.65 - 0.44);
              } else {
                const ratio = (t - 0.5) / 0.5;
                tx = 0.56 + ratio * (0.28 - 0.56);
                ty = 0.65 + ratio * (0.52 - 0.65);
              }
              tz = 0.06;
            } else if (type === 3) {
              // D. Lower Hat Rim (Draped over forehead)
              const t = -1 + 2 * Math.random();
              tx = t * 0.54;
              ty = 0.08 - 0.08 * Math.cos(t * Math.PI / 2);
              tz = 0.07;
            } else if (type === 4) {
              // E. Face jawline
              const theta = Math.PI + Math.random() * Math.PI;
              tx = 0.44 * Math.cos(theta);
              ty = -0.12 + 0.28 * Math.sin(theta);
              tz = 0.06;
            } else if (type === 5) {
              // F. Left bob hair silhouette
              const t = Math.random();
              tx = -0.44 - 0.12 * Math.sin(t * Math.PI);
              ty = 0.08 - 0.52 * t;
              tz = 0.05;
            } else if (type === 6) {
              // G. Right bob hair silhouette
              const t = Math.random();
              tx = 0.44 + 0.12 * Math.sin(t * Math.PI);
              ty = 0.08 - 0.52 * t;
              tz = 0.05;
            } else if (type === 7) {
              // H. Tiny piggy curly pigtail curl swirl on right neck cheek
              const theta = Math.random() * Math.PI * 3.0;
              const r = 0.015 * (1.1 + theta * 0.28);
              tx = 0.54 + r * Math.cos(theta);
              ty = -0.12 + r * Math.sin(theta);
              tz = 0.05;
            } else if (type === 8) {
              // I. Pajama collar neck trace
              const t = -1 + 2 * Math.random();
              tx = t * 0.25;
              ty = -0.34 - 0.08 * (1.0 - t * t);
              tz = 0.04;
            } else if (type === 9) {
              // J. Pajama shoulders
              const t = Math.random();
              if (t < 0.5) {
                const ratio = t / 0.5;
                tx = -0.25 - ratio * 0.38;
                ty = -0.35 - ratio * 0.36;
              } else {
                const ratio = (t - 0.5) / 0.5;
                tx = 0.25 + ratio * 0.38;
                ty = -0.35 - ratio * 0.36;
              }
              tz = 0.03;
            } else if (type === 10) {
              // K. Blow Bubble Teardrop outline
              const theta = Math.random() * Math.PI * 2;
              const r = 0.15 * (1.1 - Math.sin(theta));
              tx = -0.66 + r * Math.cos(theta);
              ty = 0.40 + r * Math.sin(theta);
              tz = 0.16;
            } else if (type === 11) {
              // L. Chest Badge Outline
              const theta = Math.random() * Math.PI * 2;
              tx = 0.23 + 0.065 * Math.cos(theta);
              ty = -0.58 + 0.045 * Math.sin(theta);
              tz = 0.07;
            } else if (type === 12) {
              // M. Pink decoration circle outline (Lower Left)
              const theta = Math.random() * Math.PI * 2;
              tx = -0.72 + 0.06 * Math.cos(theta);
              ty = -0.16 + 0.06 * Math.sin(theta);
              tz = 0.08;
            } else {
              // N. Handwritten sleepy Zzz symbols Outlines
              const zSelect = i % 3;
              let size = 0.11;
              let cx = 0.65, cy = 0.52; // Defaults to top right Z1
              if (zSelect === 1) {
                size = 0.09;
                cx = 0.72; // Bottom right Z2
                cy = -0.22;
              } else if (zSelect === 2) {
                size = 0.075;
                cx = -0.70; // Upper left Z3
                cy = 0.12;
              }
              const t = Math.random() * 3.0;
              if (t < 1.0) {
                tx = cx + (t - 0.5) * size;
                ty = cy + size * 0.5;
              } else if (t < 2.0) {
                tx = cx + (1.5 - t) * size;
                ty = cy + (1.5 - t) * size;
              } else {
                tx = cx + (t - 2.5) * size;
                ty = cy - size * 0.5;
              }
              tz = 0.08;
            }

            // Crayon uneven sketch distortion jitter
            const jitter = 0.0075;
            tx += (Math.random() - 0.5) * jitter;
            ty += (Math.random() - 0.5) * jitter;

            pColor.setHex(0x221a18); // Elegant graphite sketches
          }
          else if (i < fSkinLimit) {
            // 2. Face Skin (Gentle warm cream ivory peach)
            const isNeck = Math.random() > 0.85;
            if (isNeck) {
              tx = (Math.random() - 0.5) * 0.14;
              ty = -0.25 - Math.random() * 0.10;
              tz = 0.04;
            } else {
              const theta = Math.random() * Math.PI * 2;
              const rad = Math.sqrt(Math.random());
              tx = 0.43 * Math.cos(theta) * rad;
              ty = -0.13 + 0.25 * Math.sin(theta) * rad;
              tz = 0.05;
            }
            pColor.setHex(0xffebd8); // Soft warm ivory peach skin
          } 
          else if (i < fBlushLimit) {
            // 3. Anime Rosy Blush Cheeks (Vivid tender pink)
            const side = (i % 2 === 0) ? -1 : 1;
            const cx = side * 0.24;
            const cy = -0.17;
            const theta = Math.random() * Math.PI * 2;
            const rad = Math.sqrt(Math.random());
            tx = cx + 0.08 * Math.cos(theta) * rad;
            ty = cy + 0.05 * Math.sin(theta) * rad;
            tz = 0.08;
            pColor.setHex(0xff5a79); // Tender vivid blush pink
          } 
          else if (i < fFeaturesLimit) {
            // 4. Closed eyes, eyebrows & tiny sad mouth "^"
            const feat = i % 5;
            if (feat === 0) {
              // Left closed sleepy line
              const t = Math.random();
              tx = -0.27 + t * 0.10;
              ty = -0.10;
              tz = 0.081;
            } else if (feat === 1) {
              // Right closed sleepy line
              const t = Math.random();
              tx = 0.15 + t * 0.10;
              ty = -0.10;
              tz = 0.081;
            } else if (feat === 2) {
              // Left eyebrow
              const t = Math.random();
              tx = -0.26 + t * 0.10;
              ty = -0.05 + t * 0.015;
              tz = 0.081;
            } else if (feat === 3) {
              // Right eyebrow
              const t = Math.random();
              tx = 0.14 + t * 0.10;
              ty = -0.035 - t * 0.015;
              tz = 0.081;
            } else {
              // Tiny custom downward mouth("^")
              const t = -1 + 2 * Math.random();
              tx = t * 0.035;
              ty = -0.22 - Math.abs(t) * 0.018;
              tz = 0.081;
            }
            pColor.setHex(0x221a18); // Dark graphite
          } 
          else if (i < fHairLimit) {
            // 5. Dark Bob Hair Fill (Espresso coffee dark)
            const section = i % 4;
            if (section === 0) {
              // Left side hair chunk
              const t = Math.random();
              tx = -0.44 + Math.random() * 0.12;
              ty = 0.08 - 0.48 * t;
              tz = 0.04;
            } else if (section === 1) {
              // Right side hair chunk
              const t = Math.random();
              tx = 0.32 + Math.random() * 0.12;
              ty = 0.08 - 0.48 * t;
              tz = 0.04;
            } else if (section === 2) {
              // Hanging front fringe bangs
              const bangX = -0.16 + Math.random() * 0.32;
              tx = bangX;
              ty = 0.06 - Math.random() * 0.14;
              tz = 0.075;
            } else {
              // Back hair block volume
              const theta = Math.random() * Math.PI * 2;
              const rad = Math.sqrt(Math.random());
              tx = 0.48 * Math.cos(theta) * rad;
              ty = -0.15 + 0.35 * Math.sin(theta) * rad;
              tz = -0.04;
            }
            pColor.setHex(0x362c2b); // Deep espresso hair
          } 
          else if (i < fHatLimit) {
            // 6. Sweet Pig Hood/Hat Filling (Soft cute pastel pink)
            const section = i % 4;
            if (section < 2) {
              // Top dome fill
              const theta = Math.random() * Math.PI;
              const rad = Math.sqrt(Math.random());
              tx = 0.70 * Math.cos(theta) * rad;
              ty = 0.10 + 0.45 * Math.sin(theta) * rad;
              tz = 0.02;
            } else if (section === 2) {
              // Earmuffs/Side wrap
              const side = (i % 2 === 0) ? -1 : 1;
              tx = side * 0.43 + (Math.random() - 0.5) * 0.06;
              ty = -0.05 + Math.random() * 0.15;
              tz = 0.03;
            } else {
              // Left / Right ear fill triangles
              const ear = i % 2;
              let t1 = Math.random(), t2 = Math.random();
              if (t1 + t2 > 1.0) { t1 = 1.0 - t1; t2 = 1.0 - t2; }
              if (ear === 0) {
                tx = -0.46 + t1 * (-0.54 - -0.46) + t2 * (-0.32 - -0.46);
                ty = 0.44 + t1 * (0.63 - 0.44) + t2 * (0.50 - 0.44);
              } else {
                tx = 0.46 + t1 * (0.54 - 0.46) + t2 * (0.32 - 0.46);
                ty = 0.44 + t1 * (0.63 - 0.44) + t2 * (0.50 - 0.44);
              }
              tz = 0.03;
            }
            pColor.setHex(0xffaec1); // Warm pastel pig hat pink
          } 
          else if (i < fHatFeaturesLimit) {
            // 7. Hat Snout Base, Nostrils and Hat Eyes
            const inner = i % 6;
            if (inner < 4) {
              // Pink Snout Ellipse Base
              const theta = Math.random() * Math.PI * 2;
              const rad = Math.sqrt(Math.random());
              tx = 0.14 * Math.cos(theta) * rad;
              ty = 0.32 + 0.085 * Math.sin(theta) * rad;
              tz = 0.12;
              pColor.setHex(0xff6a88); // Coral pink snout
            } else if (inner === 4) {
              // Dual nostrils inside snout
              const side = (i % 2 === 0) ? -1 : 1;
              tx = side * 0.045;
              ty = 0.32;
              tz = 0.14;
              pColor.setHex(0x221a18); // Dark holes
            } else {
              // Button eyes on hood base
              const side = (i % 2 === 0) ? -1 : 1;
              tx = side * 0.18;
              ty = 0.42;
              tz = 0.12;
              pColor.setHex(0x221a18); // Glossy black beads
            }
          } 
          else if (i < fShirtLimit) {
            // 8. Pink Pajama Shirt Body & Snout badge
            const isBadge = (i % 12 === 0);
            if (isBadge) {
              // Chest Badge (little snout badge on the chest)
              const theta = Math.random() * Math.PI * 2;
              const rad = Math.sqrt(Math.random());
              tx = 0.23 + 0.055 * Math.cos(theta) * rad;
              ty = -0.58 + 0.038 * Math.sin(theta) * rad;
              tz = 0.06;
              pColor.setHex(0xff6a88); // coral pocket/badge snout accent
            } else {
              tx = -0.58 + Math.random() * 1.16;
              ty = -0.36 - Math.random() * 0.40;
              tz = 0.02 + (Math.random() - 0.5) * 0.05;
              pColor.setHex(0xffcbd5); // Pale baby pajamas
            }
          } 
          else if (i < fBubbleLimit) {
            // 9. Floating light blue blow/snore bubble (Top Left)
            const theta = Math.random() * Math.PI * 2;
            const rad = Math.sqrt(Math.random());
            const r = 0.14 * (1.1 - Math.sin(theta)) * rad;
            tx = -0.66 + r * Math.cos(theta);
            ty = 0.40 + r * Math.sin(theta);
            tz = 0.15;
            pColor.setHex(0xbfe0f7); // Translucent sleeping bubble glow
          } 
          else {
            // 10. Background Floating elements: Pink balloon, soft glowing stars
            const bgSelect = i % 4;
            if (bgSelect === 0) {
              // Pink backdrop decoration circle (Lower Left)
              const theta = Math.random() * Math.PI * 2;
              const rad = Math.sqrt(Math.random());
              tx = -0.72 + 0.055 * Math.cos(theta) * rad;
              ty = -0.16 + 0.055 * Math.sin(theta) * rad;
              tz = 0.08;
              pColor.setHex(0xff8da8); // Soft pink circle decoration
            } else {
              // Cozy golden decorative night sky stars in background
              const cx = -1.2 + Math.random() * 2.4;
              const cy = -0.8 + Math.random() * 1.6;
              const theta = Math.random() * Math.PI * 2;
              const rad = Math.sqrt(Math.random());
              tx = cx + 0.03 * Math.cos(theta) * rad;
              ty = cy + 0.03 * Math.sin(theta) * rad;
              tz = -0.10;
              pColor.setHex(0xfef3c7); // soft glowing star yellow
            }
          }

          targetPositions[i * 3] = tx;
          targetPositions[i * 3 + 1] = ty;
          targetPositions[i * 3 + 2] = tz;
          pColor.toArray(colors, i * 3);
        }
      } else {
        // --- 🧁 DEFAULT CAKE EXPLOSION Targets ---
        const s1 = Math.round(particleCount * 0.36);
        const s2 = s1 + Math.round(particleCount * 0.16);
        const s3 = s2 + Math.round(particleCount * 0.14);
        const s4 = s3 + Math.round(particleCount * 0.08);
        const s5 = s4 + Math.round(particleCount * 0.06);
        const s6 = s5 + Math.round(particleCount * 0.06);
        const s7 = s6 + Math.round(particleCount * 0.08);

        for (let i = 0; i < particleCount; i++) {
          let x = 0, y = 0, z = 0;

          if (i < s1) {
            const angle = Math.random() * Math.PI * 2;
            const cylRadius = Math.sqrt(Math.random()) * 1.55;
            x = cylRadius * Math.cos(angle);
            z = cylRadius * Math.sin(angle);
            y = -1.2 + Math.random() * 1.65;
            const blendRatio = Math.random();
            const baseColor = cakeColors[Math.floor(Math.random() * cakeColors.length)];
            pColor.copy(new THREE.Color(0x0a0524)).lerp(baseColor, blendRatio * 0.85);
          } else if (i < s2) {
            const angle = Math.random() * Math.PI * 2;
            const isRim = (i > s1 + Math.round((s2 - s1) * 0.69));
            if (isRim) {
              const edRadius = 1.48 + Math.random() * 0.08;
              x = edRadius * Math.cos(angle);
              z = edRadius * Math.sin(angle);
              y = 0.45 + Math.sin(angle * 12) * 0.07;
              pColor.copy(frostClr).multiplyScalar(1.2);
            } else {
              const rLimit = Math.sqrt(Math.random()) * 1.48;
              x = rLimit * Math.cos(angle);
              z = rLimit * Math.sin(angle);
              y = 0.45 + (1.48 - rLimit) * 0.05;
              pColor.copy(frostClr);
            }
          } else if (i < s3) {
            const angle = Math.random() * Math.PI * 2;
            const isOuterRing = (i > s2 + Math.round((s3 - s2) * 0.79));
            if (isOuterRing) {
              const ringR = 2.15 + Math.random() * 0.15;
              x = ringR * Math.cos(angle);
              z = ringR * Math.sin(angle);
              y = -1.25;
              pColor.copy(activeScheme.sprinkles[0]).lerp(new THREE.Color(0xffffff), 0.4);
            } else {
              const plateR = Math.sqrt(Math.random()) * 2.15;
              x = plateR * Math.cos(angle);
              z = plateR * Math.sin(angle);
              y = -1.26 + (plateR * 0.02);
              pColor.setHex(0x1a163a).lerp(frostClr, 0.15);
            }
          } else if (i < s4) {
            const angle = Math.random() * Math.PI * 2;
            x = 1.52 * Math.cos(angle);
            z = 1.52 * Math.sin(angle);
            y = -1.1 + Math.random() * 1.4;
            pColor.setHex(0xffcc00);
          } else if (i < s5) {
            const countInSec = s5 - s4;
            const wordRatio = (i - s4) / countInSec;
            if (wordRatio < 0.4) {
              const t = (wordRatio / 0.4);
              x = (t - 0.5) * 1.4;
              y = 0.0 + Math.sin(t * Math.PI) * 0.08 + (Math.random() - 0.5) * 0.04;
              z = Math.sqrt(Math.max(0.1, 1.53 * 1.53 - x * x));
            } else {
              const t = ((wordRatio - 0.4) / 0.6);
              x = (t - 0.5) * 1.9;
              y = -0.45 + Math.sin(t * Math.PI) * 0.08 + (Math.random() - 0.5) * 0.04;
              z = Math.sqrt(Math.max(0.1, 1.53 * 1.53 - x * x));
            }
            pColor.setHex(0xffffff);
          } else if (i < s6) {
            const angle = Math.random() * Math.PI * 2;
            x = Math.random() * 0.065 * Math.cos(angle);
            z = Math.random() * 0.065 * Math.sin(angle);
            y = 0.45 + Math.random() * 0.7;
            pColor.setHex(0xe8d28a);
          } else if (i < s7) {
            const flameRatio = (i - s6) / (s7 - s6);
            y = 1.15 + flameRatio * 0.55;
            const fRadius = Math.sin(flameRatio * Math.PI) * (1.1 - flameRatio) * 0.22;
            const fAngle = Math.random() * Math.PI * 2;
            x = fRadius * Math.cos(fAngle);
            z = fRadius * Math.sin(fAngle);
            if (flameRatio < 0.2) pColor.setHex(0x00cdff);
            else if (flameRatio < 0.62) pColor.setHex(0xff6a00);
            else pColor.setHex(0xfffae0);
          } else {
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const rDome = 2.5 + Math.random() * 0.3;
            x = rDome * Math.sin(phi) * Math.cos(theta);
            y = -0.3 + rDome * Math.sin(phi) * Math.sin(theta);
            z = rDome * Math.cos(phi);
            pColor.copy(activeScheme.sprinkles[Math.floor(Math.random() * activeScheme.sprinkles.length)]);
          }

          // Compute core and apply explosion
          applyExplosionTarget(i, x, y, z, expMode, y);
          pColor.toArray(colors, i * 3);
        }
      }

      if (geometry.attributes.aTargetPosition) {
        geometry.attributes.aTargetPosition.needsUpdate = true;
      }
      if (geometry.attributes.aColor) {
        geometry.attributes.aColor.needsUpdate = true;
      }
    };

    const updateCakeParticles = (schemeKey: string, expMode: string) => {
      const activeScheme = COLOR_SCHEMES[schemeKey] || COLOR_SCHEMES.gourmet;
      const cakeColors = activeScheme.cakeBody;
      const frostClr = activeScheme.frosting;

      // Dynamically calculate composition split indices based on actual particleCount
      const s1 = Math.round(particleCount * 0.36); // Sponge body (36%)
      const s2 = s1 + Math.round(particleCount * 0.16); // Frosting top and border piping (16%)
      const s3 = s2 + Math.round(particleCount * 0.14); // Base plate (14%)
      const s4 = s3 + Math.round(particleCount * 0.08); // Decorative stars (8%)
      const s5 = s4 + Math.round(particleCount * 0.06); // HAPPY BIRTHDAY logo cursive (6%)
      const s6 = s5 + Math.round(particleCount * 0.06); // Candle stick cylinder (6%)
      const s7 = s6 + Math.round(particleCount * 0.08); // Candle hot burning flame (8%)
      // Remaining particles (up to particleCount) will represent the Cosmic Sparks Outer Dome (~6%)

      for (let i = 0; i < particleCount; i++) {
        let x = 0, y = 0, z = 0;
        let pColor = new THREE.Color();
        let size = 0.05 + Math.random() * 0.08;

        if (i < s1) {
          // --- SPONGE & ICING GALAXY CAKE BODY ---
          const angle = Math.random() * Math.PI * 2;
          const cylRadius = Math.sqrt(Math.random()) * 1.55;
          x = cylRadius * Math.cos(angle);
          z = cylRadius * Math.sin(angle);
          y = -1.2 + Math.random() * 1.65; // height goes up to 0.45

          const blendRatio = Math.random();
          const baseColor = cakeColors[Math.floor(Math.random() * cakeColors.length)];
          const cosmosColor = new THREE.Color(0x0a0524); // Dark space twilight base
          pColor.copy(cosmosColor).lerp(baseColor, blendRatio * 0.85);

          if (Math.random() > 0.95) {
            pColor.setHex(0xffffff);
            size = 0.12; // shining star sparkle
          }

        } else if (i < s2) {
          // --- TOP FROSTING CREAM COVERS & PIPING ---
          const angle = Math.random() * Math.PI * 2;
          // Piping rim portion of the frosting particles
          const isRim = (i > s1 + Math.round((s2 - s1) * 0.69));

          if (isRim) {
            const edRadius = 1.48 + Math.random() * 0.08;
            x = edRadius * Math.cos(angle);
            z = edRadius * Math.sin(angle);
            y = 0.45 + Math.sin(angle * 12) * 0.07; // crest ripples wave
            pColor.copy(frostClr).multiplyScalar(1.2);
            size = 0.09 + Math.random() * 0.07;
          } else {
            const rLimit = Math.sqrt(Math.random()) * 1.48;
            x = rLimit * Math.cos(angle);
            z = rLimit * Math.sin(angle);
            y = 0.45 + (1.48 - rLimit) * 0.05;
            pColor.copy(frostClr);
            size = 0.07 + Math.random() * 0.08;
          }

        } else if (i < s3) {
          // --- REFINED GLOWING BASE PLATE ---
          const angle = Math.random() * Math.PI * 2;
          const isOuterRing = (i > s2 + Math.round((s3 - s2) * 0.79));

          if (isOuterRing) {
            const ringR = 2.15 + Math.random() * 0.15;
            x = ringR * Math.cos(angle);
            z = ringR * Math.sin(angle);
            y = -1.25;
            pColor.copy(activeScheme.sprinkles[0]).lerp(new THREE.Color(0xffffff), 0.4);
            size = 0.14 + Math.random() * 0.06;
          } else {
            const plateR = Math.sqrt(Math.random()) * 2.15;
            x = plateR * Math.cos(angle);
            z = plateR * Math.sin(angle);
            y = -1.26 + (plateR * 0.02);
            pColor.setHex(0x1a163a).lerp(frostClr, 0.15);
            size = 0.06 + Math.random() * 0.05;
          }

        } else if (i < s4) {
          // --- BRIGHT GOLD DECORATIVE STARS ---
          const angle = Math.random() * Math.PI * 2;
          const placeOnSide = (Math.random() > 0.45);

          if (placeOnSide) {
            x = 1.52 * Math.cos(angle);
            z = 1.52 * Math.sin(angle);
            y = -1.1 + Math.random() * 1.4;
          } else {
            const rVal = Math.random() * 1.35;
            x = rVal * Math.cos(angle);
            z = rVal * Math.sin(angle);
            y = 0.48;
          }
          pColor.setHex(0xffcc00);
          size = 0.13 + Math.random() * 0.11;

        } else if (i < s5) {
          // --- GLOWING CURSIVE "HAPPY BIRTHDAY" LOGO ---
          const countInSec = s5 - s4;
          const wordRatio = (i - s4) / countInSec;

          if (wordRatio < 0.4) {
            const t = (wordRatio / 0.4);
            const lx = (t - 0.5) * 1.4;
            const ly = 0.0 + Math.sin(t * Math.PI) * 0.08 + (Math.random() - 0.5) * 0.04;
            const lz = Math.sqrt(Math.max(0.1, 1.53 * 1.53 - lx * lx));
            x = lx;
            y = ly;
            z = lz;
          } else {
            const t = ((wordRatio - 0.4) / 0.6);
            const lx = (t - 0.5) * 1.9;
            const ly = -0.45 + Math.sin(t * Math.PI) * 0.08 + (Math.random() - 0.5) * 0.04;
            const lz = Math.sqrt(Math.max(0.1, 1.53 * 1.53 - lx * lx));
            x = lx;
            y = ly;
            z = lz;
          }
          pColor.setHex(0xffffff);
          size = 0.09 + Math.random() * 0.06;

        } else if (i < s6) {
          // --- CYLINDRICAL GOLDEN CANDLE STICK ---
          const angle = Math.random() * Math.PI * 2;
          const cRadius = Math.random() * 0.065;
          x = cRadius * Math.cos(angle);
          z = cRadius * Math.sin(angle);
          y = 0.45 + Math.random() * 0.7;

          pColor.setHex(0xe8d28a);
          size = 0.05 + Math.random() * 0.04;

        } else if (i < s7) {
          // --- BREATHTAKING BURNING TEARDROP FLAME ---
          const countInSec = s7 - s6;
          const flameRatio = (i - s6) / countInSec;
          const flameY = 1.15 + flameRatio * 0.55;

          const flameRadius = Math.sin(flameRatio * Math.PI) * (1.1 - flameRatio) * 0.22;
          const flameAngle = Math.random() * Math.PI * 2;

          x = flameRadius * Math.cos(flameAngle);
          z = flameRadius * Math.sin(flameAngle);
          y = flameY;

          if (flameRatio < 0.2) {
            pColor.setHex(0x00cdff);
            size = 0.08 + Math.random() * 0.06;
          } else if (flameRatio < 0.62) {
            pColor.setHex(0xff6a00);
            size = 0.11 + Math.random() * 0.07;
          } else {
            pColor.setHex(0xfffae0);
            size = 0.14 + Math.random() * 0.06;
          }

        } else {
          // --- ASTRONOMICAL BUBBLE DOME & COSMOS SPARKS ---
          const u = Math.random();
          const v = Math.random();
          const theta = u * 2.0 * Math.PI;
          const phi = Math.acos(2.0 * v - 1.0);
          const rDome = 2.5 + Math.random() * 0.3;

          x = rDome * Math.sin(phi) * Math.cos(theta);
          y = -0.3 + rDome * Math.sin(phi) * Math.sin(theta);
          z = rDome * Math.cos(phi);

          pColor.copy(activeScheme.sprinkles[Math.floor(Math.random() * activeScheme.sprinkles.length)]);
          size = 0.12 + Math.random() * 0.09;
        }

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        pColor.toArray(colors, i * 3);
        sizes[i] = size * 1.25;

        applyExplosionTarget(i, x, y, z, expMode, y);
      }

      if (geometry.attributes.position) geometry.attributes.position.needsUpdate = true;
      if (geometry.attributes.aTargetPosition) geometry.attributes.aTargetPosition.needsUpdate = true;
      if (geometry.attributes.aColor) geometry.attributes.aColor.needsUpdate = true;
      if (geometry.attributes.aSize) geometry.attributes.aSize.needsUpdate = true;
    };

    // Construct original geometry arrays
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aTargetPosition', new THREE.BufferAttribute(targetPositions, 3));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    // Fill initial particles
    updateCakeParticles(stateRef.current.debugSettings.colorScheme, stateRef.current.debugSettings.explosionMode);

    // Points shader uniform mappings
    const uniforms = {
      uProgress: { value: 0.0 },
      uTime: { value: 0.0 },
      uNoiseScale: { value: 1.0 }
    };

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: uniforms,
      transparent: true,
      depthWrite: false, // Prevents particle bounds clipping
      blending: THREE.AdditiveBlending
    });

    const cakeParticlesMesh = new THREE.Points(geometry, shaderMaterial);
    scene.add(cakeParticlesMesh);

    // 5. Unreal Bloom Post-Processing
    let bloomPass: UnrealBloomPass | null = null;
    let composer: EffectComposer | null = null;

    try {
      const renderScene = new RenderPass(scene, camera);
      bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        0.3,  // Strength (toned down from 1.1 to avoid solid white blowout)
        0.45, // Radius (soft and gentle atmospheric mist)
        0.85  // Threshold (raised from 0.15 so standard card images do NOT hit bloom - "原图直出"!)
      );

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
    } catch (bloomError) {
      console.warn("UnrealBloomPass/EffectComposer failed to initialize, falling back to standard renderer:", bloomError);
    }

    // Robust ResizeObserver to seamlessly handle canvas scaling and initial layout paints
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          if (composer) {
            composer.setSize(w, h);
          }
        }
      }
    });
    if (container) {
      resizeObserver.observe(container);
    }

    // Instantiating Image Loader
    const textureLoader = new THREE.TextureLoader();

    // 6. Interactive Pinch-Grabbed Image tracking
    const grabbedImages: PinchMeta[] = [];
    let currentImgIndex = 0;

    // Handle incoming pinch activations
    const triggerNewPinch = (mappedX: number, mappedY: number) => {
      // Find the next texture in line cyclicly
      const nextImgPath = PINCH_IMAGES[currentImgIndex];
      currentImgIndex = (currentImgIndex + 1) % PINCH_IMAGES.length;

      // Create a nice floating plane with border
      const planeGeo = new THREE.PlaneGeometry(1.6, 1.6);
      
      // Load texture with standard CORS
      const texture = textureLoader.load(nextImgPath, (tex) => {
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
      });

      // Customized mesh material that supports transparency and vertex glow
      const meshMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        opacity: 0.0, // starts fully transparent and fades in
      });

      const cardMesh = new THREE.Mesh(planeGeo, meshMat);
      cardMesh.position.set(mappedX, mappedY, 0.4);
      scene.add(cardMesh);

      // Save registration
      grabbedImages.push({
        mesh: cardMesh,
        texture: texture,
        scale: 0.0,
        targetScale: 1.0,
        initialTime: Date.now(),
        isReleased: false,
        releaseTime: 0,
        pos: new THREE.Vector3(mappedX, mappedY, 0.4),
        velocity: new THREE.Vector3(0, 0, 0)
      });

      // Keep only up to IMAGE_GRAB_CONFIG.maxActiveImages (e.g. 5) active cards concurrently
      if (grabbedImages.length > 5) {
        const oldest = grabbedImages.shift();
        if (oldest) {
          scene.remove(oldest.mesh);
          oldest.texture.dispose();
          (oldest.mesh.material as THREE.Material).dispose();
          oldest.mesh.geometry.dispose();
        }
      }
    };

    // 7. Core Render Loop
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = 0;
    let clock = new THREE.Clock();
    let lastElapsed = 0;

    let animationId: number;
    let activeColorScheme = stateRef.current.debugSettings.colorScheme;
    let activeExplosionMode = stateRef.current.debugSettings.explosionMode;
    let lastUProgressValue = -1.0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      try {
        const time = clock.getElapsedTime();
        const delta = Math.min(0.1, time - lastElapsed);
        lastElapsed = time;
        
        const debugSettings = stateRef.current.debugSettings;
        const currentGesture = stateRef.current.gesture;
        const prevGesture = stateRef.current.prevGesture;
        const handLandmarks = stateRef.current.handLandmarks;

        // --- FPS tracker ---
        const now = performance.now();
        frameCount++;
        fpsTimer += (now - lastTime);
        lastTime = now;
        if (fpsTimer >= 1000) {
          fpsRef.current = Math.round((frameCount * 1000) / fpsTimer);
          frameCount = 0;
          fpsTimer = 0;
        }

        // --- Refresh target positions dynamically if gesture or parameters change ---
        const refreshTargets = () => {
          if (currentGesture === 'one') {
            applyShapeTargets('tree', activeColorScheme, activeExplosionMode);
          } else if (currentGesture === 'two') {
            applyShapeTargets('pig_girl', activeColorScheme, activeExplosionMode);
          } else {
            updateCakeParticles(activeColorScheme, activeExplosionMode);
          }
        };

        if (debugSettings.colorScheme !== activeColorScheme || debugSettings.explosionMode !== activeExplosionMode) {
          activeColorScheme = debugSettings.colorScheme;
          activeExplosionMode = debugSettings.explosionMode;
          refreshTargets();
        }

        if (currentGesture !== prevGesture) {
          refreshTargets();
        }

        // --- Compute Current Dispersal progression (uProgress) ---
        if (debugSettings.manualProgress) {
          // Leverages debug custom controls
          stateRef.current.targetProgress = debugSettings.progressValue;
        } else {
          // Fist/Closed Hand/None -> progress = 0.0 (cake); Open/One/Two -> progress = 1.0 (morph to targets)
          if (currentGesture === 'fist' || currentGesture === 'none') {
            stateRef.current.targetProgress = 0.0;
          } else if (currentGesture === 'open' || currentGesture === 'one' || currentGesture === 'two' || currentGesture === 'ok') {
            stateRef.current.targetProgress = 1.0;
          }
        }

        // Standard cubic smoothing/lerping transitions
        stateRef.current.progress += (stateRef.current.targetProgress - stateRef.current.progress) * 0.08;
        // Truncate tiny decimals
        if (Math.abs(stateRef.current.progress - stateRef.current.targetProgress) < 0.001) {
          stateRef.current.progress = stateRef.current.targetProgress;
        }

        // Render uProgress values to shader
        shaderMaterial.uniforms.uProgress.value = stateRef.current.progress;
        shaderMaterial.uniforms.uTime.value = time;
        if (currentGesture === 'one' || currentGesture === 'two') {
          shaderMaterial.uniforms.uNoiseScale.value = 0.0;
        } else {
          shaderMaterial.uniforms.uNoiseScale.value = 1.0;
        }

        // Dynamically toggle blending and bloom for normal/glow settings
        if (currentGesture === 'two') {
          if (shaderMaterial.blending !== THREE.NormalBlending) {
            shaderMaterial.blending = THREE.NormalBlending;
            shaderMaterial.needsUpdate = true;
          }
          if (bloomPass) {
            bloomPass.strength = 0.01; // Normal flat look without bright light saturation
          }
        } else {
          if (shaderMaterial.blending !== THREE.AdditiveBlending) {
            shaderMaterial.blending = THREE.AdditiveBlending;
            shaderMaterial.needsUpdate = true;
          }
          if (bloomPass) {
            const baseBloom = 0.25;
            bloomPass.strength = baseBloom + stateRef.current.progress * 0.15; // sweet, subtle neon aura
          }
        }

        // --- Real-time coordinates translating and Image Grabs ---
        let mappedX = 0;
        let mappedY = 0;
        let handDetected = false;

        const currentLandmarks = (handLandmarksRef && handLandmarksRef.current !== undefined) ? handLandmarksRef.current : handLandmarks;
        if (currentLandmarks && currentLandmarks.length >= 21) {
          handDetected = true;
          let trackX = 0;
          let trackY = 0;

          if (currentGesture === 'ok') {
            const thumbTip = currentLandmarks[4];
            const indexTip = currentLandmarks[8];
            trackX = (thumbTip.x + indexTip.x) / 2;
            trackY = (thumbTip.y + indexTip.y) / 2;
          } else {
            // Use stable middle finger knuckle (landmark 9) representing the center of palm for smoother translate sweeping
            const palmCenter = currentLandmarks[9];
            trackX = palmCenter.x;
            trackY = palmCenter.y;
          }

          // Viewport scale mapping for z = 0 space
          const widthScale = 7.0;  // adapts horizontal sweep
          const heightScale = 5.2; // adapts vertical sweep
          // MediaPipe X is 0 (left) to 1 (right). Let's mirror so:
          // Moving actual hand left moves 3D object left (looking at a mirror)
          mappedX = (0.5 - trackX) * widthScale;
          mappedY = -(trackY - 0.5) * heightScale;
        }

        // Smoothly update our 3D interactive tilt/follow offsets based on coords
        if (handDetected) {
          stateRef.current.smoothedHandX += (mappedX - stateRef.current.smoothedHandX) * 0.35;
          stateRef.current.smoothedHandY += (mappedY - stateRef.current.smoothedHandY) * 0.35;
          stateRef.current.isHandDetected = true;
        } else {
          // Return home smoothly if no hand detected
          stateRef.current.smoothedHandX += (0.0 - stateRef.current.smoothedHandX) * 0.06;
          stateRef.current.smoothedHandY += (0.0 - stateRef.current.smoothedHandY) * 0.06;
          stateRef.current.isHandDetected = false;
        }

        const rawTiltX = stateRef.current.smoothedHandY * 0.45;
        const rawTiltZ = -stateRef.current.smoothedHandX * 0.45;
        const handRotationY = stateRef.current.smoothedHandX * 0.80;

        // Translate the entire particle system slightly to follow the hand position 3D coordinates
        // This makes the cake physically slide and translate left/right/up/down when the hand coordinates change!
        // We bypass this tracking for the pig girl to present her in an absolute static centered state.
        let targetPosX = 0.0;
        let targetPosY = 0.0;
        if (currentGesture !== 'two') {
          targetPosX = stateRef.current.smoothedHandX * 1.8;
          targetPosY = stateRef.current.smoothedHandY * 1.8;
        }
        cakeParticlesMesh.position.x += (targetPosX - cakeParticlesMesh.position.x) * 0.5;
        cakeParticlesMesh.position.y += (targetPosY - cakeParticlesMesh.position.y) * 0.5;

        // Keep point light underglow perfectly aligned with cake translation
        pointLight.position.x = cakeParticlesMesh.position.x;
        pointLight.position.y = cakeParticlesMesh.position.y - 1.5;

        // Mix hand positioning tilting rotation with user mouse drag rotation!
        // Lock totalRotX and totalRotZ to 0.0 to completely disable vertical tilting and preserve vertical shapes
        const totalRotX = 0.0;
        const totalRotZ = 0.0;
        let totalRotY = 0.0;
        
        // --- Normal Cake Micro-Animation ---
        let baseScale = 1.0;

        if (currentGesture !== 'two') {
          totalRotY = handRotationY + dragRotationRef.current.y;
          const spinSpeed = stateRef.current.isHandDetected ? 0.015 : 0.08; // Slower horizontal self-rotation ("慢慢转吧")
          if (stateRef.current.progress < 0.1) {
            baseScale = 1.0 + Math.sin(time * 2.2) * 0.024;
            totalRotY += time * spinSpeed;
          } else {
            totalRotY += time * (spinSpeed + stateRef.current.progress * 0.08);
          }
        } else {
          // Keeps the pig-hat girl shape completely static as requested ("呈现一个静态的画面，不要转了就放在那边就好了")
          totalRotY = 0.0;
          baseScale = 1.05;
        }

        // Apply final combined rotation
        cakeParticlesMesh.rotation.x = totalRotX;
        cakeParticlesMesh.rotation.y = totalRotY;
        cakeParticlesMesh.rotation.z = totalRotZ;

        // Apply final combined scale (zoomScaleRef.current multiplies base breathe scale)
        const finalScale = baseScale * zoomScaleRef.current;
        cakeParticlesMesh.scale.set(finalScale, finalScale, finalScale);

        // Detect transition: from NOT OK to OK -> spawn new pinch mesh!
        if (currentGesture === 'ok' && prevGesture !== 'ok' && handDetected) {
          triggerNewPinch(mappedX, mappedY);
        }

        // For subsequent frames, update prevGesture status
        stateRef.current.prevGesture = currentGesture;

        // --- 🤖 Dynamic Holographic Floating Gesture HUD ---
        const hud = hudRef.current;
        const hudText = hudTextRef.current;
        const hudSub = hudSubRef.current;

        if (hud && hudText && hudSub) {
          let showHologram = false;
          let text = '';
          let subText = '';
          
          if (currentGesture === 'one') {
            showHologram = true;
            text = '🎄';
            subText = 'HOLIDAY TREE | 圣诞树';
          } else if (currentGesture === 'two') {
            showHologram = true;
            text = '🐷';
            subText = 'PIGGY DREAM | 甜梦小猪';
          }
          
          if (showHologram) {
            hudText.innerText = text;
            hudSub.innerText = subText;
            
            const pctX = (0.5 + stateRef.current.smoothedHandX / 7.0) * 100;
            const pctY = (0.5 - stateRef.current.smoothedHandY / 5.2) * 100;
            
            hud.style.left = `${pctX}%`;
            hud.style.top = `${pctY - 12}%`;
            hud.style.transform = `translate(-50%, -50%) scale(${1.0 + Math.sin(time * 5.0) * 0.08})`;
            hud.style.opacity = '1';
          } else {
            hud.style.opacity = '0';
          }
        }

        // --- Manage the pinched card assets ---
        for (let i = grabbedImages.length - 1; i >= 0; i--) {
          const item = grabbedImages[i];
          const mat = item.mesh.material as THREE.MeshBasicMaterial;

          if (!item.isReleased) {
            // --- HELD GRABBED STATE ---
            if (currentGesture !== 'ok' || !handDetected) {
              // User broke pinch -> release into wild!
              item.isReleased = true;
              item.releaseTime = Date.now();
              // Provide a light random drift boost outwards and upwards
              item.velocity.set(
                (Math.random() - 0.5) * 1.5,
                Math.random() * 1.2 + 0.8,
                (Math.random() - 0.5) * 1.5
              );
            } else {
              // Smoothly track active coordinates
              const targetPos = new THREE.Vector3(mappedX, mappedY, 0.4);
              item.mesh.position.lerp(targetPos, 0.3);
              
              // Handle Overshoot Easing on Scale (0 to 1 with spring bounce)
              item.scale += (item.targetScale - item.scale) * 0.18;
              const bounceScale = item.scale * (1.0 + Math.sin((Date.now() - item.initialTime) * 0.015) * 0.15 * Math.exp(-(Date.now() - item.initialTime) * 0.005));
              item.mesh.scale.setScalar(bounceScale * debugSettings.pinchScale);
              
              // Set opacity to fully opaque
              mat.opacity = Math.min(1.0, mat.opacity + 0.1);
            }
          } else {
            // --- DRIFTING & FADE AWAY STATE ---
            // Update position using drift physics engine with slight air resistance
            item.mesh.position.addScaledVector(item.velocity, delta);
            item.velocity.multiplyScalar(0.96); // drag friction

            // Rotate slightly as it floats away
            item.mesh.rotation.z += 0.35 * delta;
            item.mesh.rotation.y += 0.2 * delta;

            // Compute fade progression matching uFadeOutDuration (e.g. 3000ms)
            const elapsed = Date.now() - item.releaseTime;
            const configFadeDur = debugSettings.manualProgress ? 4000 : 3000;
            const fadeRatio = 1.0 - (elapsed / configFadeDur);

            if (fadeRatio <= 0) {
              // Clean up resources immediately from scene graph
              scene.remove(item.mesh);
              item.texture.dispose();
              mat.dispose();
              item.mesh.geometry.dispose();
              grabbedImages.splice(i, 1);
            } else {
              mat.opacity = fadeRatio;
              // Shring gently as it melts away
              item.mesh.scale.setScalar(item.scale * fadeRatio * debugSettings.pinchScale);
            }
          }
        }

        // Spin stars
        starField.rotation.y = -time * 0.012;

        // Update live WebGL diagnostic HUD if elements are present on screen
        const tMode = document.getElementById('telemetry-mode');
        const tFps = document.getElementById('telemetry-fps');
        const tHand = document.getElementById('telemetry-hand');
        const tCoords = document.getElementById('telemetry-coords');
        const tMesh = document.getElementById('telemetry-mesh');

        if (tMode) tMode.innerText = 'RENDER MODE: 3D WebGL (GPU)';
        if (tFps) tFps.innerText = `刷新帧率: ${fpsRef.current || 60} FPS (3D 帧数)`;
        if (tHand) {
          tHand.innerText = `手部连接: ${currentLandmarks ? `已连接手部数据 (${currentLandmarks.length} 点)` : '未探测到手部输入'}`;
          tHand.style.color = currentLandmarks ? '#10b981' : '#f43f5e';
        }
        if (tCoords) {
          tCoords.innerText = `手势映射 X/Y: (${stateRef.current.smoothedHandX.toFixed(2)}, ${stateRef.current.smoothedHandY.toFixed(2)})`;
        }
        if (tMesh && cakeParticlesMesh) {
          tMesh.innerText = `蛋糕空间坐标 X/Y: (${cakeParticlesMesh.position.x.toFixed(2)}, ${cakeParticlesMesh.position.y.toFixed(2)})`;
        }

        // Render Scene with Postprocessing bloom and fall back to classic renderer if unsupported/errored
        if (composer) {
          try {
            composer.render();
          } catch (bloomError) {
            renderer.render(scene, camera);
          }
        } else {
          renderer.render(scene, camera);
        }
      } catch (renderLoopError) {
        console.error("Error in rendering frame:", renderLoopError);
      }
    };

    animate();

    // 8. Cleanup resources to avoid memory bloat
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (composer) {
        composer.dispose();
      }
      shaderMaterial.dispose();
      starMat.dispose();
      starGeo.dispose();
      geometry.dispose();
      
      // Dispose active card assets
      for (const item of grabbedImages) {
        scene.remove(item.mesh);
        item.texture.dispose();
        (item.mesh.material as THREE.Material).dispose();
        item.mesh.geometry.dispose();
      }

      if (container && renderer.domElement) {
        try {
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        } catch (err) {
          console.warn("Error removing canvas child element during unmount:", err);
        }
      }
    };
  }, [debugSettings.particleCount]);

  if (webglError) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#060212]">
        {/* Render 2D Canvas Fallback */}
        <canvas
          ref={fallbackCanvasRef}
          className="w-full h-full absolute inset-0"
        />

        {/* 🔴 Telemetry Hud Panel */}
        <div 
          id="gl-telemetry-panel"
          className="absolute bottom-4 left-4 z-35 bg-slate-950/85 border border-indigo-500/30 rounded-2xl p-3 text-[10px] font-mono text-slate-300 pointer-events-none flex flex-col gap-1 shadow-lg shadow-indigo-950/30 max-w-[220px]"
        >
          <div className="text-indigo-400 font-bold border-b border-indigo-900/40 pb-1 mb-1 flex items-center gap-1.5 justify-between">
            <div className="flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              运行状态诊断
            </div>
            <span id="telemetry-mode" className="text-[8px] bg-indigo-500/10 text-indigo-400 px-1 rounded">2D Canvas</span>
          </div>
          <div id="telemetry-fps">刷新帧率: --</div>
          <div id="telemetry-hand">手势观测: --</div>
          <div id="telemetry-coords">手势坐标: --</div>
          <div id="telemetry-mesh">空间坐标: --</div>
          <div className="mt-1 pt-1 border-t border-slate-900 text-[8px] text-slate-500 leading-normal">
            💡 提示：此时 WebGL 无法启动，已自动开启 2D 星河粒子备份兼容模式。
          </div>
        </div>

        {/* Floating warning guide */}
        <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10">
          <div className="bg-slate-950/80 backdrop-blur-xl border border-rose-500/25 p-5 rounded-3xl max-w-sm text-center shadow-2xl pointer-events-auto">
            <h3 className="text-sm font-bold text-rose-400 flex items-center justify-center gap-2 mb-2">
              ⚠️ WebGL 渲染受限 (Rendering Constrained)
            </h3>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-4 text-left">
              系统检测到您的当前浏览器不支持或禁用了 WebGL。已为您自动无缝激活 <strong className="text-emerald-400">『2D 星河粒子兼容模式』</strong>，您现在可以在下方正常开展交互调试！
            </p>
            <div className="p-2.5 bg-slate-900 rounded-xl text-[10px] text-left text-slate-400 leading-normal space-y-1 mb-4 font-mono">
              <p>💡 <strong className="text-slate-200">最佳修复步骤：</strong></p>
              <p>1. 点击标题下方的按钮 <strong className="text-indigo-400">『在新窗口打开』</strong>，避免 Iframe 沙箱特权隔离限制。</p>
              <p>2. 请确保您的系统浏览器设置中已开启 <strong className="text-indigo-400">“硬件加速”</strong> 选项。</p>
            </div>
            
            <a
              href={window.location.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs ring-2 ring-indigo-400/20 active:scale-95 transition-all"
            >
              🚀 在独立新网页中打开 (最推荐)
            </a>
          </div>
        </div>

        {/* Dynamic Floating Holographic HUD Overlay */}
        <div 
          ref={hudRef}
          className="absolute pointer-events-none opacity-0 z-20 flex flex-col items-center transition-opacity duration-300 ease-out select-none"
          style={{ left: '50%', top: '50%' }}
        >
          {/* Glow halo outer ring */}
          <div className="w-24 h-24 rounded-full border-[3px] border-cyan-400/80 flex items-center justify-center bg-cyan-950/20 backdrop-blur-md shadow-[0_0_35px_rgba(34,211,238,0.7)] animate-pulse">
            {/* Inner crystal display text */}
            <span 
              ref={hudTextRef}
              className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-indigo-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)] select-none font-sans"
            />
          </div>
          {/* Glowing laser sight connector line */}
          <div className="h-6 w-[2px] bg-gradient-to-b from-cyan-400/80 to-transparent my-1.5 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
          {/* Holographic interactive details panel */}
          <div className="px-3.5 py-1.5 bg-slate-950/95 border-2 border-cyan-500/40 rounded-2xl shadow-2xl flex items-center gap-1.5 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            <span 
              ref={hudSubRef}
              className="text-[10px] font-mono font-bold tracking-widest text-cyan-200 uppercase whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full h-full absolute inset-0 md:cursor-grab active:cursor-grabbing" 
        id="three-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      />

      {/* 🔴 Telemetry Hud Panel */}
      <div 
        id="gl-telemetry-panel"
        className="absolute bottom-4 left-4 z-20 bg-slate-950/85 border border-indigo-500/30 rounded-2xl p-3 text-[10px] font-mono text-slate-300 pointer-events-none flex flex-col gap-1 shadow-lg shadow-indigo-950/30 max-w-[220px]"
      >
        <div className="text-indigo-400 font-bold border-b border-indigo-900/40 pb-1 mb-1 flex items-center gap-1.5 justify-between">
          <div className="flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            运行状态诊断
          </div>
          <span id="telemetry-mode" className="text-[8px] bg-indigo-500/10 text-indigo-400 px-1 rounded font-normal">WebGL</span>
        </div>
        <div id="telemetry-fps">刷新帧率: --</div>
        <div id="telemetry-hand">手势观测: --</div>
        <div id="telemetry-coords">手势坐标: --</div>
        <div id="telemetry-mesh">空间坐标: --</div>
        <div className="mt-1 pt-1 border-t border-slate-900 text-[8px] text-slate-500 leading-normal">
          💡 提示：若手势不可用，可在画布上【拖拽鼠标】旋转，【滚轮】缩放。
        </div>
      </div>

      {/* Dynamic Floating Holographic HUD Overlay */}
      <div 
        ref={hudRef}
        className="absolute pointer-events-none opacity-0 z-20 flex flex-col items-center transition-opacity duration-300 ease-out select-none"
        style={{ left: '50%', top: '50%' }}
      >
        {/* Glow halo outer ring */}
        <div className="w-24 h-24 rounded-full border-[3px] border-cyan-400/80 flex items-center justify-center bg-cyan-950/20 backdrop-blur-md shadow-[0_0_35px_rgba(34,211,238,0.7)] animate-pulse">
          {/* Inner crystal display text */}
          <span 
            ref={hudTextRef}
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-indigo-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)] select-none font-sans"
          />
        </div>
        {/* Glowing laser sight connector line */}
        <div className="h-6 w-[2px] bg-gradient-to-b from-cyan-400/80 to-transparent my-1.5 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        {/* Holographic interactive details panel */}
        <div className="px-3.5 py-1.5 bg-slate-950/95 border-2 border-cyan-500/40 rounded-2xl shadow-2xl flex items-center gap-1.5 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
          <span 
            ref={hudSubRef}
            className="text-[10px] font-mono font-bold tracking-widest text-cyan-200 uppercase whitespace-nowrap"
          />
        </div>
      </div>
    </div>
  );
};
