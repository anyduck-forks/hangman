import React from "react";
/**
 * @param {string[]} keys
 * @param {(key: string) => void} cb
 */
export function useKeyPress(keys, cb) {
  const onKeyPress = React.useEffectEvent(cb);

  React.useEffect(() => {
    /** @param {KeyboardEvent} event */
    const handler = (event) => {
      if (keys.includes(event.key)) {
        onKeyPress(event.key);
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [keys]);
}
