export function GuessDistributionChart({ guesses = 4 }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-200">Guess Distribution</h3>
      <div className="h-64 bg-gray-900/50 rounded-lg p-6 border border-gray-700 flex items-end justify-between gap-2">
        {[
          { label: '1', height: '10%' },
          { label: '2', height: '25%' },
          { label: '3', height: '45%' },
          { label: '4', height: '60%' },
          { label: '5', height: '30%' },
          { label: '6', height: '15%' },
        ].map((bar) => {
            const isActive = parseInt(bar.label) === guesses;
            return (
          <div key={bar.label} className="flex flex-col items-center flex-1 h-full justify-end group">
            <div className="relative w-full flex items-end justify-center h-full">
               {isActive && (
                  <div className="absolute -top-8 text-xs font-bold text-pink-400 animate-bounce">YOU</div>
               )}
               <div 
                  style={{ height: bar.height }} 
                  className={`w-full rounded-t-md transition-all duration-500 ${
                    isActive 
                      ? 'bg-pink-500 shadow-[0_0_15px_rgba(244,114,182,0.5)]' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
               ></div>
            </div>
            <span className={`mt-2 text-sm font-mono ${isActive ? 'text-pink-400 font-bold' : 'text-gray-500'}`}>
              {bar.label}
            </span>
          </div>
        )})}
      </div>
      <p className="text-center text-gray-400 mt-4 text-sm">
        Most players solve it in <span className="text-white font-bold">4</span> guesses.
      </p>
    </div>
  );
}
