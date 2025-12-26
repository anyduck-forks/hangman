import { Button } from '../components/ui/Button';

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

        {/* Guess Distribution Bar Chart */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-200">Guess Distribution</h3>
          <div className="h-64 bg-gray-900/50 rounded-lg p-6 border border-gray-700 flex items-end justify-between gap-2">
            {[
              { label: '1', height: '10%' },
              { label: '2', height: '25%' },
              { label: '3', height: '45%' },
              { label: '4', height: '60%', active: true },
              { label: '5', height: '30%' },
              { label: '6', height: '15%' },
            ].map((bar) => (
              <div key={bar.label} className="flex flex-col items-center flex-1 h-full justify-end group">
                <div className="relative w-full flex items-end justify-center h-full">
                   {bar.active && (
                      <div className="absolute -top-8 text-xs font-bold text-pink-400 animate-bounce">YOU</div>
                   )}
                   <div 
                      style={{ height: bar.height }} 
                      className={`w-full rounded-t-md transition-all duration-500 ${
                        bar.active 
                          ? 'bg-pink-500 shadow-[0_0_15px_rgba(244,114,182,0.5)]' 
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                   ></div>
                </div>
                <span className={`mt-2 text-sm font-mono ${bar.active ? 'text-pink-400 font-bold' : 'text-gray-500'}`}>
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Most players solve it in <span className="text-white font-bold">4</span> guesses.
          </p>
        </div>

        <div className="flex justify-center pt-4">
             <Button onClick={onRestart} className="px-12 py-3 text-lg bg-blue-600 hover:bg-blue-500">
                Continue
             </Button>
        </div>
      </div>
    </div>
  );
}
