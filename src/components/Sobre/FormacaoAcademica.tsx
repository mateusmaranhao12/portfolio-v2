'use client'
import { motion } from "framer-motion";

const formacoesAcademicas = [
    'Ciência da Computação - Universidade Tiradentes, Aracaju/SE (2021 - 2025)',
    'Pós-graduação em Arquitetura de Software (2025 - presente)'
]
export default function Objetivos() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.5 }}
        >
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Formação Acadêmica</h3>
            <ul className="list-disc pl-4">
                {formacoesAcademicas.map((formacao, index) => (
                    <li key={index} className="pl-1">{formacao}</li>
                ))}
            </ul>
        </motion.div>
    )
}