import { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Portal } from '../components/ui/Portal';
import { GuessDistributionChart } from '../components/GuessDistributionChart';
import { useGameHistory } from '../hooks/useGameHistory';

export default function StatsPage({ gameState, isWon, startTime, endTime, onRestart, onMenu }) {
  const { saveGameResult, getDistribution } = useGameHistory();
  const [showModal, setShowModal] = useState(true);

  console.log('StatsPage rendered', showModal);

  const missedCount = gameState.guesses.filter(l => !gameState.word.includes(l)).length;

  useEffect(() => {
    saveGameResult({
      gameState,
      isWon,
      guessesCount: gameState.guesses.length,
      missedGuesses: missedCount,
      word: gameState.word
    });
  }, [gameState, isWon, missedCount, saveGameResult]);

  const durationMs = (Date.now() - gameState.startedAt);
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  const timeTaken = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  const guesses = gameState.guesses.length;
  const distribution = getDistribution(gameState.word.length, missedCount, isWon);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full border border-gray-700">
        <GuessDistributionChart guesses={missedCount} distribution={distribution} isWon={isWon} />

        <div className="flex justify-center gap-4 pt-4">
          <Button onClick={onRestart} className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-500">
            Play Again
          </Button>
          <Button onClick={onMenu} className="px-8 py-3 text-lg bg-gray-700 hover:bg-gray-600">
            Menu
          </Button>
        </div>
      </div>
      <Portal
        showModal={showModal}
        title={isWon ? 'You Won!' : 'Game Over'}
        onClose={() => setShowModal(false)}
      >
        <div className="flex flex-col items-center text-white p-4">
          <p className="text-xl mb-8 text-center text-gray-300">
            The word was: <span className="text-white font-mono font-bold uppercase">{gameState.word}</span>
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-700/50 p-6 rounded-lg text-center border border-gray-600">
              <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Time Taken</p>
              <p className="text-4xl font-mono font-bold mt-2 text-blue-400">{timeTaken}</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg text-center border border-gray-600">
              <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Guesses Used</p>
              <p className="text-4xl font-mono font-bold mt-2 text-purple-400">{guesses}</p>
            </div>
          </div>


          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button onClick={onRestart} className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-500">
              Play Again
            </Button>
            <Button onClick={onMenu} className="w-full py-3 text-lg bg-gray-700 hover:bg-gray-600">
              Menu
            </Button>
          </div>
        </div>
      </Portal>
    </div>
  );
}
