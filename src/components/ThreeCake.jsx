import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { createGlowTexture, generateCakeParticles } from "../lib/cakeGeometry";

const FLOATER_COUNT = 60;
const ROTATION_SPEED = 0.21;
const STAR_COUNT = 40;

export default function ThreeCake() {
  const containerRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);

  const initScene = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const w = window.innerWidth, h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true, antialias: true, powerPreference: "high-performance",
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 10, 2000);
    camera.position.set(0, 200, 550);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0x334466, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(0.5, -0.3, -1); scene.add(dir);

    const shortSide = Math.min(w, h), longSide = Math.max(w, h);
    const cakeW = shortSide * 0.35;
    const cakeH = longSide * 0.50;
    const rBot = cakeW * 0.50;
    const rTop = cakeW * 0.38;
    const hBot = cakeH * 0.52;
    const hTop = cakeH * 0.40;
    const layerGap = cakeH * 0.04;

    const cakeGroup = new THREE.Group();
    cakeGroup.position.y = -60;
    scene.add(cakeGroup);

    const { coords, colors, total, candleCount, flameCount } = generateCakeParticles(rBot, rTop, hBot, hTop, layerGap);

    const glowCanvas = createGlowTexture();
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    glowTex.needsUpdate = true;

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(coords, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Blue cake body + separate candle gold
    const colorArr = particleGeom.attributes.color.array;
    const posArr = particleGeom.attributes.position.array;
    const cakeEnd = total - candleCount - flameCount;
    for (let i = 0; i < cakeEnd; i++) {
      const l = colorArr[i * 3];
      const y = posArr[i * 3 + 1];
      if (y < 0) {
        colorArr[i * 3]     = 0.90 + l * 0.10;
        colorArr[i * 3 + 1] = 0.92 + l * 0.08;
        colorArr[i * 3 + 2] = 1.0;
      } else {
        colorArr[i * 3]     = 0.88 + l * 0.12;
        colorArr[i * 3 + 1] = 0.95 + l * 0.05;
        colorArr[i * 3 + 2] = 1.0;
      }
    }
    // Candle + flame already have their own colors from geometry, leave as-is
    particleGeom.attributes.color.needsUpdate = true;

    const particleMat = new THREE.PointsMaterial({
      size: 4.5, map: glowTex, blending: THREE.NormalBlending,
      depthWrite: false, vertexColors: true, transparent: true, opacity: 0.95,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    cakeGroup.add(particles);

    // Floaters 闂?blue tones matching cake
    const floaterGroup = new THREE.Group();
    const floaterCoords = new Float32Array(FLOATER_COUNT * 3);
    const floaterColors = new Float32Array(FLOATER_COUNT * 3);
    const floaterData = [];
    for (let i = 0; i < FLOATER_COUNT; i++) {
      const idx = Math.floor(Math.random() * cakeEnd);
      floaterCoords[i*3]=coords[idx*3]; floaterCoords[i*3+1]=coords[idx*3+1]; floaterCoords[i*3+2]=coords[idx*3+2];
      floaterColors[i*3]=0.5; floaterColors[i*3+1]=0.7; floaterColors[i*3+2]=1.0;
      floaterData.push({ baseIdx:idx, life:Math.random()*3, maxLife:2+Math.random()*3,
        vy:-10-Math.random()*25, vx:(Math.random()-0.5)*6, phase:Math.random()*Math.PI*2 });
    }
    const floaterGeom = new THREE.BufferGeometry();
    floaterGeom.setAttribute("position", new THREE.BufferAttribute(floaterCoords, 3));
    floaterGeom.setAttribute("color", new THREE.BufferAttribute(floaterColors, 3));
    const floaterMat = new THREE.PointsMaterial({
      size: 2.5, map: glowTex, blending: THREE.AdditiveBlending,
      depthWrite: false, vertexColors: true, transparent: true, opacity: 0.6,
    });
    const floaterPoints = new THREE.Points(floaterGeom, floaterMat);
    floaterGroup.add(floaterPoints);
    cakeGroup.add(floaterGroup);

    const starPos = new Float32Array(STAR_COUNT * 3);
    const starCol = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 150 + Math.random() * 200;
      starPos[i*3] = Math.cos(a) * r;
      starPos[i*3+1] = (Math.random() - 0.5) * 250;
      starPos[i*3+2] = Math.sin(a) * r;
      starCol[i*3]=1; starCol[i*3+1]=1; starCol[i*3+2]=1;
    }
    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeom.setAttribute("color", new THREE.BufferAttribute(starCol, 3));
    const starMat = new THREE.PointsMaterial({
      size: 2, map: glowTex, blending: THREE.AdditiveBlending,
      depthWrite: false, vertexColors: true, transparent: true, opacity: 0.8,
    });
    scene.add(new THREE.Points(starGeom, starMat));

    stateRef.current = {
      renderer, scene, camera, starMat,
      cakeGroup, particles, particleMat,
      floaterGroup, floaterPoints, floaterData, floaterCoords, floaterColors,
      total, flameCount, candleCount, cakeEnd, coords,
      rBot, rTop, hBot, hTop, layerGap,
      rotation: 0, elapsed: 0,
      interaction: { touching: false, scatterProgress: 0, targetProgress: 0, returnTimer: 0 },
    };
  }, []);

  const tick = useCallback(() => {
    const s = stateRef.current;
    if (!s) return;
    s.elapsed += 0.016;
    s.rotation += ROTATION_SPEED * 0.016;
    s.cakeGroup.rotation.y = s.rotation;

    const int = s.interaction;
    const spd = int.touching ? 3 : 1.5;
    if (int.touching) { int.targetProgress = 1; }
    else { int.returnTimer += 0.016; if (int.returnTimer > 0.6) int.targetProgress = 0; }
    int.scatterProgress += (int.targetProgress - int.scatterProgress) * Math.min(spd * 0.016, 1);

    if (int.scatterProgress > 0.001) {
      const posArr = s.particles.geometry.attributes.position.array;
      for (let i = 0; i < s.total; i++) {
        const bx=s.coords[i*3], by=s.coords[i*3+1], bz=s.coords[i*3+2];
        const dist=Math.sqrt(bx*bx+by*by+bz*bz)||1;
        const sc=int.scatterProgress*s.rBot*0.5;
        posArr[i*3]=bx+(bx/dist)*sc; posArr[i*3+1]=by+(by/dist)*sc*0.6; posArr[i*3+2]=bz+(bz/dist)*sc;
      }
      s.particles.geometry.attributes.position.needsUpdate = true;
    } else if (int.targetProgress === 0) {
      const posArr = s.particles.geometry.attributes.position.array;
      for (let i = 0; i < s.total; i++) {
        posArr[i*3] += (s.coords[i*3] - posArr[i*3]) * 0.15;
        posArr[i*3+1] += (s.coords[i*3+1] - posArr[i*3+1]) * 0.15;
        posArr[i*3+2] += (s.coords[i*3+2] - posArr[i*3+2]) * 0.15;
      }
      s.particles.geometry.attributes.position.needsUpdate = true;
    }

    const fArr = s.floaterCoords;
    for (let i = 0; i < FLOATER_COUNT; i++) {
      const fd = s.floaterData[i]; fd.life += 0.016;
      const bx=s.coords[fd.baseIdx*3], by=s.coords[fd.baseIdx*3+1], bz=s.coords[fd.baseIdx*3+2];
      fArr[i*3]=bx+fd.vx*fd.life+Math.sin(s.elapsed*1.5+fd.phase)*8;
      fArr[i*3+1]=by+fd.vy*fd.life;
      fArr[i*3+2]=bz+Math.cos(s.elapsed*1.5+fd.phase)*6;
      s.floaterColors[i*3+1]=0.7*(1-fd.life/fd.maxLife);
      if (fd.life>=fd.maxLife) { fd.life=0; fd.baseIdx=Math.floor(Math.random()*s.cakeEnd);
        fd.vy=-10-Math.random()*25; fd.vx=(Math.random()-0.5)*6; fd.maxLife=2+Math.random()*3; fd.phase=Math.random()*Math.PI*2; }
    }
    s.floaterPoints.geometry.attributes.position.needsUpdate = true;
    s.floaterPoints.geometry.attributes.color.needsUpdate = true;

    const fc = s.flameCount || 15;
    if (fc > 0) {
      const pArr = s.particles.geometry.attributes.position.array;
      for (let i = s.total - fc; i < s.total; i++) {
        pArr[i*3+1] += Math.sin(s.elapsed*10 + i*2) * 1.5;
        pArr[i*3]   += Math.cos(s.elapsed*8 + i) * 0.5;
      }
      s.particles.geometry.attributes.position.needsUpdate = true;
    }

    s.starMat.opacity = 0.5 + Math.sin(s.elapsed * 1.5) * 0.2;
    s.renderer.render(s.scene, s.camera);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const handleDown = useCallback(() => {
    const s = stateRef.current;
    if (s) { s.interaction.touching = true; s.interaction.returnTimer = 0; }
  }, []);
  const handleUp = useCallback(() => {
    const s = stateRef.current;
    if (s) { s.interaction.touching = false; }
  }, []);

  useEffect(() => {
    initScene();
    rafRef.current = requestAnimationFrame(tick);
    const handleResize = () => {
      const s = stateRef.current;
      if (!s) return;
      const w = window.innerWidth, h = window.innerHeight;
      s.camera.aspect = w / h;
      s.camera.updateProjectionMatrix();
      s.renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      const s = stateRef.current;
      if (s) { s.renderer.dispose(); s.renderer.domElement.remove(); }
    };
  }, [initScene, tick]);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "auto", touchAction: "none" }}
      onTouchStart={(e) => { e.preventDefault(); handleDown(); }}
      onTouchEnd={(e) => { e.preventDefault(); handleUp(); }}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseLeave={handleUp}
    />
  );
}
