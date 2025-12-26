import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const STORAGE_KEY = 'hangman_game_history';

export function useGameHistory() {
  const [history, setHistory] = useLocalStorage(STORAGE_KEY, []);

  const saveGameResult = useCallback((result) => {
    setHistory((prevHistory) => {
      return [...prevHistory, { ...result, timestamp: Date.now() }];
    });
  }, [setHistory]);

  const getDistribution = useCallback((wordLength = null, currentGuesses = null, currentIsWon = null) => {
    const distribution = {};
    
    history.forEach(game => {
      // Filter by word length if specified
      const gameWordLength = game.word ? game.word.length : (game.gameState?.word?.length || 0);
      if (wordLength && gameWordLength !== wordLength) {
          return;
      }

      let count;
      if (game.missedGuesses !== undefined) {
        count = game.missedGuesses;
      } else if (game.gameState && game.gameState.word && game.gameState.guesses) {
         count = game.gameState.guesses.filter(l => !game.gameState.word.includes(l)).length;
      } else {
         count = game.guessesCount; // Fallback
      }

      if (game.isWon) {
        distribution[count] = (distribution[count] || 0) + 1;
      } else {
        distribution['X'] = (distribution['X'] || 0) + 1;
      }
    });

    // Calculate bars
    const numericKeys = Object.keys(distribution).filter(k => k !== 'X').map(Number);
    const maxKey = Math.max(6, ...numericKeys, (currentIsWon && typeof currentGuesses === 'number') ? currentGuesses : 0);
    const bars = [];
    
    const maxFreq = Math.max(1, ...Object.values(distribution));

    for (let i = 0; i <= maxKey; i++) {
      const count = distribution[i] || 0;
      const percentage = maxFreq > 0 ? Math.round((count / maxFreq) * 100) : 0;
      bars.push({ label: i.toString(), height: `${percentage}%`, count });
    }

    if (distribution['X'] !== undefined || (currentIsWon === false)) {
        const count = distribution['X'] || 0;
        const percentage = maxFreq > 0 ? Math.round((count / maxFreq) * 100) : 0;
        bars.push({ label: 'X', height: `${percentage}%`, count, isFail: true });
    }

    return bars;
  }, [history]);

  return {
    history,
    saveGameResult,
    getDistribution
  };
}
