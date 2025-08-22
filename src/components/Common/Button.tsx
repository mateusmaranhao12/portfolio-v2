import { ReactNode } from "react"

type ButtonProps = {
    label: string
    href?: string
    icon?: ReactNode
    disabled?: boolean
    variant?: "default" | "black"
}

export function Button({
    label,
    href,
    icon,
    disabled,
    variant = "black",
}: ButtonProps) {
    const base =
        "px-3 py-2 rounded-lg text-xs md:text-sm flex items-center gap-2 transition"

    const variants = {
        default: "bg-yellow-400 text-black hover:bg-yellow-500 border border-yellow-400",
        black:
            "text-white bg-black hover:bg-white/10",
        disabled:
            "border border-white/15 text-white/60 cursor-not-allowed bg-transparent",
    }

    const classes = disabled ? variants.disabled : variants[variant]

    if (disabled) {
        return (
            <span className={`${base} ${classes}`} aria-disabled>
                {icon}
                {label}
            </span>
        )
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
    )
}
