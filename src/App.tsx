import { useState, useEffect, useRef } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { WebcamPanel } from './components/WebcamPanel';
import { GestureType, Landmark, DebugSettings } from './types';
import { 
  Sparkles, 
  HelpCircle, 
  Eye, 
  Camera, 
  Heart,
  ChevronRight,
  Maximize2,
  Minimize2,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [currentGesture, setCurrentGesture] = useState<GestureType>('none');
  const [handLandmarks, setHandLandmarks] = useState<Landmark[] | null>(null);
  const [fps, setFps] = useState<number>(60);
  const fpsRef = useRef<number>(60);
  const handLandmarksRef = useRef<Landmark[] | null>(null);

  // Calibration debug settings
  const [debugSettings, setDebugSettings] = useState<DebugSettings>({
    debugMode: true,
    showSkeleton: true,
    manualProgress: false,
    progressValue: 0.0,
    particleCount: 2000,
    colorScheme: 'gourmet',
    explosionMode: 'radial',
    pinchScale: 1.0,
  });

  const [showInstructions, setShowInstructions] = useState(true);
  const [showDebugPanel, setShowDebugPanel] = useState(true);
  const [showTitlePanel, setShowTitlePanel] = useState(true);
  const [showWebcamPanel, setShowWebcamPanel] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Smoothly poll current FPS from the ThreeJS loop
  useEffect(() => {
    const interval = setInterval(() => {
      setFps(fpsRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSettingsChange = (update: Partial<DebugSettings>) => {
    setDebugSettings((prev) => ({ ...prev, ...update }));
  };

  const handleGestureDetected = (gesture: GestureType, landmarks: Landmark[] | null) => {
    handLandmarksRef.current = landmarks;
    setHandLandmarks(landmarks);
    if (gesture !== currentGesture) {
      setCurrentGesture(gesture);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error("Error entering fullscreen: ", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  useEffect(() => {
    const handleFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFSChange);
    return () => document.removeEventListener('fullscreenchange', handleFSChange);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#060212] text-slate-100 font-sans">
      
      {/* 1. Underlying Volumetric Three.js Canvas */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas
          gesture={currentGesture}
          handLandmarks={handLandmarks}
          handLandmarksRef={handLandmarksRef}
          debugSettings={debugSettings}
          fpsRef={fpsRef}
        />
      </div>

      {/* 2. Top-left: Main Title / Header HUD */}
      {showTitlePanel ? (
        <div className="absolute top-4 left-4 z-10 max-w-sm md:max-w-md bg-slate-950/65 backdrop-blur-xl border border-slate-900 rounded-3xl p-4 shadow-2xl transition-all duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-2xl shadow-lg ring-1 ring-violet-400/30 animate-pulse shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                  粒子手势交互蛋糕
                  <span className="text-[9px] bg-indigo-500/10 text-indigo-400 border border-indigo-550/20 px-1.5 py-0.5 rounded-full font-mono">r150 JSM</span>
                </h1>
                <p className="text-[10px] text-slate-400 mt-0.5 font-mono leading-normal">
                  ThreeJS + MediaPipe Hands Real-time Interactive System
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowTitlePanel(false)}
              className="text-[10px] text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 px-2 py-1 rounded-md transition-all font-mono ml-2 shrink-0 cursor-pointer"
              title="隐藏面板"
            >
              隐藏 (Hide)
            </button>
          </div>

          {/* Standalone New Tab URL Redirection for Sandbox Permission Bylaws */}
          <div className="mt-3">
            <a
              href={window.location.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-2xl bg-indigo-600/90 hover:bg-indigo-600 text-[11px] font-bold text-white shadow-xl shadow-indigo-600/10 active:scale-[0.98] transition-all ring-1 ring-indigo-550/25"
            >
              <ExternalLink className="w-3.5 h-3.5 font-bold" />
              🚀 在独立新网页中打开 (最推荐，解锁相机权限)
            </a>
          </div>

          {/* Short dynamic banner explaining the gesture response */}
          <div className="mt-4 p-2.5 bg-slate-900/50 rounded-2xl border border-slate-800/60">
            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">交互反馈</span>
            <p className="text-xs text-slate-200 font-sans leading-relaxed">
              {currentGesture === 'fist' && '✊ 检测到【握拳】状态：粒子平滑凝聚，重聚为唯美蛋糕模型。'}
              {currentGesture === 'open' && '🖐 检测到【张开手掌】状态：粒子全能震裂，模拟华丽爆破扩散！'}
              {currentGesture === 'ok' && '👌 检测到【OK捏捏】：已在极速捏抓位置完美召出插图饰品。'}
              {currentGesture === 'one' && '☝️ 检测到【比数字 1】：全息粒子流汇聚形成华丽 3D 圣诞树特效！'}
              {currentGesture === 'two' && '✌️ 检测到【比数字 2】：全息粒子流汇聚形成高精 3D 甜梦小猪女孩！'}
              {currentGesture === 'none' && '⏳ 保持手👋置于前：可比 1、2 或 捏合、张掌、握拳激活特效！'}
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowTitlePanel(true)}
          className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-slate-950/75 hover:bg-slate-900 border border-slate-800 text-xs px-3.5 py-2.5 rounded-full cursor-pointer transition-all duration-200"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" /> 显示标题面板
        </button>
      )}

      {/* 3. Bottom-left: High contrast Interactive Gestures Dashboard Guide */}
      {showInstructions && (
        <div className="absolute bottom-4 left-4 z-10 bg-slate-950/65 backdrop-blur-xl border border-slate-900 rounded-3xl p-4 max-w-xs md:max-w-sm shadow-2xl transition-all duration-300">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800/80 mb-3">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-400" /> 手势操作指南 (Gestures)
            </span>
            <button 
              onClick={() => setShowInstructions(false)}
              className="text-[10px] text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 px-2 py-0.5 rounded-md transition-all font-mono"
            >
              隐藏 (Hide)
            </button>
          </div>

          <div className="flex flex-col gap-2.5 max-h-[280px] overflow-y-auto pr-1">
            {/* Gesture 1: Fist */}
            <div className={`flex items-center gap-3 p-2 rounded-xl border transition-all ${currentGesture === 'fist' ? 'bg-indigo-500/10 border-indigo-400/40' : 'bg-slate-950/30 border-transparent'}`}>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-xl flex items-center justify-center shrink-0 border border-indigo-500/20">✊</div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-slate-200">握拳 (Fist)</h4>
                <p className="text-[10px] text-slate-400">粒子凝聚回初始蛋糕模型</p>
              </div>
              {currentGesture === 'fist' && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />}
            </div>

            {/* Gesture 2: Open Hand */}
            <div className={`flex items-center gap-3 p-2 rounded-xl border transition-all ${currentGesture === 'open' ? 'bg-indigo-500/10 border-indigo-400/40' : 'bg-slate-950/30 border-transparent'}`}>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-xl flex items-center justify-center shrink-0 border border-indigo-500/20">🖐</div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-slate-200">张开手掌 (Open)</h4>
                <p className="text-[10px] text-slate-400">粒子受力震裂，模拟华丽爆破</p>
              </div>
              {currentGesture === 'open' && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />}
            </div>

            {/* Gesture 3: One Finger */}
            <div className={`flex items-center gap-3 p-2 rounded-xl border transition-all ${currentGesture === 'one' ? 'bg-cyan-500/10 border-cyan-400/40' : 'bg-slate-950/30 border-transparent'}`}>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-xl flex items-center justify-center shrink-0 border border-cyan-500/20">☝️</div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-slate-200">比数字 1 (One)</h4>
                <p className="text-[10px] text-slate-400">粒子向核心汇聚形塑 3D 圣诞树</p>
              </div>
              {currentGesture === 'one' && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
            </div>

            {/* Gesture 4: Two Fingers */}
            <div className={`flex items-center gap-3 p-2 rounded-xl border transition-all ${currentGesture === 'two' ? 'bg-fuchsia-500/10 border-fuchsia-400/40' : 'bg-slate-950/30 border-transparent'}`}>
              <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 text-xl flex items-center justify-center shrink-0 border border-fuchsia-500/20">✌️</div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-slate-200">比数字 2 (Two)</h4>
                <p className="text-[10px] text-slate-400">粒子重叠形塑 3D 甜梦小猪女孩</p>
              </div>
              {currentGesture === 'two' && <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-ping" />}
            </div>
          </div>
        </div>
      )}

      {/* Button to show instructions back if hidden */}
      {!showInstructions && (
        <button
          onClick={() => setShowInstructions(true)}
          className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-slate-950/75 hover:bg-slate-900 border border-slate-800 text-xs px-3.5 py-2 rounded-full cursor-pointer transition-all duration-200"
        >
          <HelpCircle className="w-3.5 h-3.5 text-indigo-400" /> 显示手势指南
        </button>
      )}

      {/* 4. Top-right: Floating Webcam Tracking Stream */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-3">
        {showWebcamPanel ? (
          <div className="bg-slate-950/65 backdrop-blur-xl border border-slate-900 rounded-3xl p-3.5 shadow-2xl transition-all duration-300">
            <div className="flex gap-4 items-center pb-2 mb-3 border-b border-slate-800/80 justify-between">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-indigo-400" /> 手势摄像头接入 (Webcam)
              </span>
              <button 
                onClick={() => setShowWebcamPanel(false)}
                className="text-[10px] text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 px-2 py-0.5 rounded-md transition-all font-mono cursor-pointer"
                title="隐藏面板"
              >
                隐藏 (Hide)
              </button>
            </div>
            <WebcamPanel
              onGestureDetected={handleGestureDetected}
              debugSettings={debugSettings}
              currentGesture={currentGesture}
            />
          </div>
        ) : (
          <button
            onClick={() => setShowWebcamPanel(true)}
            className="flex items-center gap-1.5 bg-slate-950/75 hover:bg-slate-900 border border-slate-800 text-xs px-3.5 py-2.5 rounded-full cursor-pointer transition-all duration-200"
          >
            <Camera className="w-3.5 h-3.5 text-indigo-400" /> 显示摄像头面板
          </button>
        )}

        {/* Small quick utilities bar */}
        <div className="flex items-center gap-2 bg-slate-950/65 backdrop-blur-xl border border-slate-900 px-3.5 py-1.5 rounded-full shadow-lg">
          <button
            onClick={toggleFullscreen}
            className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer transition-all"
            title={isFullscreen ? "退出全屏" : "全屏体验"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 6. Page aesthetic watermark/credits */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-10 text-center select-none hidden md:block">
        <p className="text-[9px] text-slate-600 font-mono tracking-wider flex items-center gap-1 justify-center">
          MADE FOR IMMERSIVE GRAPHICS EXPERIENCE <Heart className="w-2.5 h-2.5 text-indigo-900/50" /> THREEJS WEBGL EMISSION
        </p>
      </div>

    </main>
  );
}

