import { Button } from '../components/ui/Button';

export default function StartPage({ onStart }) {
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
              difficulty: formData.get('difficulty')
            };
            onStart(settings);
          }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <label htmlFor="showInfoBits" className="text-lg">
              Show Information Bits
            </label>
            <input
              type="checkbox"
              id="showInfoBits"
              name="showInfoBits"
              className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500 bg-gray-700 border-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="difficulty" className="block text-lg">Difficulty</label>
            <select 
              name="difficulty" 
              id="difficulty"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <Button type="submit" className="w-full py-3 text-lg mt-4">
            Start Game
          </Button>
        </form>
      </div>
    </div>
  );
}
