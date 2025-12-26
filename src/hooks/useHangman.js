import { useState, useEffect, useCallback, useReducer } from 'react';
import wordsByLength from '../assets/words_by_length.json' with { type: 'json' };

export const ALPHABET = "qwertyuiopasdfghjklzxcvbnm".split("");

/**
 * Represents the state of the Hangman game.
 * @typedef {Object} GameState
 * @property {string} word - The word to be guessed.
 * @property {string[]} guesses - An array of letters that have been guessed so far.
 * @property {number} lives - The current count of incorrect guesses.
 */

export function useHangman({ wordLength, lives, onGameEnd }) {
    /** @type {ReturnType<typeof useState<GameState>>} */
    const [gameState, setGameState] = useState({
        word: getRandomPopularWord(wordLength),
        guesses: [],
        lives,
        startedAt: new Date(),
    });

    /** @type {ReturnType<typeof useState<ReturnType<typeof calculate>>>} */
    const [analysis, setAnalysis] = useState(null);

    const wordProgress = gameState.word.split('').map(letter =>
        gameState.guesses.includes(letter) ? letter : null
    );


    useEffect(() => {
        setAnalysis(calculate({ wordProgress, guessedLetters: gameState.guesses }));
    }, [wordProgress, gameState.guesses]);


    const guessLetter = useCallback((letter) => {
        if (gameState.guesses.includes(letter))
            return;

        const newGuessed = [...gameState.guesses, letter];
        const isCorrect = gameState.word.includes(letter);
        const newLives = isCorrect ? gameState.lives : gameState.lives - 1;

        setGameState(prev => ({
            ...prev,
            guesses: newGuessed,
            lives: newLives,
        }));

        const isWon = gameState.word.split('').every(l => newGuessed.includes(l));
        const isLost = newLives === 0;

        if (isWon || isLost) {
            onGameEnd({ gameState, isWon });
        }
    }, [gameState, isGameOver, onGameEnd]);

    return {
        gameState,
        analysis,
        guessLetter,
        wordProgress
    };
}


function getRandomPopularWord(wordLength, top = 1000) {
    const words = wordsByLength[wordLength];
    const index = Math.floor(Math.random() * Math.min(top, words.length));

    return Object.keys(words)[index];
}

/**
 * Calculates information theory metrics for a Hangman game state, including candidate words,
 * their probabilities, and the entropy of unguessed letters.
 *
 * @returns {{
 *   candidatesBest: { word: string, probability: number }[],
 *   entropies: number[],
 *   candidatesLength: number
 * }}
 */
function calculate({ wordProgress, guessedLetters }) {
    const pattern = new RegExp(
        '^' + wordProgress.map(letter => letter ?? `[^${guessedLetters.join('')}]`).join('') + '$'
    );

    const wordsToCheck = Object.entries(wordsByLength[wordProgress.length]) || [];
    const candidates = wordsToCheck.filter(([word, _]) => pattern.test(word));

    const frequencyTotal = candidates.reduce((sum, [_, freq]) => sum + freq, 0);

    const entropies = ALPHABET.map(letter => {
        // Group candidates by the pattern they would produce if we guessed this letter
        const outcomes = new Map();
        for (const [word, freq] of candidates) {
            let mask = Array.from(word, char => char === letter ? '1' : '0').join('');
            outcomes.set(mask, (outcomes.get(mask) ?? 0) + freq);
        }

        let entropy = 0;
        for (const frequency of outcomes.values()) {
            const p = frequency / frequencyTotal;
            entropy -= p * Math.log2(p);
        }
        return entropy;
    })

    const candidatesBest = candidates.slice(0, 100).map(([word, freq]) => ({
        word, probability: (freq / frequencyTotal)
    }));

    return { candidatesBest, entropies, candidatesLength: candidates.length };
}

