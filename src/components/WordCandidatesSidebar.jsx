export function WordCandidatesSidebar({
  candidatesBest = [],
  candidatesLength = 0,
}) {
  return (
    <div className="w-64 bg-gray-800 border-l border-gray-700 p-4 flex flex-col h-full max-h-screen">
      <h3 className="text-lg font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">
        Top {candidatesBest.length} out of {candidatesLength}
      </h3>
      <div className="flex-1 overflow-y-auto space-y-2">
        {candidatesBest.map((candidate, index) => (
          <div
            key={candidate.word}
            className="flex justify-between items-center p-2 rounded bg-gray-700/50 hover:bg-gray-700 transition-colors"
          >
            <span className="font-mono text-blue-300 font-medium">
              {candidate.word}
            </span>
            {candidate.probability !== undefined && (
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                {(candidate.probability * 100).toFixed(2)}%
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
