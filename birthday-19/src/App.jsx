import { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ParticleBg from './components/ParticleBg';
import MusicToggle from './components/MusicToggle';
import Birthday from './pages/Birthday';
import MoodBooster from './pages/MoodBooster';
import Games from './pages/Games';
import Letter from './pages/Letter';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('birthday');
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleMusicAutoPlay = useCallback(() => {
    setMusicPlaying(true);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'birthday':
        return <Birthday key="birthday" onMusicAutoPlay={handleMusicAutoPlay} />;
      case 'mood':
        return <MoodBooster key="mood" />;
      case 'games':
        return <Games key="games" />;
      case 'letter':
        return <Letter key="letter" />;
      default:
        return <Birthday key="birthday" onMusicAutoPlay={handleMusicAutoPlay} />;
    }
  };

  return (
    <div className="app-container">
      <ParticleBg active={true} />
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content" key={activePage}>
        <div className="page-enter">{renderPage()}</div>
      </main>
      <MusicToggle autoPlay={false} />
    </div>
  );
}
