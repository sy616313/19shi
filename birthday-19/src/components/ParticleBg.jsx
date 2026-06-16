import { useEffect, useRef, useCallback } from "react";

/*
 * Photorealistic black & white starfield.
 * Visual parameters from qwen-vision analysis:
 *   - Pure B&W, extreme contrast, exponential glow falloff
 *   - Circular light points, slight cross diffraction on bright stars
 *   - Size grades: tiny at top 鈫?larger at bottom (perspective depth)
 *   - Dense horizontal band at lower 1/3 (star cluster / Milky Way core)
 *   - Nebula cloud textures in mid-lower area
 *   - Slight vignette (10-15% corner darkening)
 *   - Clean, no film grain
 */

const BRIGHT_STAR_THRESHOLD = 0.7;
const NEBULA_BLOBS = 7;
const ATMOSPHERE_LAYERS = 3;

function gaussRandom(mean = 0, stdev = 1) {
  let u = 1 - Math.random();
  let v = Math.random();
  return mean + stdev * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

export default function ParticleBg({ active = true }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const starsRef = useRef([]);
  const nebulaeRef = useRef([]);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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
      const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 600 ? 1.5 : 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initAll();
    };

    const initAll = () => {
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      const count = prefersReduced.current ? 120 : 300;

      // --- stars ---
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push(createStar(w, h));
      }
      // Sort back-to-front for painter's algorithm (not strictly needed but clean)
      stars.sort((a, b) => a.magnitude - b.magnitude);
      starsRef.current = stars;

      // --- nebula blobs ---
      const nebulae = [];
      // Dense core band at lower 1/3
      for (let i = 0; i < NEBULA_BLOBS; i++) {
        const t = i / (NEBULA_BLOBS - 1);
        // Horizontal band centered around 70-85% height
        const cy = h * (0.65 + t * 0.25);
        const cx = w * (0.2 + Math.random() * 0.6);
        const scale = 1 - Math.abs(t - 0.5) * 1.0;
        nebulae.push({
          x: cx,
          y: cy,
          rx: w * (0.28 + Math.random() * 0.35) * scale,
          ry: h * (0.06 + Math.random() * 0.10) * scale,
          baseAlpha: 0.015 + Math.random() * 0.04 * scale,
          phase: Math.random() * Math.PI * 2,
        });
      }
      nebulaeRef.current = nebulae;
    };

    const createStar = (w, h) => {
      // Luminosity function: many dim, few bright (power-law)
      // Use inverse transform: magnitude ~1 means bright, ~0 means dim
      const rawMag = Math.pow(Math.random(), 2.5);
      // Map to visual magnitude scale
      const magnitude = rawMag;

      // Position: concentration increases toward bottom
      // y-bias: stars cluster more densely in lower portion
      const yBias = 0.5; // 0=uniform, 1=all at bottom
      const y = h * Math.pow(Math.random(), 1 / (1 + yBias * 2));

      const x = Math.random() * w;

      // Radius: larger stars at bottom (perspective), also brighter stars are larger
      const depthFactor = 0.3 + 0.7 * (y / h);
      const baseRadius = 0.2 + magnitude * 2.8 * depthFactor;
      const radius = clamp(baseRadius, 0.15, 3.5);

      // Brightness: brighter at bottom (cluster density)
      const baseAlpha = 0.08 + magnitude * 0.85 * depthFactor;

      // Subtle vertical elongation for brightest stars (atmospheric refraction)
      const elongation = magnitude > BRIGHT_STAR_THRESHOLD
        ? 1 + (magnitude - BRIGHT_STAR_THRESHOLD) * 3.5
        : 1;

      // Diffraction spikes for bright stars
      const hasSpikes = magnitude > BRIGHT_STAR_THRESHOLD * 1.1;
      const spikeIntensity = hasSpikes
        ? (magnitude - BRIGHT_STAR_THRESHOLD * 1.1) / (1 - BRIGHT_STAR_THRESHOLD * 1.1)
        : 0;
      const spikeAngle = Math.random() * Math.PI;

      return {
        x,
        y,
        radius,
        baseAlpha,
        alpha: baseAlpha,
        magnitude,
        elongation,
        hasSpikes,
        spikeIntensity,
        spikeAngle,
        twinkleSpeed: 0.003 + Math.random() * 0.012 * (1 - magnitude * 0.5),
        twinkleOffset: Math.random() * Math.PI * 2,
        driftX: prefersReduced.current ? 0 : (Math.random() - 0.5) * 0.06,
        driftY: prefersReduced.current ? 0 : Math.random() * 0.04 + 0.01,
      };
    };

    // --- drawing helpers ---

    const drawNebula = (n, timestamp) => {
      ctx.save();
      const pulse = Math.sin(timestamp * 0.0003 + n.phase) * 0.3 + 0.7;
      const alpha = n.baseAlpha * pulse;
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, Math.max(n.rx, n.ry));
      grad.addColorStop(0, `rgba(180,180,185,${alpha * 1.4})`);
      grad.addColorStop(0.35, `rgba(140,140,145,${alpha})`);
      grad.addColorStop(0.65, `rgba(90,90,95,${alpha * 0.5})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(n.x, n.y, n.rx, n.ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawStar = (s) => {
      const alpha = s.alpha;
      if (alpha < 0.015) return;
      ctx.save();

      // Glow disc - exponential falloff
      const glowRadius = s.radius * (3 + s.magnitude * 6);
      const glow = ctx.createRadialGradient(
        s.x, s.y, s.radius * 0.5,
        s.x, s.y, glowRadius
      );
      const peakAlpha = Math.min(1, alpha);
      glow.addColorStop(0, `rgba(255,255,255,${peakAlpha})`);
      glow.addColorStop(0.08, `rgba(255,255,255,${peakAlpha * 0.75})`);
      glow.addColorStop(0.25, `rgba(240,240,245,${peakAlpha * 0.3})`);
      glow.addColorStop(0.55, `rgba(180,180,190,${peakAlpha * 0.06})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;

      if (s.elongation > 1.05) {
        // Elongated glow (vertical)
        ctx.beginPath();
        ctx.ellipse(
          s.x, s.y,
          glowRadius, glowRadius * s.elongation,
          0, 0, Math.PI * 2
        );
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(s.x, s.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Core point
      const coreAlpha = Math.min(1, alpha * 1.2);
      ctx.fillStyle = `rgba(255,255,255,${coreAlpha})`;
      ctx.beginPath();
      if (s.elongation > 1.05) {
        ctx.ellipse(
          s.x, s.y,
          s.radius, s.radius * s.elongation * 0.7,
          0, 0, Math.PI * 2
        );
      } else {
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      }
      ctx.fill();

      // Diffraction spikes
      if (s.hasSpikes && s.alpha > 0.35) {
        drawSpikes(s);
      }

      ctx.restore();
    };

    const drawSpikes = (s) => {
      const intensity = s.spikeIntensity * Math.min(1, s.alpha);
      if (intensity < 0.05) return;

      ctx.save();
      const spikeLen = s.radius * (6 + s.magnitude * 10);
      const baseAngle = s.spikeAngle;

      for (let arm = 0; arm < 4; arm++) {
        const angle = baseAngle + (arm * Math.PI) / 2;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);

        // Each spike: bright core, fading wings
        const grad = ctx.createLinearGradient(
          s.x - cosA * spikeLen * 0.2,
          s.y - sinA * spikeLen * 0.2,
          s.x + cosA * spikeLen,
          s.y + sinA * spikeLen
        );
        grad.addColorStop(0, `rgba(255,255,255,${intensity * 0.7})`);
        grad.addColorStop(0.06, `rgba(255,255,255,${intensity * 1.0})`);
        grad.addColorStop(0.15, `rgba(255,255,255,${intensity * 0.5})`);
        grad.addColorStop(0.4, `rgba(200,200,210,${intensity * 0.12})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.radius * (0.3 + intensity * 0.7);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + cosA * spikeLen, s.y + sinA * spikeLen);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawVignette = (w, h) => {
      ctx.save();
      const grad = ctx.createRadialGradient(
        w / 2, h * 0.45, Math.min(w, h) * 0.55,
        w / 2, h * 0.45, Math.max(w, h) * 0.75
      );
      grad.addColorStop(0, "rgba(0,0,0,0)");
      grad.addColorStop(0.7, "rgba(0,0,0,0.04)");
      grad.addColorStop(1, "rgba(0,0,0,0.13)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    };

    const drawAtmosphere = (w, h, timestamp) => {
      ctx.save();
      // Subtle atmospheric gradient: slightly lighter near horizon
      const atmGrad = ctx.createLinearGradient(0, h * 0.5, 0, h);
      atmGrad.addColorStop(0, "rgba(0,0,0,0)");
      atmGrad.addColorStop(0.5, "rgba(20,20,22,0.06)");
      atmGrad.addColorStop(0.85, "rgba(30,30,33,0.10)");
      atmGrad.addColorStop(1, "rgba(25,25,28,0.07)");
      ctx.fillStyle = atmGrad;
      ctx.fillRect(0, h * 0.5, w, h * 0.5);
      ctx.restore();
    };

    const animate = (timestamp) => {
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Pure black canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // Nebula clouds (behind stars)
      nebulaeRef.current.forEach((n) => drawNebula(n, timestamp));

      // Atmosphere layer
      drawAtmosphere(w, h, timestamp);

      // Stars
      starsRef.current.forEach((s) => {
        // Twinkle
        s.alpha =
          s.baseAlpha +
          Math.sin(timestamp * s.twinkleSpeed + s.twinkleOffset) *
            0.12 *
            (1 - s.magnitude * 0.4);
        s.alpha = clamp(s.alpha, 0.01, 1);

        // Mouse proximity brightening
        if (mx > 0) {
          const dx = s.x - mx;
          const dy = s.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            s.alpha = Math.min(1, s.alpha + (1 - dist / 160) * 0.35);
          }
        }

        // Slow drift
        s.x += s.driftX;
        s.y += s.driftY;
        if (s.y > h + 10) {
          Object.assign(s, createStar(w, h));
          s.y = -10;
          s.x = Math.random() * w;
        }
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;

        drawStar(s);
      });

      // Vignette overlay (topmost)
      drawVignette(w, h);

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
      }}
    />
  );
}

