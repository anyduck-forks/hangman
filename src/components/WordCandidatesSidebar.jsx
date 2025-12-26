export function WordCandidatesSidebar() {
  // Dummy data for now
  const candidates = [
    { word: "SCAFFOLD", entropy: 12.4 },
    { word: "SCAFFOLDING", entropy: 11.8 },
    { word: "SCALING", entropy: 10.2 },
    { word: "SCARF", entropy: 9.5 },
    { word: "SCALD", entropy: 8.1 },
    { word: "SCALE", entropy: 7.9 },
    { word: "SCAN", entropy: 6.5 },
    { word: "SCAM", entropy: 5.2 },
    { word: "SCAT", entropy: 4.8 },
    { word: "SCAR", entropy: 4.1 },
    { word: "SCORE", entropy: 3.9 },
    { word: "SCOFF", entropy: 3.8 },
    { word: "SCOWL", entropy: 3.7 },
    { word: "SCORN", entropy: 3.6 },
    { word: "SCUBA", entropy: 3.5 },
    { word: "SCUFF", entropy: 3.4 },
    { word: "SCULL", entropy: 3.3 },
    { word: "SCUM", entropy: 3.2 },
    { word: "SCUP", entropy: 3.1 },
    { word: "SCUT", entropy: 3.0 },
    { word: "SCHWA", entropy: 2.9 },
    { word: "SCION", entropy: 2.8 },
    { word: "SCONE", entropy: 2.7 },
    { word: "SCOOP", entropy: 2.6 },
    { word: "SCOOT", entropy: 2.5 },
    { word: "SCOPE", entropy: 2.4 },
    { word: "SCOUR", entropy: 2.3 },
    { word: "SCOUT", entropy: 2.2 },
    { word: "SCRAM", entropy: 2.1 },
    { word: "SCRAP", entropy: 2.0 },
    { word: "SCREW", entropy: 1.9 },
    { word: "SCRIP", entropy: 1.8 },
    { word: "SCROD", entropy: 1.7 },
    { word: "SCRUB", entropy: 1.6 },
    { word: "SCRUM", entropy: 1.5 },
  ];

  return (
    <div className="w-64 bg-gray-800 border-l border-gray-700 p-4 flex flex-col h-full max-h-screen">
      <h3 className="text-lg font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">
        Top Candidates
      </h3>
      <div className="flex-1 overflow-y-auto space-y-2">
        {candidates.map((candidate, index) => (
          <div 
            key={candidate.word}
            className="flex justify-between items-center p-2 rounded bg-gray-700/50 hover:bg-gray-700 transition-colors"
          >
            <span className="font-mono text-blue-300 font-medium">
              {candidate.word}
            </span>
            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
              {candidate.entropy} bits
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
