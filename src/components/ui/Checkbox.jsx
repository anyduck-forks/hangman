export function Checkbox({ id, label, className = "", ref, ...props }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        ref={ref}
        type="checkbox"
        id={id}
        className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500 bg-gray-700 border-gray-600"
        {...props}
      />
    </div>
  );
}
