export default function Button({ children, type = "button", variant = "primary", onClick, className = "" }) {
  const base = "w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outlined: "border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}