import { Button } from '../components/ui/Button';
import { GuessDistributionChart } from '../components/GuessDistributionChart';

export default function ResultPage({ onRestart, timeTaken = "1:45", guesses = 4 }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl w-full border border-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-center">Game Statistics</h2>
        
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

        <div className="flex justify-center pt-4">
             <Button onClick={onRestart} className="px-12 py-3 text-lg bg-blue-600 hover:bg-blue-500">
                Continue
             </Button>
        </div>
      </div>
    </div>
  );
}
