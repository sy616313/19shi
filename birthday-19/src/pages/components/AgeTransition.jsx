import { useEffect, useState } from "react";
import "./AgeTransition.css";

const PHASE_TIMINGS = {
  reveal: 800,
  morphing: 900,
  textAppear: 700,
};

const SEQUENCE = ["reveal", "morphing", "textAppear", "final"];

export default function AgeTransition({ phase, onComplete }) {
  const [internalPhase, setInternalPhase] = useState("hidden");

  useEffect(() => {
    if (phase === "hidden") {
      setInternalPhase("hidden");
      return;
    }

    const startIndex = SEQUENCE.indexOf(phase);
    if (startIndex === -1) return;

    setInternalPhase(phase);

    const timers = [];
    let delay = 0;

    for (let i = startIndex; i < SEQUENCE.length - 1; i++) {
      delay += PHASE_TIMINGS[SEQUENCE[i]] || 800;
      const nextPhase = SEQUENCE[i + 1];
      const timer = setTimeout(() => {
        setInternalPhase(nextPhase);
      }, delay);
      timers.push(timer);
    }

    delay += 2500;
    const completeTimer = setTimeout(() => {
      onComplete && onComplete();
    }, delay);
    timers.push(completeTimer);

    return () => timers.forEach(clearTimeout);
  }, [phase, onComplete]);

  if (internalPhase === "hidden") return null;

  const isVisible = SEQUENCE.includes(internalPhase);
  const isMorphing = ["morphing", "textAppear", "final"].includes(internalPhase);
  const showText = ["textAppear", "final"].includes(internalPhase);
  const isFinal = internalPhase === "final";

  const cls = "age-transition" + (isVisible ? " visible" : "");
  const eightCls = "age-digit age-eight" + (isMorphing ? " morph-out" : "");
  const nineCls = "age-digit age-nine" + (isMorphing ? " morph-in" : "");

  let greetingCls = "birthday-greeting";
  if (showText) greetingCls += " show";
  if (isFinal) greetingCls += " glow";

  return (
    <div className={cls} aria-live="polite">
      <div className="age-group">
        <div className="age-wrapper">
          <span className="age-digit age-one">1</span>
          <span className="age-digit-slot">
            <span className={eightCls}>8</span>
            <span className={nineCls}>9</span>
          </span>
        </div>
        <span className={greetingCls}>生日快乐</span>
      </div>
    </div>
  );
}