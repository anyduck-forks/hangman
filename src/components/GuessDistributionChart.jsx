export function GuessDistributionChart({ guesses, distribution = [], isWon }) {
  const mode = distribution.reduce((a, b) => (a.count > b.count ? a : b), {
    count: 0,
    label: "-",
  });

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-200">
        Missed Guesses Distribution
      </h3>
      <div className="h-128 bg-gray-900/50 rounded-lg p-6 border border-gray-700 flex items-end justify-between gap-2">
        {distribution.map((bar) => {
          const isActive =
            (isWon && parseInt(bar.label) === guesses) ||
            (bar.isFail && !isWon);
          const styleHeight =
            bar.count > 0 ? Math.max(parseInt(bar.height), 5) + "%" : "1%";

          return (
            <div
              key={bar.label}
              className="flex flex-col items-center flex-1 h-full justify-end group"
            >
              <div className="relative w-full flex items-end justify-center h-full">
                {isActive && (
                  <div
                    className={`absolute -top-8 text-xs font-bold ${bar.isFail ? "text-red-400" : "text-pink-400"} animate-bounce`}
                  >
                    YOU
                  </div>
                )}
                <div
                  style={{ height: bar.count > 0 ? styleHeight : "4px" }}
                  className={`w-full rounded-t-md transition-all duration-500 ${
                    isActive
                      ? bar.isFail
                        ? "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                        : "bg-pink-500 shadow-[0_0_15px_rgba(244,114,182,0.5)]"
                      : bar.count > 0
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-800"
                  }`}
                  title={`${bar.count} games`}
                ></div>
              </div>
              <span
                className={`mt-2 text-sm font-mono ${isActive ? (bar.isFail ? "text-red-400 font-bold" : "text-pink-400 font-bold") : "text-gray-500"}`}
              >
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-center text-gray-400 mt-4 text-sm">
        Most common result:{" "}
        <span className="text-white font-bold">
          {mode.label === "X" ? "Failed" : `${mode.label} misses`}
        </span>
        .
      </p>
    </div>
  );
}
