"use client";

import { motion } from "framer-motion";
import { useTheme } from "../theme/theme";

type DescricaoProps = {
  paragrafos: string[];
};

export default function Descricao({ paragrafos }: DescricaoProps) {
  
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {paragrafos.map((texto, index) => {
        const processed = texto.replace(/text-yellow-500/g, isDark ? 'dark-highlight-descricao-me-dark' : 'light-highlight-descricao-me-light');
        return (
          <motion.p
            key={index}
            className={`text-lg leading-relaxed ${isDark ? 'dark-descricao-me-dark' : 'light-descricao-me-light'}`}
            dangerouslySetInnerHTML={{ __html: processed }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
          />
        );
      })}
    </div>
  );
}
