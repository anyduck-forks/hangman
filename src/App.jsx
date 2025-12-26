import { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import StatsPage from './pages/StatsPage';

const APP_STATE = {
  IDLE: 'idle',
  PLAYING: 'playing',
  STATS: 'stats',
};

function App() {
  const [appState, setAppState] = useState(APP_STATE.IDLE);
  const [settings, setSettings] = useState(null);
  const [gameResults, setGameResults] = useState(null);

  const handleStart = (newSettings) => {
    setSettings(newSettings);
    setAppState(APP_STATE.PLAYING);
  };

  const handleGameOver = ({ gameState, isWon }) => {
    setGameResults({ gameState, isWon });
    setAppState(APP_STATE.STATS);
  };

  const handleRestart = () => {
    setAppState(APP_STATE.PLAYING);
  };

  const handleMenu = () => {
    setAppState(APP_STATE.IDLE);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {appState === APP_STATE.IDLE && <StartPage onStart={handleStart} />}
      
      {(appState === APP_STATE.PLAYING) && (
        <GamePage 
          settings={settings}
          onGameOver={handleGameOver}
          disabled={appState !== APP_STATE.PLAYING}
        />
      )}
      
      {appState === APP_STATE.STATS && gameResults && (
        <StatsPage 
          gameState={gameResults.gameState}
          isWon={gameResults.isWon}
          onRestart={handleRestart}
          onMenu={handleMenu}
        />
      )}
    </div>
  );
}

export default App;
