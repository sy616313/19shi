import { useEffect, useRef, useCallback } from "react";

export default function ParticleBg({ active = true }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const starsRef = useRef([]);
  const animRef = useRef(null);

  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMouse = useCallback((e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = prefersReduced.current ? 60 : 150;
      const arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(createStar(true));
      }
      starsRef.current = arr;
    };

    const createStar = (initY = false) => {
      const w = canvas.width || window.innerWidth;
      const h = canvas.height || window.innerHeight;
      return {
        x: Math.random() * w,
        y: initY ? Math.random() * h : -10,
        r: Math.random() * 1.8 + 0.3,
        baseAlpha: Math.random() * 0.6 + 0.3,
        alpha: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        driftX: prefersReduced.current ? 0 : (Math.random() - 0.5) * 0.15,
        driftY: prefersReduced.current ? 0 : Math.random() * 0.1 + 0.03,
      };
    };

    const drawStarShape = (cx, cy, r, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      // Glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 4);
      glow.addColorStop(0, `rgba(255,255,255,${alpha})`);
      glow.addColorStop(0.3, `rgba(200,220,255,${alpha * 0.6})`);
      glow.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 4, 0, Math.PI * 2);
      ctx.fill();
      // Core
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawStarFlare = (cx, cy, r, alpha, angle) => {
      if (alpha < 0.5) return;
      ctx.save();
      ctx.globalAlpha = alpha * 0.3;
      ctx.strokeStyle = "rgba(200,220,255,0.5)";
      ctx.lineWidth = 0.5;
      const len = r * 8;
      ctx.beginPath();
      ctx.moveTo(cx - Math.cos(angle) * len * 0.3, cy - Math.sin(angle) * len * 0.3);
      ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
      ctx.stroke();
      // cross flare
      const a2 = angle + Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx - Math.cos(a2) * len * 0.4, cy - Math.sin(a2) * len * 0.4);
      ctx.lineTo(cx + Math.cos(a2) * len * 0.7, cy + Math.sin(a2) * len * 0.7);
      ctx.stroke();
      ctx.restore();
    };

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      starsRef.current.forEach((s) => {
        // Twinkle
        s.alpha = s.baseAlpha + Math.sin(timestamp * s.twinkleSpeed + s.twinkleOffset) * 0.2;
        s.alpha = Math.max(0.05, Math.min(1, s.alpha));

        // Mouse parallax - stars near cursor brighten
        if (mx > 0) {
          const dx = s.x - mx;
          const dy = s.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            s.alpha = Math.min(1, s.alpha + (1 - dist / 200) * 0.5);
          }
        }

        // Drift
        s.y += s.driftY;
        s.x += s.driftX;
        if (s.y > canvas.height + 10) {
          Object.assign(s, createStar());
          s.y = -10;
        }
        if (s.x < -10) s.x = canvas.width + 10;
        if (s.x > canvas.width + 10) s.x = -10;

        drawStarShape(s.x, s.y, s.r, s.alpha);
        if (s.r > 1.3) {
          drawStarFlare(s.x, s.y, s.r, s.alpha, timestamp * 0.0005 + s.twinkleOffset);
        }
      });

      animId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouse}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        background: "radial-gradient(ellipse at 50% 45%, #1A1030 0%, #0C0C1A 40%, #06060F 100%)",
      }}
    />
  );
}
