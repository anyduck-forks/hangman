export function Button({ className, ...props }) {
  return (
    <button
      className={`text-main-foreground bg-main border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ${className}`}
      {...props}
    />
  );
}
