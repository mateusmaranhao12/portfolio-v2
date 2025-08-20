'use client'
import { motion } from "framer-motion";

export default function Idiomas() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.5 }}>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Idiomas</h3>
            <ul className="list-disc list-inside">
                <li>Português (Nativo)</li>
                <li>Inglês (Intermediário - Leitura técnica)</li>
                <li>Espanhol (Básico)</li>
            </ul>
        </motion.div>
    )
}