'use client'

import RevealText from "../Common/RevealText"

export default function TituloPrincipal() {
    return (
        <h1 className="text-4xl font-bold mb-5">
            <RevealText text="Full-Stack" perChar={0.03} delay={0.6} />{" "}
            <span className="text-yellow-500">
                <RevealText text="Developer" perChar={0.03} delay={0.8} />{" "}
            </span>
        </h1>
    )
}