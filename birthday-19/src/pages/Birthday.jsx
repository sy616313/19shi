import { useState, useCallback, useRef } from "react";
import Cake from "./components/Cake";
import Confetti from "./components/Confetti";
import VerticalFilm from "./components/VerticalFilm";
import "./Birthday.css";

export default function Birthday({ onMusicAutoPlay }) {
  const [phase, setPhase] = useState("idle");
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const pageRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const handleBlow = useCallback(() => {
    setPhase("dimming");
    setTimeout(() => {
      setPhase("blown");
      onMusicAutoPlay?.();
    }, 600);
    setTimeout(() => setPhase("lit"), 1400);
  }, [onMusicAutoPlay]);

  const isAfterBlow = phase === "blown" || phase === "lit";

  return (
    <div
      className={`birthday-page${isAfterBlow ? " split" : ""}`}
      ref={pageRef}
      onMouseMove={handleMouseMove}
    >
      {/* Dim overlay */}
      <div
        className={`birthday-overlay${phase === "dimming" || phase === "blown" ? " dim" : ""}${phase === "lit" ? " lit" : ""}`}
      />

      {/* Confetti */}
      <Confetti active={isAfterBlow} />

      {/* Cake area - slides left on blow */}
      <div className={`cake-stage${isAfterBlow ? " shifted" : ""}`}>
        <Cake onBlow={handleBlow} mouseGlow={mousePos} />
      </div>

      {/* Vertical film strip - appears after blow */}
      <div className={`film-stage${phase === "lit" ? " visible" : ""}`}>
        <VerticalFilm />
      </div>
    </div>
  );
}
