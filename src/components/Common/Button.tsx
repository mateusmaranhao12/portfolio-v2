import { ReactNode } from "react";

type ButtonProps = {
  label: string;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "black" | "demo";
  isDark?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
};

export function Button({
  label,
  href,
  icon,
  disabled,
  variant = "black",
  isDark = false,
  type = "button",
  size = "md",
}: ButtonProps) {
  const base = "rounded-lg flex items-center justify-center transition cursor-pointer select-none";

  const sizes = {
    sm: "px-2.5 py-1.5 text-xs font-bold gap-1.5",
    md: "px-3 py-2 text-xs md:text-sm font-bold gap-2",
    lg: "px-5 py-3 text-sm md:text-base font-bold gap-2.5",
  };

  const variants = {
    default: isDark
      ? "bg-yellow-500 text-black hover:bg-yellow-400 border border-yellow-500"
      : "bg-purple-500 text-white hover:bg-purple-400 border border-purple-500",
    black: isDark
      ? "text-white bg-black hover:bg-white/10"
      : "text-black bg-gray-200 hover:bg-black/10",
    disabled: isDark
      ? "border border-white/15 text-white/60 cursor-text bg-transparent"
      : "border border-black/15 text-black/60 cursor-text bg-transparent",
    demo: isDark
      ? "border border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-black"
      : "border border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-600 hover:text-black",
  };

  const classes = disabled ? variants.disabled : variants[variant];
  const sizeClasses = sizes[size];

  if (disabled) {
    return (
      <span className={`${base} ${sizeClasses} ${classes}`} aria-disabled>
        {icon}
        {label}
      </span>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${sizeClasses} ${classes}`}
      >
        {icon}
        {label}
      </a>
    );
  }

  return (
    <button type={type} className={`${base} ${sizeClasses} ${classes}`}>
      {icon}
      {label}
    </button>
  );
}
