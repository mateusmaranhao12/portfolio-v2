'use client'
import { motion } from "framer-motion";
import IdiomaCard from "../Common/IdiomaCard";

const idiomas = [
    { idioma: 'Português', nivel: 'Nativo', detalhe: '' },
    { idioma: 'Inglês', nivel: 'Intermediário', detalhe: 'Leitura técnica' },
    { idioma: 'Espanhol', nivel: 'Básico', detalhe: '' },
];

export default function Idiomas() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.5 }}
        >
            <h3 className="text-xl font-semibold border-l-4 pl-4 border-yellow-500 text-white mb-2">
                Idiomas
            </h3>
            <ul className="pl-4">
                {idiomas.map((item, idx) => (
                    <IdiomaCard key={idx} idioma={item.idioma} nivel={item.nivel} detalhe={item.detalhe} />
                ))}
            </ul>
        </motion.div>
    )
}