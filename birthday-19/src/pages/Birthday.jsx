import { useState, useCallback, useRef, useEffect } from 'react';
import Cake from './components/Cake';
import AgeTransition from './components/AgeTransition';
import VerticalFilm from './components/VerticalFilm';
import './Birthday.css';

export default function Birthday({ onMusicAutoPlay }) {
  const [phase, setPhase] = useState('idle');
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [showGuide, setShowGuide] = useState(false);
  const pageRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!pageRef.current) return;
    const rect = pageRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  // Show guide after idle
  useEffect(() => {
    if (phase === 'idle') {
      const t = setTimeout(() => setShowGuide(true), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Tap cake → dark screen → age reveal → lit
  const handleTap = useCallback(() => {
    if (phase !== 'idle') return;
    setShowGuide(false);
    setPhase('darkScreen');
  }, [phase]);

  const handleAgeComplete = useCallback(() => {
    setPhase('lit');
    onMusicAutoPlay?.();
  }, [onMusicAutoPlay]);

  useEffect(() => {
    if (phase === 'darkScreen') {
      const t = setTimeout(() => setPhase('ageReveal'), 400);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const isDarkPhase = phase === 'darkScreen' || phase === 'ageReveal';
  const isLit = phase === 'lit';
  const showCake = phase === 'idle';
  const showAgeTransition = isDarkPhase;

  return (
    <div className='birthday-page' ref={pageRef} onMouseMove={handleMouseMove}>
      <div className={'birthday-overlay' + (isDarkPhase ? ' dark' : '') + (isLit ? ' lit' : '')} />

      {showAgeTransition && (
        <AgeTransition
          phase={phase === 'ageReveal' ? 'reveal' : 'hidden'}
          onComplete={handleAgeComplete}
        />
      )}

      <div className={'guide-overlay' + (showGuide ? ' visible' : '')}>
        <p className='guide-text'>轻触蛋糕继续</p>
      </div>

      {showCake && (
        <div className='cake-stage' onClick={handleTap} style={{ cursor: 'pointer' }}>
          <Cake
            ignited={false}
            igniting={false}
            blown={false}
            onBlow={handleTap}
            mouseGlow={mousePos}
          />
        </div>
      )}

      <div className={'film-stage' + (isLit ? ' visible' : '')}>
        <VerticalFilm />
      </div>
    </div>
  );
}