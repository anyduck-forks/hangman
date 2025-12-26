import { Button } from './ui/Button';

export function Keyboard({ onKeyPress, usedKeys = [], showInfoBits = false }) {
  const keys = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="grid grid-cols-7 gap-2 max-w-2xl mx-auto">
      {keys.map((char) => {
        const isUsed = usedKeys.includes(char);
        return (
          <div key={char} className="relative group">
            <Button
              onClick={() => onKeyPress(char)}
              disabled={isUsed}
              className="w-full aspect-square h-auto text-xl font-bold uppercase flex flex-col items-center justify-center"
            >
              {char}
              {showInfoBits && !isUsed && (
                <span className="text-[10px] font-normal mt-1 opacity-70">
                  {/* Placeholder for Info Theory bits */}
                  {(Math.random() * 5).toFixed(1)}b
                </span>
              )}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
