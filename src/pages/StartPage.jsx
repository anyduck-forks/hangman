import { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Select } from '../components/ui/Select';
import { Slider } from '../components/ui/Slider';



const DIFFCULTIES = {
  'easy': { wordLength: 4, maxGuesses: 8 },
  'medium': { wordLength: 6, maxGuesses: 6 },
  'hard': { wordLength: 8, maxGuesses: 4 },
}

export default function StartPage({ onStart }) {
  const [difficulty, setDifficulty] = useState('medium');
  const [wordLength, setWordLength] = useState(5);
  const [maxGuesses, setMaxGuesses] = useState(6);


  useEffect(() => {
    const settings = DIFFCULTIES[difficulty];
    if (settings) {
      setWordLength(settings.wordLength);
      setMaxGuesses(settings.maxGuesses);
    }
  }, [difficulty]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-8 text-blue-500">Hangman</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-6">Game Settings</h2>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const settings = {
              showInfoBits: formData.get('showInfoBits') === 'on',
              wordLength,
              maxGuesses,
              difficulty,
            };
            onStart(settings);
          }}
          className="space-y-6"
        >
          <Checkbox 
            id="showInfoBits"
            name="showInfoBits"
            label="Show Information Bits"
          />

          <Select
            id="difficulty"
            name="difficulty"
            label="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="custom">Custom</option>
          </Select>

          {difficulty === 'custom' && (
            <div className="space-y-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600 animate-in fade-in slide-in-from-top-2">
              <Slider
                id="wordLength"
                label="Word Length"
                value={wordLength}
                min="3"
                max="12"
                onChange={(e) => setWordLength(parseInt(e.target.value))}
                valueDisplay={`${wordLength} letters`}
                color="blue"
              />

              <Slider
                id="maxGuesses"
                label="Max Guesses"
                value={maxGuesses}
                min="1"
                max="10"
                onChange={(e) => setMaxGuesses(parseInt(e.target.value))}
                valueDisplay={`${maxGuesses} guesses`}
                color="purple"
              />
            </div>
          )}

          <Button type="submit" className="w-full py-3 text-lg mt-4">
            Start Game
          </Button>
        </form>
      </div>
    </div>
  );
}
