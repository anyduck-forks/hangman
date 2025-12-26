import Hangman from '../components/Hangman';
import WordProgress from '../components/WordProgress';
import Keyboard from '../components/Keyboard';

export default function GamePage({ settings, onGameOver }) {
  // Mock state for scaffolding
  const word = "scaffolding";
  const guessedLetters = ['s', 'a'];
  const mistakes = 2;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl text-gray-400">Difficulty: {settings.difficulty}</h2>
          {settings.showInfoBits && (
            <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded text-sm">
              Info Theory Mode Active
            </span>
          )}
        </div>

        <Hangman mistakes={mistakes} />
        
        <WordProgress word={word} guessedLetters={guessedLetters} />
        
        <div className="mt-12">
          <Keyboard 
            onKeyPress={(key) => console.log("Pressed", key)} 
            usedKeys={guessedLetters}
            showInfoBits={settings.showInfoBits}
          />
        </div>

        {/* Debug button to trigger game over */}
        <button 
          onClick={() => onGameOver(true)}
          className="fixed bottom-4 right-4 text-gray-600 hover:text-white text-xs"
        >
          Debug: Win Game
        </button>
      </div>
    </div>
  );
}
