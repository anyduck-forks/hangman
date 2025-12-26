export default function WordProgress({ word = "", guessedLetters = [] }) {
  const displayWord = word
    .split("")
    .map((char) => (guessedLetters.includes(char) ? char : "_"))
    .join(" ");

  return (
    <div className="text-4xl font-mono tracking-widest text-center my-8 text-white">
      {displayWord}
    </div>
  );
}
