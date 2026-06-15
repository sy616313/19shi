import { useState, useEffect, useRef } from "react";
import "./Cake.css";

function CandleFlame({ blown }) {
  if (blown) return null;
  return (
    <div className="candle-flame" aria-hidden="true">
      <svg width="20" height="28" viewBox="0 0 24 34">
        <defs>
          <filter id="cakeFlameGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="cakeFlameGrad" cx="50%" cy="65%">
            <stop offset="0%" stopColor="#FFFEF5" />
            <stop offset="22%" stopColor="#FFE9A0" />
            <stop offset="55%" stopColor="#F4A261" />
            <stop offset="100%" stopColor="#E76F51" />
          </radialGradient>
        </defs>
        <ellipse cx="12" cy="19" rx="9" ry="14" fill="url(#cakeFlameGrad)" filter="url(#cakeFlameGlow)" />
        <ellipse cx="11" cy="15" rx="4.5" ry="6.5" fill="#FFD88A" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function Cake({ onBlow, mouseGlow = { x: 0.5, y: 0.5 } }) {
  const [blown, setBlown] = useState(false);
  const cakeRef = useRef(null);

  const handleBlow = () => {
    if (blown) return;
    setBlown(true);
    setTimeout(() => onBlow?.(), 500);
  };

  return (
    <div className="cake-scene" ref={cakeRef}>
      {/* Ambient candle glow behind cake */}
      {!blown && (
        <div
          className="candle-ambient-glow"
          style={{
            "--mx": mouseGlow.x,
            "--my": mouseGlow.y,
          }}
        />
      )}

      {/* Cake on plate */}
      <div className="cake-stand" />

      {/* Cake body - pink frosting */}
      <div className="cake-body">
        {/* Bottom frosting wave */}
        <div className="cake-frosting-bottom" />

        {/* Main cake layer */}
        <div className="cake-layer" />

        {/* Pink cream top swirls */}
        <div className="cake-cream-top">
          <div className="cream-swirl cream-swirl-1" />
          <div className="cream-swirl cream-swirl-2" />
          <div className="cream-swirl cream-swirl-3" />
          <div className="cream-swirl cream-swirl-4" />
          <div className="cream-swirl cream-swirl-5" />
        </div>

        {/* Strawberry slices */}
        <div className="strawberry-slice strawberry-s1" />
        <div className="strawberry-slice strawberry-s2" />
        <div className="strawberry-slice strawberry-s3" />

        {/* Colorful sprinkles */}
        <div className="sprinkle sprinkle-1" />
        <div className="sprinkle sprinkle-2" />
        <div className="sprinkle sprinkle-3" />
        <div className="sprinkle sprinkle-4" />
        <div className="sprinkle sprinkle-5" />
        <div className="sprinkle sprinkle-6" />

        {/* Candle */}
        <div
          className={`candle-container${blown ? " blown" : ""}`}
          onClick={handleBlow}
          role="button"
          tabIndex={0}
          aria-label="点击吹灭蜡烛"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleBlow();
          }}
        >
          {blown && <div className="smoke-wisp" />}
          <CandleFlame blown={blown} />
          <div className="candle-stick" />
          <div className="candle-wax-drip" />
        </div>
      </div>
    </div>
  );
}
