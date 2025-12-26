import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useHangman, ALPHABET } from "../hooks/useHangman";
import { Hangman } from "../components/Hangman";
import { WordProgress } from "../components/WordProgress";
import { Keyboard } from "../components/Keyboard";
import { WordCandidatesSidebar } from "../components/WordCandidatesSidebar";

export default function GamePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const settings = location.state?.settings;

  if (!settings) {
    return <Navigate to="/" replace />;
  }

  const handleGameOver = ({ gameState, isWon }) => {
    navigate(`/stats/${settings.userId}`, {
      state: { gameState, isWon, settings },
    });
  };

  const { gameState, analysis, guessLetter, wordProgress } = useHangman({
    shouldDoAnalysis: settings.showInfoBits,
    wordLength: settings.wordLength,
    lives: settings.maxGuesses,
    onGameEnd: handleGameOver,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Main Game Area */}
      <div className="flex-1 flex flex-col items-center p-4 overflow-y-auto">
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl text-gray-400">
              Difficulty: {settings.difficulty}
            </h2>
            {settings.showInfoBits && (
              <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded text-sm">
                Info Theory Mode Active
              </span>
            )}
          </div>

          <Hangman lives={gameState.lives} />

          <WordProgress wordProgress={wordProgress} />

          <div className="mt-12">
            <Keyboard
              keys={ALPHABET}
              onKeyPress={guessLetter}
              usedKeys={gameState.guesses}
              entropies={analysis?.entropies}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {settings.showInfoBits && (
        <WordCandidatesSidebar
          candidatesBest={analysis?.candidatesBest}
          candidatesLength={analysis?.candidatesLength}
        />
      )}
    </div>
  );
}
