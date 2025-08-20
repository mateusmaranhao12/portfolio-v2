'use client'

import { motion, Variants } from 'framer-motion'
import { JSX, memo, useMemo } from 'react'

type RevealTextProps = {
    text: string
    as?: keyof JSX.IntrinsicElements
    className?: string
    perChar?: number
    delay?: number
    once?: boolean
}

const char: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

function RevealTextBase({
    text,
    className,
    perChar = 0.03,
    delay = 0,
    once = true
}: RevealTextProps) {
    const chars = useMemo(() => Array.from(text), [text])

    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: perChar,
                        delayChildren: delay
                    }
                }
            }}
            aria-label={text}
        >
            {chars.map((c, i) => (
                <motion.span key={i} variants={char}>
                    {c === ' ' ? '\u00A0' : c}
                </motion.span>
            ))}
        </motion.span>
    )
}

const RevealText = memo(RevealTextBase)
export default RevealText
