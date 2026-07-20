import { cn } from "../../lib/utils";

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primaryHover shadow-glow",

    secondary:
      "bg-card border border-border text-text hover:bg-hover",

    danger:
      "bg-danger text-white hover:opacity-90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyle, variants[variant], className)}
    >
      {children}
    </button>
  );
}

export default Button;