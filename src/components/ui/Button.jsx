export function Button({ className, ...props }) {
  return (
    <button
      className={`text-main-foreground bg-main border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-shadow disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
