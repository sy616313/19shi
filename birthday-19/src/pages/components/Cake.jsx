import { useRef, forwardRef } from "react";
import "./Cake.css";

function CandleFlame({ state }) {
  if (state === "unlit") return null;
  return (
    <div
      className={`candle-flame${state === "igniting" ? " igniting" : ""}${state === "blown" ? " blowing-out" : ""}`}
      aria-hidden="true"
    >
      <svg width="24" height="34" viewBox="0 0 28 40">
        <defs>
          <filter id="cakeFlameGlow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="cakeFlameGrad" cx="50%" cy="62%">
            <stop offset="0%" stopColor="#FFFEF5" />
            <stop offset="18%" stopColor="#FFE9A0" />
            <stop offset="48%" stopColor="#F4A261" />
            <stop offset="82%" stopColor="#E76F51" />
            <stop offset="100%" stopColor="#D03801" />
          </radialGradient>
          <radialGradient id="cakeFlameInner" cx="45%" cy="55%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFD88A" />
          </radialGradient>
        </defs>
        {/* Outer flame */}
        <ellipse cx="14" cy="22" rx="11" ry="17" fill="url(#cakeFlameGrad)" filter="url(#cakeFlameGlow)" />
        {/* Inner bright core */}
        <ellipse cx="13" cy="18" rx="5" ry="8" fill="url(#cakeFlameInner)" opacity="0.6" />
      </svg>
    </div>
  );
}

const Cake = forwardRef(function Cake(
  { ignited = false, igniting = false, blown = false, onBlow, mouseGlow = { x: 0.5, y: 0.5 } },
  ref
) {
  const flameState = blown ? "blown" : igniting ? "igniting" : ignited ? "lit" : "unlit";

  return (
    <div className="cake-scene" ref={ref}>
      {/* Ambient candle glow */}
      {ignited && !blown && (
        <div
          className="candle-ambient-glow"
          style={{ "--mx": mouseGlow.x, "--my": mouseGlow.y }}
        />
      )}

      {/* Ignition flash */}
      {igniting && <div className="ignition-flash" aria-hidden="true" />}

      {/* Cake on plate */}
      <div className="cake-stand" />

      {/* Cake body */}
      <div className="cake-body">
        <div className="cake-frosting-bottom" />
        <div className="cake-layer" />

        <div className="cake-cream-top">
          <div className="cream-swirl cream-swirl-1" />
          <div className="cream-swirl cream-swirl-2" />
          <div className="cream-swirl cream-swirl-3" />
          <div className="cream-swirl cream-swirl-4" />
          <div className="cream-swirl cream-swirl-5" />
        </div>

        <div className="strawberry-slice strawberry-s1" />
        <div className="strawberry-slice strawberry-s2" />
        <div className="strawberry-slice strawberry-s3" />

        <div className="sprinkle sprinkle-1" />
        <div className="sprinkle sprinkle-2" />
        <div className="sprinkle sprinkle-3" />
        <div className="sprinkle sprinkle-4" />
        <div className="sprinkle sprinkle-5" />
        <div className="sprinkle sprinkle-6" />

        {/* Candle */}
        <div
          className={`candle-container${ignited ? " lit" : ""}${igniting ? " igniting" : ""}${blown ? " blown" : ""}`}
          onClick={() => ignited && !blown && onBlow?.()}
          role="button"
          tabIndex={ignited && !blown ? 0 : -1}
          aria-label={ignited && !blown ? "点击吹灭蜡烛" : undefined}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && ignited && !blown) onBlow?.();
          }}
        >
          {blown && <div className="smoke-wisp" />}
          <CandleFlame state={flameState} />
          <div className="candle-stick" />
          <div className="candle-wax-drip" />
        </div>
      </div>
    </div>
  );
});

export default Cake;
