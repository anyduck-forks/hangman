export function WordProgress({ wordProgress }) {
  const displayWord = wordProgress.map((letter) => letter ?? "_").join(" ");

  return (
    <div className="text-4xl font-mono tracking-widest text-center my-8 text-white">
      {displayWord}
    </div>
  );
}
