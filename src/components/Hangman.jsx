export function Hangman({ lives }) {
  const parts = [
    // Base
    <line
      key="base"
      x1="10"
      y1="250"
      x2="150"
      y2="250"
      stroke="white"
      strokeWidth="4"
    />,
    <line
      key="pole"
      x1="80"
      y1="250"
      x2="80"
      y2="20"
      stroke="white"
      strokeWidth="4"
    />,
    <line
      key="top"
      x1="80"
      y1="20"
      x2="200"
      y2="20"
      stroke="white"
      strokeWidth="4"
    />,
    <line
      key="rope"
      x1="200"
      y1="20"
      x2="200"
      y2="50"
      stroke="white"
      strokeWidth="4"
    />,
    // Head
    <circle
      key="head"
      cx="200"
      cy="80"
      r="30"
      stroke="white"
      strokeWidth="4"
      fill="transparent"
    />,
    // Body
    <line
      key="body"
      x1="200"
      y1="110"
      x2="200"
      y2="170"
      stroke="white"
      strokeWidth="4"
    />,
    // Arms
    <line
      key="l-arm"
      x1="200"
      y1="130"
      x2="170"
      y2="160"
      stroke="white"
      strokeWidth="4"
    />,
    <line
      key="r-arm"
      x1="200"
      y1="130"
      x2="230"
      y2="160"
      stroke="white"
      strokeWidth="4"
    />,
    // Legs
    <line
      key="l-leg"
      x1="200"
      y1="170"
      x2="170"
      y2="220"
      stroke="white"
      strokeWidth="4"
    />,
    <line
      key="r-leg"
      x1="200"
      y1="170"
      x2="230"
      y2="220"
      stroke="white"
      strokeWidth="4"
    />,
  ];

  // Simple logic to show parts based on lives remaining
  const visibleParts = parts.slice(0, Math.max(0, parts.length - lives));

  return (
    <div className="flex justify-center mb-8">
      <svg height="260" width="280" className="stroke-current text-gray-200">
        {visibleParts}
      </svg>
    </div>
  );
}
