import { useState, useEffect } from "react";
import ThreeCake from "../components/ThreeCake";

export default function Birthday() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const check = () => setIsPortrait(window.innerHeight > window.innerWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{
      position: "fixed",
      width: isPortrait ? "100vh" : "100vw",
      height: isPortrait ? "100vw" : "100vh",
      top: isPortrait ? "calc((100vh - 100vw) / 2)" : 0,
      left: isPortrait ? "calc((100vw - 100vh) / 2)" : 0,
      transform: isPortrait ? "rotate(90deg)" : "none",
      transformOrigin: "center center",
      overflow: "hidden",
      background: "#06060F",
      zIndex: 9999,
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 50% 45%, #12082a 0%, #0a0618 35%, #06060F 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: [
          "radial-gradient(circle at 30% 35%, rgba(168,85,247,0.10) 0%, transparent 70%)",
          "radial-gradient(circle at 70% 60%, rgba(56,189,248,0.08) 0%, transparent 50%)",
          "radial-gradient(circle at 50% 15%, rgba(236,72,153,0.06) 0%, transparent 40%)",
        ].join(","),
      }} />
      <div className="cosmic-stars" />
      <ThreeCake />
      <style>{`
        .cosmic-stars {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
        }
        .cosmic-stars::after {
          content: ''; position: absolute; width: 1px; height: 1px; background: white;
          box-shadow:
            10vw 15vh 0 0.5px rgba(255,255,255,0.7),
            35vw 12vh 0 0.4px rgba(255,255,255,0.5),
            55vw 22vh 0 0.5px rgba(255,255,255,0.6),
            75vw 10vh 0 0.3px rgba(255,255,255,0.7),
            90vw 18vh 0 0.4px rgba(255,255,255,0.5),
            20vw 35vh 0 0.5px rgba(255,255,255,0.6),
            45vw 30vh 0 0.3px rgba(255,255,255,0.7),
            65vw 40vh 0 0.4px rgba(255,255,255,0.5),
            80vw 35vh 0 0.5px rgba(255,255,255,0.6),
            15vw 55vh 0 0.3px rgba(255,255,255,0.7),
            30vw 50vh 0 0.4px rgba(255,255,255,0.5),
            50vw 58vh 0 0.5px rgba(255,255,255,0.6),
            70vw 52vh 0 0.3px rgba(255,255,255,0.7),
            85vw 60vh 0 0.4px rgba(255,255,255,0.5),
            8vw 75vh 0 0.5px rgba(255,255,255,0.6),
            25vw 72vh 0 0.3px rgba(255,255,255,0.7),
            40vw 80vh 0 0.4px rgba(255,255,255,0.5),
            60vw 75vh 0 0.5px rgba(255,255,255,0.6),
            78vw 85vh 0 0.3px rgba(255,255,255,0.7),
            95vw 78vh 0 0.4px rgba(255,255,255,0.5);
          animation: starTwinkle 4s ease-in-out infinite alternate;
        }
        @keyframes starTwinkle { 0% { opacity: 0.5; } 100% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .cosmic-stars::after { animation: none; opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
