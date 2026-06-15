import { useEffect, useState } from "react";

const COLORS = [
  "#FDE68A", "#F59E0B", "#EC4899", "#F472B6",
  "#A5F3FC", "#C084FC", "#FDE68A", "#F9A8D4",
];
const PIECES = 80;

export default function Confetti({ active = false }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (!active) { setPieces([]); return; }
    const newPieces = Array.from({ length: PIECES }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 45,
      y: 38 + Math.random() * 12,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 720,
      scale: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 0.5,
      duration: Math.random() * 3 + 2.5,
      drift: (Math.random() - 0.5) * 300,
      shape: Math.random() > 0.6 ? "star" : "circle",
    }));
    setPieces(newPieces);
    const timer = setTimeout(() => setPieces([]), 6000);
    return () => clearTimeout(timer);
  }, [active]);

  if (pieces.length === 0) return null;

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 200, overflow: "hidden" }} aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.shape === "star" ? 10 : 6,
            height: p.shape === "star" ? 10 : 6,
            background: p.shape === "circle" ? p.color : "transparent",
            borderRadius: p.shape === "circle" ? "50%" : "0",
            animation: `confettiFall ${p.duration}s cubic-bezier(0.4, 0, 0.2, 1) ${p.delay}s forwards`,
            "--drift": `${p.drift}px`,
            "--rot": `${p.rotation}deg`,
            "--scale": p.scale,
            boxShadow: p.shape === "star"
              ? `0 0 6px ${p.color}, 0 0 12px ${p.color}60`
              : `0 0 4px ${p.color}80`,
            ...(p.shape === "star" ? {
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            } : {}),
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { opacity: 0.9; transform: translateY(0) translateX(0) rotate(0deg) scale(var(--scale)); }
          100% { opacity: 0; transform: translateY(120vh) translateX(var(--drift)) rotate(var(--rot)) scale(0.15); }
        }
      `}</style>
    </div>
  );
}
