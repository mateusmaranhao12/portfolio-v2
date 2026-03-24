import { ReactNode } from "react";

type ButtonProps = {
  label: string;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "black" | "demo";
  isDark?: boolean;
};

export function Button({
  label,
  href,
  icon,
  disabled,
  variant = "black",
  isDark = false,
}: ButtonProps) {
  const base =
    "px-3 py-2 rounded-lg text-xs md:text-sm flex items-center gap-2 transition";

  const variants = {
    default:
      "bg-yellow-400 text-black hover:bg-yellow-500 border border-yellow-400",
    black: isDark
      ? "text-white bg-black hover:bg-white/10"
      : "text-black bg-gray-200 hover:bg-black/10",
    disabled: isDark
      ? "border border-white/15 text-white/60 cursor-not-allowed bg-transparent"
      : "border border-black/15 text-black/60 cursor-not-allowed bg-transparent",
    demo: isDark
      ? "border border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-black"
      : "border border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-600 hover:text-black",
  };

  const classes = disabled ? variants.disabled : variants[variant];

  if (disabled) {
    return (
      <span className={`${base} ${classes}`} aria-disabled>
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${classes}`}
    >
      {icon}
      {label}
    </a>
  );
}
