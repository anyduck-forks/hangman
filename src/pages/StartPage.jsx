import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      difficulty: 'medium',
      wordLength: 6,
      maxGuesses: 6,
      showInfoBits: false
    }
  });

  const difficulty = watch('difficulty');
  const wordLength = watch('wordLength');
  const maxGuesses = watch('maxGuesses');

  useEffect(() => {
    const settings = DIFFCULTIES[difficulty];
    if (settings) {
      setValue('wordLength', settings.wordLength);
      setValue('maxGuesses', settings.maxGuesses);
    }
  }, [difficulty, setValue]);

  const onSubmit = (data) => {
    onStart(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-8 text-blue-500">Hangman</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-6">Game Settings</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Checkbox 
            id="showInfoBits"
            label="Show Information Bits"
            {...register('showInfoBits')}
          />

          <Select
            id="difficulty"
            label="Difficulty"
            {...register('difficulty')}
          >
            {Object.keys(DIFFCULTIES).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
            <option value="custom">Custom</option>
          </Select>

          {difficulty === 'custom' && (
            <div className="space-y-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600 animate-in fade-in slide-in-from-top-2">
              <Slider
                id="wordLength"
                label="Word Length"
                min="3"
                max="12"
                valueDisplay={`${wordLength} letters`}
                color="blue"
                {...register('wordLength', { valueAsNumber: true })}
              />

              <Slider
                id="maxGuesses"
                label="Max Wrong Guesses"
                min="1"
                max="10"
                valueDisplay={`${maxGuesses} guesses`}
                color="blue"
                {...register('maxGuesses', { valueAsNumber: true })}
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
