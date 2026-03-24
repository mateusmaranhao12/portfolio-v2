"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

type HabilidadeCardProps = {
  nome: string;
  icon: JSX.Element;
  isDark: boolean;
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function HabilidadeCard({
  nome,
  icon,
  isDark,
}: HabilidadeCardProps) {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className={`
                flex flex-row items-center text-left 
                ${isDark ? "bg-purple-800/10 backdrop-blur-sm rounded-xl p-4 shadow-[0_0_10px_#ffffff22]" : "bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-[0_0_10px_#00000022]"}
                transition-transform duration-300 group hover:scale-105 
            `}
    >
      <motion.div
        className="mr-3 group-hover:brightness-110"
        variants={item}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.div>

      <motion.span
        className={`${isDark ? "text-slate-300" : "text-slate-800"}`}
        variants={item}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {nome}
      </motion.span>
    </motion.div>
  );
}
