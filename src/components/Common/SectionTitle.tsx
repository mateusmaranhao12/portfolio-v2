'use client'
import { motion } from "framer-motion"

type Props = {
    children: React.ReactNode
}

export default function SectionTitle({ children }: Props) {
    return (
        <motion.h2
            className="text-4xl font-bold text-yellow-300 border-b-2 border-yellow-300 inline-block"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
        >
            {children}
        </motion.h2>
    )
}