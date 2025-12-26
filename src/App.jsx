import { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'result'
  const [settings, setSettings] = useState({ showInfoBits: false, difficulty: 'medium' });
  const [isWin, setIsWin] = useState(false);

  const handleStart = (newSettings) => {
    setSettings(newSettings);
    setGameState('playing');
  };

  const handleGameOver = (win) => {
    setIsWin(win);
    setGameState('result');
  };

  const handleRestart = () => {
    setGameState('start');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {gameState === 'start' && <StartPage onStart={handleStart} />}
      {gameState === 'playing' && <GamePage settings={settings} onGameOver={handleGameOver} />}
      {gameState === 'result' && <ResultPage win={isWin} onRestart={handleRestart} />}
    </div>
  );
}

export default App;
