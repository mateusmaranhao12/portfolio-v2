'use client'
import { motion } from "framer-motion";
import IdiomaCard from "../Common/IdiomaCard";
import { useTheme } from "../theme/theme";
import { translations, Lang } from "@/app/translate/tradutor";

export default function Idiomas({ lang }: { lang?: Lang }) {
    const { isDark } = useTheme();
    const currentLang = lang ?? "pt";
    const t = translations[currentLang as Lang] as any;

    const idiomas = [
        { idioma: `${t.idioma_1}`, nivel: `${t.nivel_nativo}`, detalhe: '' },
        { idioma: `${t.idioma_2}`, nivel: `${t.nivel_intermediario}`, detalhe: `${t.detalhe_leitura_tecnica}` },
        { idioma: `${t.idioma_3}`, nivel: `${t.nivel_basico}`, detalhe: '' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.5 }}
        >
            <h3 className={`text-xl font-semibold border-l-4 pl-4 ${isDark ? "border-yellow-500 text-white" : "border-purple-500 text-black"} mb-2`}>
                {t.idiomas_titulo}
            </h3>
            <ul className="pl-4">
                {idiomas.map((item, idx) => (
                    <IdiomaCard key={idx} idioma={item.idioma} nivel={item.nivel} detalhe={item.detalhe} isDark={isDark ?? false} />
                ))}
            </ul>
        </motion.div>
    )
}