export default function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  fullWidth = true,
  className = "",
}) {
  const base =
    "rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const sizing = fullWidth ? "w-full px-4 py-2.5" : "";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outlined: "border border-primary text-primary hover:bg-primary/10",
    danger: "border border-red-500 text-red-500 hover:bg-red-50",
    link: "text-primary hover:underline",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizing} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}