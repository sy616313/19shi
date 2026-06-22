import React, { useEffect, useRef, useState } from 'react';
import { Landmark, GestureType, DebugSettings } from '../types';
import { detectGesture, GestureSmoother } from '../utils/gestures';
import { Camera, RefreshCw, AlertTriangle, Check, VideoOff, MousePointer, HelpCircle, Eye } from 'lucide-react';

interface WebcamPanelProps {
  onGestureDetected: (gesture: GestureType, landmarks: Landmark[] | null) => void;
  debugSettings: DebugSettings;
  currentGesture: GestureType;
}

// Generate high fidelity 3D simulated MediaPipe hand structure based on relative cursor [0,1] and gesture state.
// This allows testing the entire Three.js volumetric particle system flawlessly without physical camera access.
export function createSimulatedHand(mx: number, my: number, gesture: GestureType): Landmark[] {
  const list: Landmark[] = [];
  for (let i = 0; i < 21; i++) {
    list.push({ x: mx, y: my, z: 0 });
  }

  // Base Wrist Point
  list[0] = { x: mx, y: my + 0.16, z: 0 };

  // Finger base joints MCP landmarks
  list[1] = { x: mx - 0.08, y: my + 0.11, z: -0.01 };
  list[5] = { x: mx - 0.05, y: my + 0.07, z: 0 };
  list[9] = { x: mx - 0.01, y: my + 0.06, z: 0 };
  list[13] = { x: mx + 0.03, y: my + 0.07, z: 0 };
  list[17] = { x: mx + 0.07, y: my + 0.09, z: -0.01 };

  // Thumb: PIP(2), DIP(3), TIP(4)
  if (gesture === 'fist') {
    list[2] = { x: mx - 0.06, y: my + 0.09, z: -0.02 };
    list[3] = { x: mx - 0.04, y: my + 0.09, z: -0.03 };
    list[4] = { x: mx - 0.03, y: my + 0.10, z: -0.04 };
  } else if (gesture === 'ok') {
    // Pinched together with the index tip at (mx - 0.03, my + 0.01)
    list[2] = { x: mx - 0.07, y: my + 0.06, z: -0.02 };
    list[3] = { x: mx - 0.05, y: my + 0.03, z: -0.01 };
    list[4] = { x: mx - 0.03, y: my + 0.01, z: 0 };
  } else {
    // Open / Relaxed
    list[2] = { x: mx - 0.11, y: my + 0.07, z: -0.02 };
    list[3] = { x: mx - 0.13, y: my + 0.04, z: -0.03 };
    list[4] = { x: mx - 0.14, y: my + 0.01, z: -0.04 };
  }

  // Main four fingers: Index, Middle, Ring, Pinky
  const baseIndices = [5, 9, 13, 17];
  const fingerAngles = [-0.14, -0.03, 0.06, 0.15];
  const fingerLengths = [0.15, 0.17, 0.16, 0.13];

  for (let f = 0; f < 4; f++) {
    const bIdx = baseIndices[f];
    const angle = fingerAngles[f];
    const length = fingerLengths[f];
    
    // Direction vector
    const dx = Math.sin(angle);
    const dy = -Math.cos(angle);
    
    const mcp = list[bIdx];

    let isFingerCurled = false;
    if (gesture === 'fist') {
      isFingerCurled = true;
    } else if (gesture === 'ok' && f === 0) {
      isFingerCurled = true; // Index curls to meet the thumb
    }

    if (isFingerCurled) {
      if (gesture === 'ok' && f === 0) {
        // Index finger loops down to close the OK ring perfectly
        list[bIdx + 1] = { x: mcp.x - 0.01, y: mcp.y - 0.03, z: -0.01 };
        list[bIdx + 2] = { x: mx - 0.025, y: my + 0.00, z: -0.01 };
        list[bIdx + 3] = { x: mx - 0.03, y: my + 0.01, z: 0 }; // Pinch touchpoint
      } else {
        // Standard folded loop for fist curl
        list[bIdx + 1] = { x: mcp.x + dx * 0.035, y: mcp.y + dy * 0.035 - 0.015, z: -0.02 };
        list[bIdx + 2] = { x: mcp.x + dx * 0.018, y: mcp.y + dy * 0.018 + 0.01, z: -0.03 };
        list[bIdx + 3] = { x: mcp.x + dx * 0.009, y: mcp.y + dy * 0.009 + 0.025, z: -0.025 };
      }
    } else {
      // Extended straight finger
      list[bIdx + 1] = { x: mcp.x + dx * (length * 0.35), y: mcp.y + dy * (length * 0.35), z: -0.01 };
      list[bIdx + 2] = { x: mcp.x + dx * (length * 0.68), y: mcp.y + dy * (length * 0.68), z: -0.02 };
      list[bIdx + 3] = { x: mcp.x + dx * length, y: mcp.y + dy * length, z: -0.03 };
    }
  }

  return list;
}

export const WebcamPanel: React.FC<WebcamPanelProps> = ({
  onGestureDetected,
  debugSettings,
  currentGesture
}) => {
  // Keep live track of the latest callback ref to prevent any stale React closures inside asynchronous MediaPipe loops
  const onGestureDetectedRef = useRef(onGestureDetected);
  useEffect(() => {
    onGestureDetectedRef.current = onGestureDetected;
  }, [onGestureDetected]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [mpStatus, setMpStatus] = useState<'loading_libs' | 'initializing' | 'ready' | 'error'>('loading_libs');
  const [errorMsg, setErrorMsg] = useState('');
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [retryCounter, setRetryCounter] = useState(0);

  // Simulation controls state
  const [useSimulation, setUseSimulation] = useState(false);
  const [simulatedGesture, setSimulatedGesture] = useState<GestureType>('none');
  const [simulatedPos, setSimulatedPos] = useState({ x: 0.5, y: 0.5 });
  const [isHoveringTrackpad, setIsHoveringTrackpad] = useState(false);

  // Smoothing class
  const smootherRef = useRef(new GestureSmoother(3));

  // Connection bone indices
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],       // Thumb
    [0, 5], [5, 6], [6, 7], [7, 8],       // Index Finger
    [5, 9], [9, 10], [10, 11], [11, 12],  // Middle
    [9, 13], [13, 14], [14, 15], [15, 16],// Ring
    [13, 17], [17, 18], [18, 19], [19, 20]// Pinky
  ];

  // Draw simulated skeleton on trackpad canvas
  const drawSimulatedSkeleton = () => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;

    const width = canvasElement.width || 320;
    const height = canvasElement.height || 240;

    // Standard high-efficiency coordinate cleaning
    ctx.clearRect(0, 0, width, height);

    // Draw stylized grid background representing the cyber trackpad space
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
    ctx.lineWidth = 1;
    const gridSpacing = 24;
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (useSimulation) {
      const simulatedHand = createSimulatedHand(simulatedPos.x, simulatedPos.y, simulatedGesture);

      // 1. Draw connections (neon cyan cyber line)
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00f7ff';
      ctx.strokeStyle = 'rgba(0, 247, 255, 0.85)';

      for (const conn of connections) {
        const p1 = simulatedHand[conn[0]];
        const p2 = simulatedHand[conn[1]];
        if (!p1 || !p2) continue;

        ctx.beginPath();
        // Since it's simulated direct tracking, match raw X coordinates on display (or mirror matching webcam preference):
        ctx.moveTo((1 - p1.x) * width, p1.y * height);
        ctx.lineTo((1 - p2.x) * width, p2.y * height);
        ctx.stroke();
      }

      // 2. Draw joints (neon glowing vibrant hot pink dots)
      ctx.fillStyle = '#ff007f';
      ctx.shadowColor = '#ff007f';
      ctx.shadowBlur = 12;

      for (let i = 0; i < simulatedHand.length; i++) {
        const p = simulatedHand[i];
        ctx.beginPath();
        ctx.arc((1 - p.x) * width, p.y * height, i === 4 || i === 8 ? 7 : 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Highlight Pinch halo
        if ((i === 4 || i === 8) && simulatedGesture === 'ok') {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc((1 - p.x) * width, p.y * height, 11, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Reset shadows
      ctx.shadowBlur = 0;
    }
  };

  // Manage WebCam lifecycle and script loading
  useEffect(() => {
    let handsInstance: any = null;
    let cameraInstance: any = null;
    let active = true;

    if (useSimulation) {
      // In simulation mode, turn off webcam loop
      setErrorMsg("");
      return;
    }

    // Set a 30-second loading limit in case CDN is slow or blocked.
    // Automatically fall back to simulation mode so user is not stuck on a loading spinner.
    const loadTimeout = setTimeout(() => {
      if (active && (!(window as any).Hands || !(window as any).Camera)) {
        console.warn("MediaPipe libraries loading timed out (30s limit reached). Falling back to simulation mode.");
        setErrorMsg("加载 MediaPipe 图像骨骼组件超时。我们已为您提供了手势虚拟『仿真盘』，您可以使用鼠标在下方滑屏和点击按钮来进行仿真操作，实时联动上面的3D特效！您也可以稍后点击下方“重新连接相机”进行再次尝试。");
        setMpStatus('error');
        setUseSimulation(true);
        setIsCameraActive(false);
      }
    }, 30000);

    const loadScriptList = (urls: string[], checkLoaded: () => boolean): Promise<string> => {
      if (checkLoaded()) return Promise.resolve(urls[0]);
      return new Promise<string>((resolve, reject) => {
        let index = 0;
        const tryNext = () => {
          if (index >= urls.length) {
            reject(new Error("所有备选 CDN 加载均超时或失败"));
            return;
          }
          const url = urls[index];
          const s = document.createElement('script');
          s.src = url;
          s.crossOrigin = 'anonymous';
          s.async = true;
          s.onload = () => {
            if (checkLoaded()) {
              console.log(`Successfully loaded script from: ${url}`);
              resolve(url);
            } else {
              index++;
              tryNext();
            }
          };
          s.onerror = () => {
            console.warn(`Failed to load ${url}, trying next candidate...`);
            index++;
            tryNext();
          };
          document.head.appendChild(s);
        };
        tryNext();
      });
    };

    const setupMediaPipe = (baseCdnUrl: string) => {
      if (!(window as any).Hands || !(window as any).Camera) {
        setMpStatus('loading_libs');
        return;
      }

      setMpStatus('initializing');

      try {
        const videoElement = videoRef.current;
        const canvasElement = canvasRef.current;

        if (!videoElement || !canvasElement) return;

        handsInstance = new (window as any).Hands({
          locateFile: (file: string) => `${baseCdnUrl}${file}`
        });

        handsInstance.setOptions({
          maxNumHands: 1,
          modelComplexity: 1,
          minDetectionConfidence: 0.65,
          minTrackingConfidence: 0.65
        });

        const connectionsMap = [
          [0, 1], [1, 2], [2, 3], [3, 4],
          [0, 5], [5, 6], [6, 7], [7, 8],
          [5, 9], [9, 10], [10, 11], [11, 12],
          [9, 13], [13, 14], [14, 15], [15, 16],
          [13, 17], [17, 18], [18, 19], [19, 20]
        ];

        handsInstance.onResults((results: any) => {
          if (!active || useSimulation) return;

          const ctx = canvasElement.getContext('2d');
          if (!ctx) return;

          if (canvasElement.width !== videoElement.videoWidth || canvasElement.height !== videoElement.videoHeight) {
            canvasElement.width = videoElement.videoWidth || 640;
            canvasElement.height = videoElement.videoHeight || 480;
          }

          ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

          if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            const src = results.multiHandLandmarks[0];
            const rawLandmarks: Landmark[] = [];
            for (let i = 0; i < 21; i++) {
              if (src[i]) {
                rawLandmarks.push({ x: src[i].x, y: src[i].y, z: src[i].z });
              }
            }
            
            const rawG = detectGesture(rawLandmarks);
            const smoothedG = smootherRef.current.add(rawG);

            onGestureDetectedRef.current(smoothedG, rawLandmarks);

            if (debugSettings.showSkeleton) {
              const { width, height } = canvasElement;

              ctx.lineWidth = 4;
              ctx.lineCap = 'round';
              ctx.shadowBlur = 8;
              ctx.shadowColor = '#00f7ff';
              
              for (const conn of connectionsMap) {
                const p1 = rawLandmarks[conn[0]];
                const p2 = rawLandmarks[conn[1]];
                if (!p1 || !p2) continue;

                ctx.strokeStyle = 'rgba(0, 247, 255, 0.75)';
                ctx.beginPath();
                ctx.moveTo((1 - p1.x) * width, p1.y * height);
                ctx.lineTo((1 - p2.x) * width, p2.y * height);
                ctx.stroke();
              }

              ctx.shadowColor = '#ff007f';
              ctx.fillStyle = '#ff007f';
              ctx.shadowBlur = 10;
              
              for (let i = 0; i < rawLandmarks.length; i++) {
                const p = rawLandmarks[i];
                ctx.beginPath();
                ctx.arc((1 - p.x) * width, p.y * height, i === 4 || i === 8 ? 8 : 5, 0, Math.PI * 2);
                ctx.fill();

                if (i === 4 || i === 8) {
                  ctx.strokeStyle = '#ffffff';
                  ctx.lineWidth = 2;
                  ctx.beginPath();
                  ctx.arc((1 - p.x) * width, p.y * height, 12, 0, Math.PI * 2);
                  ctx.stroke();
                }
              }
              ctx.shadowBlur = 0;
            }
          } else {
            onGestureDetectedRef.current('none', null);
          }
        });

        cameraInstance = new (window as any).Camera(videoElement, {
          onFrame: async () => {
            if (active && videoElement && isCameraActive && !useSimulation && handsInstance) {
              try {
                await handsInstance.send({ image: videoElement });
              } catch (err) {
                console.error("MediaPipe handsInstance.send error:", err);
              }
            }
          },
          width: 640,
          height: 480
        });

        cameraInstance.start().then(() => {
          setMpStatus('ready');
          setErrorMsg('');
        }).catch((err: any) => {
          console.error("Camera access failed:", err);
          const detail = err && (err.message || err.name || String(err));
          setErrorMsg(`未获得摄像头授权 (Permission Denied): ${detail}`);
          setMpStatus('error');
          setUseSimulation(true);
        });

      } catch (err: any) {
        console.error("MediaPipe initialization error:", err);
        const detail = err && (err.message || String(err));
        setErrorMsg(`初始化组件受阻: ${detail}`);
        setMpStatus('error');
        setUseSimulation(true);
      }
    };

    const loadMediaPipe = async () => {
      try {
        setMpStatus('loading_libs');
        
        const cameraUtilsCandidates = [
          "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
          "https://unpkg.com/@mediapipe/camera_utils/camera_utils.js",
          "https://cdnjs.cloudflare.com/ajax/libs/mediapipe-camera_utils/0.4.1646424915/camera_utils.js",
          "https://cdn.bootcdn.net/ajax/libs/mediapipe-camera_utils/0.4.1646424915/camera_utils.js"
        ];

        const handsCandidates = [
          "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js",
          "https://unpkg.com/@mediapipe/hands/hands.js",
          "https://cdnjs.cloudflare.com/ajax/libs/mediapipe-hands/0.4.1646424915/hands.js",
          "https://cdn.bootcdn.net/ajax/libs/mediapipe-hands/0.4.1646424915/hands.js"
        ];

        // 1. Load camera_utils
        await loadScriptList(cameraUtilsCandidates, () => !!(window as any).Camera);
        
        // 2. Load hands and extract actual working CDN base path
        const loadedUrl = await loadScriptList(handsCandidates, () => !!(window as any).Hands);
        const baseFolder = loadedUrl.substring(0, loadedUrl.lastIndexOf('/') + 1);
        
        if (active) {
          setupMediaPipe(baseFolder);
        }
      } catch (e) {
        console.error("Dynamic script loading failed:", e);
        if (active) {
          setErrorMsg("加载 MediaPipe 核心组件失败。系统已为您自动转换为『虚拟仿真盘』模式配合键盘/鼠标/触控交互！");
          setMpStatus('error');
          setUseSimulation(true);
          setIsCameraActive(false);
        }
      }
    };

    loadMediaPipe();

    return () => {
      active = false;
      clearTimeout(loadTimeout);
      if (cameraInstance) {
        try { cameraInstance.stop(); } catch (e) {}
      }
      if (handsInstance) {
        try { handsInstance.close(); } catch (e) {}
      }
    };
  }, [isCameraActive, useSimulation, retryCounter]);

  // Feed simulated hand changes straight to Three.js and draw real-time wireframes
  useEffect(() => {
    if (useSimulation) {
      const simulatedHand = createSimulatedHand(simulatedPos.x, simulatedPos.y, simulatedGesture);
      onGestureDetectedRef.current(simulatedGesture, simulatedHand);
      drawSimulatedSkeleton();
    }
  }, [simulatedPos, simulatedGesture, useSimulation]);

  // Natural idle wandering motion when simulation is active and mouse/touch is not hovering
  useEffect(() => {
    if (!useSimulation || isHoveringTrackpad) return;

    let animId: number;
    let startTime = Date.now();

    const tick = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      // Organic drifting trajectory across the trackpad center portion (coordinates centered around 0.5)
      const driftX = 0.5 + Math.sin(elapsed * 0.9) * 0.16;
      const driftY = 0.5 + Math.cos(elapsed * 0.72) * 0.12;

      setSimulatedPos({ x: driftX, y: driftY });
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [useSimulation, isHoveringTrackpad]);

  const handleTrackpadMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!useSimulation) return;
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Smoothly calculate normalized relative coordinate positions in range [0.08, 0.92]
    const rawX = (e.clientX - rect.left) / rect.width;
    const rawY = (e.clientY - rect.top) / rect.height;
    
    // Clamp to make sure hand stays perfectly defined and beautiful
    const x = Math.max(0.08, Math.min(0.92, rawX));
    const y = Math.max(0.08, Math.min(0.90, rawY));

    setSimulatedPos({ x, y });
  };

  const handleTrackpadTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!useSimulation || e.touches.length === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    
    const rawX = (touch.clientX - rect.left) / rect.width;
    const rawY = (touch.clientY - rect.top) / rect.height;
    
    const x = Math.max(0.08, Math.min(0.92, rawX));
    const y = Math.max(0.08, Math.min(0.90, rawY));

    setSimulatedPos({ x, y });
  };

  // Switch simulation of gesture
  const triggerSimulatedGesture = (g: GestureType) => {
    setSimulatedGesture(g);
  };

  const getStatusBadge = () => {
    if (useSimulation) {
      return (
        <div className="flex items-center gap-1.5 text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full text-[10px] border border-violet-500/20 font-semibold font-mono">
          <span>🕹️ 虚拟仿真盘激活</span>
        </div>
      );
    }

    switch (mpStatus) {
      case 'loading_libs':
        return (
          <div className="flex items-center gap-1.5 text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded-full text-[10px] border border-yellow-500/20 font-mono">
            <RefreshCw className="w-3 h-3 animate-spin" />
            <span>加载模块...</span>
          </div>
        );
      case 'initializing':
        return (
          <div className="flex items-center gap-1.5 text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full text-[10px] border border-sky-500/20 font-mono">
            <RefreshCw className="w-3 h-3 animate-spin" />
            <span>正在连接设备...</span>
          </div>
        );
      case 'ready':
        return (
          <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full text-[10px] border border-emerald-500/20 font-mono">
            <Check className="w-3 h-3" />
            <span>手掌跟踪就绪</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center gap-1.5 text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full text-[10px] border border-rose-500/20 font-mono">
            <AlertTriangle className="w-3 h-3" />
            <span>视频受阻</span>
          </div>
        );
    }
  };

  const getGestureIcon = (g: GestureType) => {
    switch (g) {
      case 'fist':
        return <span className="text-violet-400 font-sans">✊ 握拳 (Fist)</span>;
      case 'open':
        return <span className="text-violet-400 font-sans">🖐 张开 (Open)</span>;
      case 'ok':
        return <span className="text-violet-400 font-sans">👌 OK捏捏 (OK Pinch)</span>;
       case 'one':
        return <span className="text-cyan-400 font-sans font-semibold">☝️ 圣诞树 (Holiday Tree)</span>;
      case 'two':
        return <span className="text-cyan-400 font-sans font-semibold">✌️ 甜梦小猪 (Piggy Dream)</span>;
      default:
        return <span className="text-slate-400 font-sans">无手势 (Idle)</span>;
    }
  };

  return (
    <div className="flex flex-col gap-3 w-72 md:w-80">
      
      {/* Pills switcher for Camera Vs Simulation input control */}
      <div className="grid grid-cols-2 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-900">
        <button
          onClick={() => {
            setUseSimulation(false);
            setIsCameraActive(true);
          }}
          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 text-[11px] rounded-lg cursor-pointer transition-all ${!useSimulation ? 'bg-indigo-600 font-semibold text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          <Camera className="w-3.5 h-3.5" />
          物理相机
        </button>
        <button
          onClick={() => {
            setUseSimulation(true);
            setIsCameraActive(false);
          }}
          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 text-[11px] rounded-lg cursor-pointer transition-all ${useSimulation ? 'bg-violet-600 font-semibold text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          <MousePointer className="w-3.5 h-3.5" />
          全息仿真盘
        </button>
      </div>

      {/* Interactive Main Area */}
      <div 
        className="relative w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-900 shadow-2xl group transition-all"
        onMouseMove={handleTrackpadMove}
        onTouchMove={handleTrackpadTouch}
        onMouseEnter={() => setIsHoveringTrackpad(true)}
        onMouseLeave={() => setIsHoveringTrackpad(false)}
      >
        {!useSimulation ? (
          // --- CAMERA STREAM WORKFLOW ---
          <>
            {!isCameraActive ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 gap-2 font-sans bg-[#0c081d]/90">
                <VideoOff className="w-8 h-8 opacity-75 text-indigo-400" />
                <p className="text-[11px] text-slate-300">摄像头数据流已暂停</p>
              </div>
            ) : (
              <>
                {/* Real-time WebCam Stream and Skeleton Track overlay canvas */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
                  autoPlay
                  playsInline
                  muted
                />
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
                />

                {/* Cyber Sci-fi HUD overlay panel info */}
                <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between pointer-events-none bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/20 text-left">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-cyan-200 tracking-wider">实感手势传感器 (Live Sensor)</h4>
                      <p className="text-[8px] text-slate-400 font-mono">
                        {mpStatus === 'ready' ? "● ACTIVE | DRAWING SKELETON" : "● INITIALIZING ENGINE..."}
                      </p>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono text-cyan-400/80 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    SENSING FEED
                  </span>
                </div>
              </>
            )}
 
            {/* Connecting/Loading Cover overlay */}
            {isCameraActive && mpStatus !== 'ready' && mpStatus !== 'error' && (
              <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center gap-3 backdrop-blur-md px-4 text-center z-20">
                <RefreshCw className="w-7 h-7 text-cyan-400 animate-spin mb-1" />
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-cyan-200">
                    {mpStatus === 'loading_libs' ? "⏳ 正在寻找多组 CDN 备选节点..." : "🚀 核心脚本已下载，正在拉取神经网络模型..."}
                  </p>
                  <p className="text-[10px] text-slate-400 leading-relaxed max-w-[240px] font-sans">
                    {mpStatus === 'loading_libs' ? (
                      "系统正在自动切换并挑选速度最快的国内/海外 CDN 镜像！首次开启请保持网络畅通。"
                    ) : (
                      "正在加载 MediaPipe 深度学习模型和 WebAssembly 加速器。首次加载约需 10~30 秒，热启动后即可流畅运行！"
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* Error and suggestion overlay (Iframe permissions fallback info!) */}
            {mpStatus === 'error' && (
              <div className="absolute inset-0 bg-slate-950/98 flex flex-col items-center justify-center p-2 text-center gap-1.5">
                <div className="flex items-center gap-1.5 text-rose-500">
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                  <h4 className="text-xs font-bold text-rose-400">摄像头开启受阻</h4>
                </div>
                
                {errorMsg && (
                  <div className="px-2 py-1 bg-rose-950/30 border border-rose-900/40 rounded text-[9px] font-mono text-rose-300 max-w-[250px] break-all">
                    {errorMsg}
                  </div>
                )}
                
                <p className="text-[9px] text-slate-400 leading-relaxed max-w-[260px]">
                  📌 <strong className="text-slate-300">如何解决：</strong><br />
                  1. 点击浏览器地址栏左侧的 <strong className="text-indigo-400">“锁头 🔒”</strong> 按钮，将 <strong className="text-indigo-400">相机权限</strong> 改为 “允许”。<br />
                  2. 若已被 iframe 沙盒安全限制拦截，请点击右上角 <strong className="text-amber-400 font-bold">【在新标签页打开】</strong>，在独立安全域中畅玩物理实感！
                </p>
                
                <div className="flex gap-2 mt-1">
                  <button 
                    onClick={() => {
                      setMpStatus('loading_libs');
                      setUseSimulation(false);
                      setRetryCounter(prev => prev + 1);
                    }}
                    className="px-2.5 py-1.5 bg-emerald-700 hover:bg-emerald-600 rounded-lg text-[9px] font-bold text-white shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    🔄 重新连接相机
                  </button>
                  <button 
                    onClick={() => setUseSimulation(true)}
                    className="px-2.5 py-1.5 bg-violet-600 hover:bg-violet-500 rounded-lg text-[9px] font-bold text-white shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    🕹️ 激活手势仿真盘
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          // --- FULL GRAPHICAL SIMULATION TRACKPAD WORKFLOW ---
          <>
            <canvas
              ref={canvasRef}
              width={320}
              height={180}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none bg-slate-950"
            />
            
            {/* Grid coordinate helper HUD overlay */}
            <div className="absolute inset-x-2 top-2 flex justify-between pointer-events-none">
              <span className="text-[8px] font-mono text-violet-400/70 bg-violet-950/30 px-1 rounded border border-violet-900/40">
                X: {(1 - simulatedPos.x).toFixed(2)}
              </span>
              <span className="text-[8px] font-mono text-violet-400/70 bg-violet-950/30 px-1 rounded border border-violet-900/40">
                Y: {simulatedPos.y.toFixed(2)}
              </span>
            </div>

            {/* Floating trackpad instruction helper text */}
            {!isHoveringTrackpad && (
              <div className="absolute inset-0 bg-slate-950/45 pointer-events-none flex flex-col items-center justify-center text-center p-4">
                <div className="p-1.5 bg-violet-500/10 rounded-full border border-violet-500/20 mb-2">
                  <MousePointer className="w-4 h-4 text-violet-400 animate-bounce" />
                </div>
                <p className="text-[10px] font-semibold text-slate-200">
                  物理相机不可用？在此滑动鼠标 / 触摸以控制手掌
                </p>
                <p className="text-[8px] text-slate-500 mt-1">
                  (Swipe cursor to drive glowing hand skeleton)
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Simulated Gesture Active Buttons segmented controls (ONLY shown during simulation mode to allow easy toggles) */}
      {useSimulation && (
        <div className="flex flex-col gap-1.5 bg-slate-900/50 p-2 rounded-xl border border-slate-800/60">
          <span className="text-[9px] font-extrabold uppercase text-violet-400/80 tracking-widest block mb-1">
            双指模拟器手势状态 (Select Simulated Gesture)
          </span>
          <div className="grid grid-cols-4 gap-1">
            <button
              onClick={() => triggerSimulatedGesture('none')}
              className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${simulatedGesture === 'none' ? 'bg-violet-600/35 text-violet-100 border-violet-500/60 shadow-lg' : 'bg-slate-950/40 text-slate-400 border-transparent hover:text-slate-200'}`}
              title="Idle - No active gesture"
            >
              ⏳ 正常
            </button>
            <button
              onClick={() => triggerSimulatedGesture('fist')}
              className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${simulatedGesture === 'fist' ? 'bg-violet-600/35 text-violet-100 border-violet-500/60 shadow-lg animate-pulse' : 'bg-slate-950/40 text-slate-400 border-transparent hover:text-slate-200'}`}
              title="Fist - Cleaving particles to construct cake"
            >
              ✊ 握拳
            </button>
            <button
              onClick={() => triggerSimulatedGesture('open')}
              className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${simulatedGesture === 'open' ? 'bg-violet-600/35 text-violet-100 border-violet-500/60 shadow-lg' : 'bg-slate-950/40 text-slate-400 border-transparent hover:text-slate-200'}`}
              title="Open Hand - Spark radial explosion dynamics"
            >
              🖐 张掌
            </button>
            <button
              onClick={() => triggerSimulatedGesture('ok')}
              className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${simulatedGesture === 'ok' ? 'bg-violet-600/35 text-violet-100 border-violet-500/60 shadow-lg' : 'bg-slate-950/40 text-slate-400 border-transparent hover:text-slate-200'}`}
              title="OK Pinch - Create accessory decoration sticker"
            >
              👌 OK捏
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 mt-1.5 border-t border-slate-800/40 pt-1.5">
            <button
              onClick={() => triggerSimulatedGesture('one')}
              className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${simulatedGesture === 'one' ? 'bg-cyan-600/45 text-cyan-100 border-cyan-500/60 shadow-lg shadow-cyan-500/15' : 'bg-slate-950/40 text-slate-400 border-transparent hover:text-slate-200'}`}
              title="比 1 手势 -> 汇聚圣诞树"
            >
              🎄 圣诞树
            </button>
            <button
              onClick={() => triggerSimulatedGesture('two')}
              className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${simulatedGesture === 'two' ? 'bg-cyan-600/45 text-cyan-100 border-cyan-500/60 shadow-lg shadow-cyan-500/15' : 'bg-slate-950/40 text-slate-400 border-transparent hover:text-slate-200'}`}
              title="比 2 手势 -> 汇聚甜梦小猪"
            >
              🐷 甜梦小猪
            </button>
          </div>
        </div>
      )}

      {/* Real-time Telemetry, status log panel */}
      <div className="flex flex-col gap-2 bg-slate-900/40 p-3 rounded-2xl border border-slate-900/60 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-sans">当前连接通道</span>
          {getStatusBadge()}
        </div>
        
        <div className="h-[1px] bg-slate-800/40 my-1" />
        
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-sans">手势输出状态</span>
          <div className="font-mono text-xs font-semibold flex items-center gap-1">
            {getGestureIcon(useSimulation ? simulatedGesture : currentGesture)}
          </div>
        </div>
      </div>
    </div>
  );
};
