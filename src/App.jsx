import { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

function App() {
  const [appState, setAppState] = useState('idle'); // idle, playing, result
  const [settings, setSettings] = useState({ showInfoBits: false, maxGuesses: 0, wordLength: 0, difficulty: 'medium' });
  const [gameResults, setGameResults] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleStart = (newSettings) => {
    setSettings(newSettings);
    setAppState('playing');
    setStartTime(Date.now());
    setEndTime(null);
  };

  const handleGameOver = ({ gameState, isWon }) => {
    setEndTime(Date.now());
    console.log('Game Over:', { gameState, isWon });
    
    setGameResults({ gameState, isWon });
    setAppState('result');
  };

  const handleRestart = () => {
    setAppState('playing');
    setStartTime(Date.now());
    setEndTime(null);
  };

  const handleMenu = () => {
    setAppState('idle');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {appState === 'idle' && <StartPage onStart={handleStart} />}
      
      {appState === 'playing' && (
        <GamePage 
          settings={settings}
          onGameOver={handleGameOver}
        />
      )}
      
      {appState === 'result' && gameResults && (
        <ResultPage 
          gameState={gameResults.gameState}
          isWon={gameResults.isWon}
          startTime={startTime}
          endTime={endTime}
          onRestart={handleRestart}
          onMenu={handleMenu}
        />
      )}
    </div>
  );
}

export default App;
