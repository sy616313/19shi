import { useState, useRef, useCallback, useEffect } from "react";
import "./MagicalLighter.css";

const SMOKE_PARTICLES = 10;
const SPARKLE_COUNT = 18;
const SNAP_DISTANCE = 90;

export default function MagicalLighter({ visible, candleRef, onSnapToCandle }) {
  const [appeared, setAppeared] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [sparkles] = useState(() =>
    Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
      id: i,
      angle: (360 / SPARKLE_COUNT) * i + Math.random() * 20,
      distance: 40 + Math.random() * 50,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 1.5,
      duration: 1.2 + Math.random() * 1.8,
    }))
  );
  const [smokeParticles] = useState(() =>
    Array.from({ length: SMOKE_PARTICLES }, (_, i) => ({
      id: i,
      dx: (Math.random() - 0.5) * 140,
      dy: -(Math.random() * 90 + 30),
      delay: Math.random() * 0.35,
      size: 18 + Math.random() * 40,
      duration: 1.4 + Math.random() * 1.6,
    }))
  );

  const lighterRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const originRef = useRef({ x: 0, y: 0 });
  const didSnap = useRef(false);

  useEffect(() => {
    if (!visible) {
      setAppeared(false);
      didSnap.current = false;
      setPos({ x: 0, y: 0 });
      return;
    }
    const t = setTimeout(() => setAppeared(true), 400);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (appeared && lighterRef.current) {
      const r = lighterRef.current.getBoundingClientRect();
      originRef.current = { x: r.left, y: r.top };
    }
  }, [appeared]);

  const checkSnap = useCallback(
    (clientX, clientY) => {
      if (!candleRef?.current || didSnap.current) return false;
      const candleRect = candleRef.current.getBoundingClientRect();
      const cx = candleRect.left + candleRect.width / 2;
      const cy = candleRect.top + candleRect.height / 2;
      const dist = Math.sqrt((clientX - cx) ** 2 + (clientY - cy) ** 2);
      if (dist < SNAP_DISTANCE) {
        didSnap.current = true;
        setDragging(false);
        onSnapToCandle?.();
        return true;
      }
      return false;
    },
    [candleRef, onSnapToCandle]
  );

  const handlePointerDown = useCallback(
    (e) => {
      if (didSnap.current) return;
      e.preventDefault();
      e.stopPropagation();
      const rect = lighterRef.current.getBoundingClientRect();
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setDragging(true);
    },
    []
  );

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e) => {
      setPos({
        x: e.clientX - dragOffset.current.x - (originRef.current.x || 0),
        y: e.clientY - dragOffset.current.y - (originRef.current.y || 0),
      });
    };

    const handleUp = (e) => {
      setDragging(false);
      if (!checkSnap(e.clientX, e.clientY)) {
        setPos({ x: 0, y: 0 });
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging, checkSnap]);

  if (!visible) return null;

  return (
    <div
      className={`magical-lighter-wrapper${appeared ? " appeared" : ""}${dragging ? " dragging" : ""}${didSnap.current ? " snapped" : ""}`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: dragging
          ? "none"
          : "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {appeared && !didSnap.current && (
        <div className="magic-smoke-container" aria-hidden="true">
          {smokeParticles.map((p) => (
            <div
              key={p.id}
              className="magic-smoke-particle"
              style={{
                "--dx": `${p.dx}px`,
                "--dy": `${p.dy}px`,
                "--delay": `${p.delay}s`,
                "--size": `${p.size}px`,
                "--dur": `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {appeared && !didSnap.current &&
        sparkles.map((s) => (
          <div
            key={s.id}
            className="magic-sparkle"
            style={{
              "--angle": `${s.angle}deg`,
              "--dist": `${s.distance}px`,
              "--size": `${s.size}px`,
              "--delay": `${s.delay}s`,
              "--dur": `${s.duration}s`,
            }}
          />
        ))}

      {appeared && !dragging && !didSnap.current && (
        <div className="lighter-hint-ring" aria-hidden="true" />
      )}

      <div
        ref={lighterRef}
        className="magical-lighter"
        onPointerDown={handlePointerDown}
        role="button"
        tabIndex={0}
        aria-label="打火机 - 拖到蜡烛上点燃"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSnapToCandle?.();
            didSnap.current = true;
          }
        }}
      >
        <div className="lighter-flame" aria-hidden="true">
          <svg width="18" height="26" viewBox="0 0 20 30">
            <defs>
              <filter id="lighterFlameGlow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="lighterFlameGrad" cx="50%" cy="70%">
                <stop offset="0%" stopColor="#FFFEF5" />
                <stop offset="30%" stopColor="#FFE9A0" />
                <stop offset="65%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EA580C" />
              </radialGradient>
            </defs>
            <ellipse
              cx="10" cy="17" rx="7" ry="12"
              fill="url(#lighterFlameGrad)"
              filter="url(#lighterFlameGlow)"
            />
            <ellipse cx="9" cy="13" rx="3.5" ry="5.5" fill="#FFD88A" opacity="0.45" />
          </svg>
        </div>

        <div className="lighter-cap">
          <div className="lighter-nozzle" />
          <div className="lighter-wheel" />
        </div>

        <div className="lighter-body">
          <div className="lighter-body-shine" />
        </div>
      </div>
    </div>
  );
}
