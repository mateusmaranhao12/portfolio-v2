'use client'
import { motion } from "framer-motion";

const objetivos = [
    'Atuar como Desenvolvedor Web Full-Stack',
    'Contribuir em projetos como Desenvolvedor Front-end, utilizando tecnologias modernas'
]
export default function Objetivos() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.5 }}
        >
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Objetivos</h3>
            <ul className="list-disc list-inside">
                {objetivos.map((objetivo, index) => (
                    <li key={index}>{objetivo}</li>
                ))}
            </ul>
        </motion.div>
    )
}