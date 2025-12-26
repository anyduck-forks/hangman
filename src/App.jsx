import { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

const APP_STATE = {
  IDLE: 'idle',
  PLAYING: 'playing',
  RESULT: 'result',
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
    setAppState(APP_STATE.RESULT);
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
      
      {appState === APP_STATE.PLAYING && (
        <GamePage 
          settings={settings}
          onGameOver={handleGameOver}
        />
      )}
      
      {appState === APP_STATE.RESULT && gameResults && (
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
