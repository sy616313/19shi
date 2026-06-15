import { useRef } from "react";
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

// Duplicate for seamless loop
const frames = [...placeholderGradients, ...placeholderGradients];

export default function VerticalFilm() {
  const trackRef = useRef(null);

  return (
    <div className="vertical-film" aria-label="回忆胶卷">
      {/* Left sprocket holes */}
      <div className="vf-sprockets vf-sprockets-left" aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={`vl-${i}`} className="vf-hole" />
        ))}
      </div>

      {/* Frames track */}
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
        {Array.from({ length: 20 }, (_, i) => (
          <span key={`vr-${i}`} className="vf-hole" />
        ))}
      </div>
    </div>
  );
}
