'use client'

import { JSX } from "react"
import { motion } from "framer-motion"

type HabilidadeCardProps = {
    nome: string
    icon: JSX.Element
}

const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

export default function HabilidadeCard({ nome, icon }: HabilidadeCardProps) {
    return (
        <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="
                flex flex-col items-center text-center 
                bg-purple-800/10 backdrop-blur-sm rounded-xl p-4
                transition-transform duration-300 group hover:scale-105 
                shadow-[0_0_10px_#ffffff22]
            "
        >
            <motion.div
                className="mb-2 group-hover:brightness-110"
                variants={item}
                transition={{ duration: 0.4 }}
            >
                {icon}
            </motion.div>

            <motion.span
                className="text-white mt-1 font-medium"
                variants={item}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                {nome}
            </motion.span>
        </motion.div>

    )
}