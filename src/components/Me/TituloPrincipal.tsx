'use client'

import RevealText from "../Common/RevealText"
import { useTheme } from "../theme/theme"

export default function TituloPrincipal() {
    const { isDark } = useTheme();

    return (
        <h1 className="text-4xl font-bold mb-5">
            <RevealText text="Full-Stack" perChar={0.03} delay={0.6} />{" "}
            <span className={isDark ? "text-yellow-500" : "text-purple-500"}>
                <RevealText text="Developer" perChar={0.03} delay={0.8} />{" "}
            </span>
        </h1>
    )
}