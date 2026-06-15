import "./AgeTransition.css";

export default function AgeTransition({ blown = false }) {
  return (
    <div className="age-transition" aria-live="polite">
      <span className={`age-number old${blown ? " fading" : ""}`} aria-hidden={blown}>18</span>
      <span className={`age-number new${blown ? "" : " hidden"}`}>19</span>
      <span className={`birthday-text${blown ? " show" : ""}`}>生日快乐</span>
      {!blown && <p className="hint-text">轻触蜡烛 · 许下心愿</p>}
    </div>
  );
}
