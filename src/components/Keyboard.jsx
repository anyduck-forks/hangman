import { Button } from './ui/Button';
import { useKeyPress } from '../hooks/useKeyPress';

/**
 * @typedef {Object} KeyboardProps
 * @property {string[]} [keys]
 * @property {number[]?} [entropies]
 * @property {(key: string) => void} onKeyPress - Callback when a key is pressed
 * @property {string[]} [usedKeys] - Array of keys that have been used
 */

/** @param {KeyboardProps} props */
export function Keyboard({ keys, entropies, onKeyPress, usedKeys = [] }) {
    console.assert(!entropies || keys.length === entropies.length, "Entropies must match keys length");
    useKeyPress(keys, key => onKeyPress(key));

    return (
        <div className="grid grid-cols-7 gap-2 max-w-2xl mx-auto">
            {keys.map((letter, index) => {
                return (
                    <div key={letter} className="relative group">
                        <Button
                            onClick={() => onKeyPress(letter)}
                            disabled={usedKeys.includes(letter)}
                            className="w-full aspect-square h-auto text-xl font-bold uppercase flex flex-col items-center justify-center"
                        >
                            {letter}
                            {entropies && (
                                <span className="text-[10px] font-normal mt-1 opacity-70">
                                    {entropies[index].toFixed(1)} bit
                                </span>
                            )}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}
