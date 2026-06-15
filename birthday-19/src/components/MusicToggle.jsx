import { useState } from "react";
import { IconMusic, IconMusicOff } from "./Icons";
import "./MusicToggle.css";

export default function MusicToggle({ autoPlay = false }) {
  const [playing, setPlaying] = useState(autoPlay);

  const toggle = () => {
    setPlaying(!playing);
  };

  return (
    <button
      className={`music-toggle${playing ? " playing" : ""}`}
      onClick={toggle}
      aria-label={playing ? "暂停音乐" : "播放音乐"}
      title={playing ? "暂停音乐" : "播放音乐"}
    >
      {playing && (
        <>
          <span className="music-ripple" />
          <span className="music-ripple" />
          <span className="music-ripple" />
        </>
      )}
      {playing ? <IconMusic size={20} /> : <IconMusicOff size={20} />}
    </button>
  );
}
