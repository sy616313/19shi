import { useState, useCallback, useRef, useEffect } from "react";
import Cake from "./components/Cake";
import Confetti from "./components/Confetti";
import VerticalFilm from "./components/VerticalFilm";
import MagicalLighter from "./components/MagicalLighter";
import useBlowDetector from "../hooks/useBlowDetector";
import "./Birthday.css";

const WISH_SECONDS = 5;

export default function Birthday({ onMusicAutoPlay }) {
  const [phase, setPhase] = useState("idle");
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [wishCountdown, setWishCountdown] = useState(WISH_SECONDS);
  const [showGuide, setShowGuide] = useState(false);
  const [guideText, setGuideText] = useState("");
  const pageRef = useRef(null);
  const candleRef = useRef(null);
  const wishTimerRef = useRef(null);
  const guideTimerRef = useRef(null);

  // ---- Mouse tracking ----
  const handleMouseMove = useCallback((e) => {
    if (!pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  // ---- Phase transitions ----
  useEffect(() => {
    if (phase === "idle") {
      const t = setTimeout(() => {
        setPhase("lighterAppear");
        setShowGuide(true);
        setGuideText("拖动打火机点燃蜡烛吧~");
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // ---- Wishing countdown ----
  useEffect(() => {
    if (phase !== "wishing") return;
    setWishCountdown(WISH_SECONDS);
    wishTimerRef.current = setInterval(() => {
      setWishCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(wishTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(wishTimerRef.current);
  }, [phase]);

  useEffect(() => {
    if (phase === "wishing" && wishCountdown === 0) {
      setPhase("blowReady");
      setGuideText("呼~ 吹灭蜡烛吧！");
    }
  }, [phase, wishCountdown]);

  // ---- Guide text auto-hide ----
  useEffect(() => {
    if (!showGuide) return;
    if (phase === "lighterAppear" || phase === "lighterReady") {
      guideTimerRef.current = setTimeout(() => {
        if (phase === "lighterAppear" || phase === "lighterReady") {
          setShowGuide(false);
        }
      }, 6000);
    }
    return () => clearTimeout(guideTimerRef.current);
  }, [showGuide, phase]);

  // ---- Blow detection ----
  const { blowDetected, micSupported, micLevel } = useBlowDetector(
    phase === "blowReady" || phase === "blowing"
  );

  useEffect(() => {
    if (blowDetected && phase === "blowReady") {
      handleBlow();
    }
  }, [blowDetected, phase]);

  // ---- Lighter snap -> light candle ----
  const handleLighterSnap = useCallback(() => {
    setShowGuide(false);
    setPhase("lighting");
    setTimeout(() => {
      setPhase("candleLit");
      setShowGuide(true);
      setGuideText("许个愿吧...");
    }, 800);
  }, []);

  // ---- Candle lit -> start wishing ----
  useEffect(() => {
    if (phase !== "candleLit") return;
    const t = setTimeout(() => {
      setPhase("wishing");
      setGuideText(`许个愿吧... ${WISH_SECONDS}`);
    }, 1500);
    return () => clearTimeout(t);
  }, [phase]);

  // Update wish countdown text
  useEffect(() => {
    if (phase === "wishing" && wishCountdown > 0) {
      setGuideText(`许个愿吧... ${wishCountdown}`);
    }
  }, [phase, wishCountdown]);

  // ---- Blow out ----
  const handleBlow = useCallback(() => {
    setShowGuide(false);
    setPhase("blowing");
    setTimeout(() => {
      setPhase("dimming");
      setTimeout(() => {
        setPhase("blown");
        onMusicAutoPlay?.();
      }, 600);
      setTimeout(() => setPhase("lit"), 1400);
    }, 500);
  }, [onMusicAutoPlay]);

  // ---- Derived states ----
  const isAfterBlow = phase === "blown" || phase === "lit";
  const lighterVisible =
    phase === "lighterAppear" ||
    phase === "lighterReady" ||
    phase === "lighting";
  const candleIgnited =
    phase === "candleLit" ||
    phase === "wishing" ||
    phase === "blowReady" ||
    phase === "blowing";
  const candleIgniting = phase === "lighting";
  const candleBlown = phase === "blowing" || phase === "dimming" || phase === "blown" || phase === "lit";

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

      {/* Mic level indicator */}
      {(phase === "blowReady" || phase === "blowing") && micSupported && (
        <div className="mic-indicator" aria-hidden="true">
          <div className="mic-bar" style={{ height: `${Math.min(micLevel, 100)}%` }} />
        </div>
      )}

      {/* Guide text overlay */}
      <div className={`guide-overlay${showGuide ? " visible" : ""}`}>
        <p className="guide-text">{guideText}</p>
        {/* Click hint for blow when mic not supported */}
        {phase === "blowReady" && micSupported === false && (
          <p className="guide-sub">也可以点击蜡烛吹灭哦</p>
        )}
      </div>

      {/* Cake area */}
      <div className={`cake-stage${isAfterBlow ? " shifted" : ""}`}>
        <Cake
          ref={candleRef}
          ignited={candleIgnited}
          igniting={candleIgniting}
          blown={candleBlown}
          onBlow={handleBlow}
          mouseGlow={mousePos}
        />
      </div>

      {/* Magical Lighter */}
      <MagicalLighter
        visible={lighterVisible}
        candleRef={candleRef}
        onSnapToCandle={handleLighterSnap}
      />

      {/* Vertical film strip */}
      <div className={`film-stage${phase === "lit" ? " visible" : ""}`}>
        <VerticalFilm />
      </div>
    </div>
  );
}
