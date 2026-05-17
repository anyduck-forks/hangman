export function Slider({
  id,
  label,
  valueDisplay,
  color = "blue",
  className = "",
  ref,
  ...props
}) {
  const colorMap = {
    blue: { text: "text-blue-400", accent: "accent-blue-500" },
    purple: { text: "text-purple-400", accent: "accent-purple-500" },
  };
  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between">
        <label htmlFor={id} className="text-sm text-gray-300">
          {label}
        </label>
        <span className={`text-sm font-mono ${colors.text}`}>
          {valueDisplay}
        </span>
      </div>
      <input
        ref={ref}
        type="range"
        id={id}
        className={`w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer ${colors.accent}`}
        {...props}
      />
    </div>
  );
}
