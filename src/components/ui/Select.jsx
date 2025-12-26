export function Select({ id, label, children, className = "", ...props }) {
  return (
    <div className="space-y-2">
      {label && <label htmlFor={id} className="block text-lg">{label}</label>}
      <select 
        id={id}
        className={`w-full p-2 bg-gray-700 border border-gray-600 rounded text-white ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
