import { useEffect, useState, useRef } from "react";
import "./PhotoWall.css";

const placeholderGradients = [
  "linear-gradient(135deg, #831843 0%, #9D3465 50%, #BE185D 100%)",
  "linear-gradient(135deg, #5D4037 0%, #795548 50%, #A1887F 100%)",
  "linear-gradient(135deg, #311B92 0%, #4527A0 50%, #7E57C2 100%)",
  "linear-gradient(135deg, #004D40 0%, #00695C 50%, #4DB6AC 100%)",
  "linear-gradient(135deg, #BF360C 0%, #D84315 50%, #FF7043 100%)",
  "linear-gradient(135deg, #1A237E 0%, #283593 50%, #5C6BC0 100%)",
  "linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #AB47BC 100%)",
  "linear-gradient(135deg, #263238 0%, #37474F 50%, #78909C 100%)",
];

const SPROCKET_COUNT = 18;

export default function PhotoWall({ show = false }) {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show]);

  const photos = [...placeholderGradients, ...placeholderGradients];

  return (
    <div className={`film-strip-stage${visible ? " visible" : ""}`} aria-label="回忆照片墙">
      <div className="film-strip-container">
        {/* Top sprocket holes */}
        <div className="film-sprockets film-sprockets-top" aria-hidden="true">
          {Array.from({ length: SPROCKET_COUNT * 2 }, (_, i) => (
            <span key={`top-${i}`} className="sprocket-hole" />
          ))}
        </div>

        {/* Photo frames */}
        <div className="film-frames-track" ref={scrollRef}>
          {photos.map((gradient, index) => (
            <div key={index} className="film-frame">
              <div className="film-photo" style={{ background: gradient }}>
                <div className="film-photo-overlay" />
                <span className="film-photo-number">
                  {((index % 8) + 1).toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom sprocket holes */}
        <div className="film-sprockets film-sprockets-bottom" aria-hidden="true">
          {Array.from({ length: SPROCKET_COUNT * 2 }, (_, i) => (
            <span key={`bottom-${i}`} className="sprocket-hole" />
          ))}
        </div>
      </div>
    </div>
  );
}
