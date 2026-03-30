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
      ? "dark-button-default"
      : "light-button-default",
    black: isDark
      ? "dark-button-black"
      : "light-button-black",
    disabled: isDark
      ? "dark-button-disabled"
      : "light-button-disabled",
    demo: isDark
      ? "dark-button-demo"
      : "light-button-demo",
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
