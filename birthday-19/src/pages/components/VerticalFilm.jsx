import { useEffect, useRef } from "react";
import "./VerticalFilm.css";

const placeholderGradients = [
  "linear-gradient(135deg, #831843 0%, #9D3465 50%, #BE185D 100%)",
  "linear-gradient(135deg, #1A237E 0%, #283593 50%, #5C6BC0 100%)",
  "linear-gradient(135deg, #004D40 0%, #00695C 50%, #4DB6AC 100%)",
  "linear-gradient(135deg, #BF360C 0%, #D84315 50%, #FF7043 100%)",
  "linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #AB47BC 100%)",
  "linear-gradient(135deg, #311B92 0%, #4527A0 50%, #7E57C2 100%)",
  "linear-gradient(135deg, #5D4037 0%, #795548 50%, #A1887F 100%)",
  "linear-gradient(135deg, #263238 0%, #37474F 50%, #78909C 100%)",
];

const frames = [...placeholderGradients, ...placeholderGradients];

// Random scratches for film aging
const scratches = [
  { top: "8%",  left: "15%", width: "60px" },
  { top: "22%", left: "60%", width: "40px" },
  { top: "35%", left: "8%",  width: "75px" },
  { top: "50%", left: "70%", width: "35px" },
  { top: "68%", left: "20%", width: "55px" },
  { top: "82%", left: "55%", width: "45px" },
];

// Bokeh light spots at bottom
const bokehs = [
  { left: "18%", size: 28, alpha: 0.12, color: "rgba(200,160,120" },
  { left: "35%", size: 40, alpha: 0.08, color: "rgba(220,180,140" },
  { left: "55%", size: 22, alpha: 0.14, color: "rgba(180,140,100" },
  { left: "72%", size: 34, alpha: 0.09, color: "rgba(210,170,130" },
];

export default function VerticalFilm() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const scrollRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const speed = 0.15;

    const animate = () => {
      if (!pausedRef.current) {
        scrollRef.current += speed;
        const singleSetHeight = track.scrollHeight / 2;
        if (scrollRef.current >= singleSetHeight) {
          scrollRef.current -= singleSetHeight;
        }
        track.style.transform = `translateY(${-scrollRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => { pausedRef.current = true; };
    const onLeave = () => { pausedRef.current = false; };
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="vertical-film" aria-label="回忆胶卷">
      {/* Top vignette */}
      <div className="vf-top-vignette" aria-hidden="true" />

      {/* Scratches */}
      <div className="vf-scratches" aria-hidden="true">
        {scratches.map((s, i) => (
          <span
            key={`scratch-${i}`}
            className="vf-scratch"
            style={{ top: s.top, left: s.left, width: s.width }}
          />
        ))}
      </div>

      {/* Bokeh spots */}
      {bokehs.map((b, i) => (
        <span
          key={`bokeh-${i}`}
          className="vf-bokeh"
          aria-hidden="true"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, ${b.color},${b.alpha}) 0%, transparent 100%)`,
          }}
        />
      ))}

      {/* Left sprocket holes */}
      <div className="vf-sprockets vf-sprockets-left" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => (
          <span key={`vl-${i}`} className="vf-hole" />
        ))}
      </div>

      {/* Photo frames */}
      <div className="vf-track" ref={trackRef}>
        {frames.map((gradient, i) => (
          <div key={i} className="vf-frame">
            <div className="vf-photo" style={{ background: gradient }}>
              <div className="vf-photo-overlay" />
              <span className="vf-frame-num">
                {((i % 8) + 1).toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Right sprocket holes */}
      <div className="vf-sprockets vf-sprockets-right" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => (
          <span key={`vr-${i}`} className="vf-hole" />
        ))}
      </div>
    </div>
  );
}