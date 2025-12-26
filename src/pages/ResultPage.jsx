import { Button } from '../components/ui/Button';
import { GuessDistributionChart } from '../components/GuessDistributionChart';

export default function ResultPage({ gameState, isWon, onRestart, onMenu }) {
  const durationMs = (Date.now() - gameState.startedAt);
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  const timeTaken = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  const guesses = gameState.guesses.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl w-full border border-gray-700">
        <h1 className={`text-4xl font-bold mb-4 text-center ${isWon ? 'text-green-500' : 'text-red-500'}`}>
          {isWon ? 'You Won!' : 'Game Over'}
        </h1>
        
        <p className="text-xl mb-8 text-center text-gray-300">
          The word was: <span className="text-white font-mono font-bold uppercase">{gameState.word}</span>
        </p>

        <h2 className="text-2xl font-bold mb-6 text-center">Game Statistics</h2>
        
        {/* Stats Grid */}
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

        <GuessDistributionChart guesses={guesses} />

        <div className="flex justify-center gap-4 pt-4">
             <Button onClick={onRestart} className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-500">
                Play Again
             </Button>
             <Button onClick={onMenu} className="px-8 py-3 text-lg bg-gray-700 hover:bg-gray-600">
                Menu
             </Button>
        </div>
      </div>
    </div>
  );
}
