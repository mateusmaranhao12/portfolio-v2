"use client";
import { motion } from "framer-motion";
import FormacaoCard from "./FormacaoCard";
import { useTheme } from "../theme/theme";

const formacoesAcademicas = [
  {
    curso: "Ciência da Computação",
    universidade: "Universidade Tiradentes",
    formacao: "Bacharelado",
    data: "2021.1 - 2025.1",
    local: "Aracaju - SE",
  },
  {
    curso: "Arquitetura de Software",
    universidade: "Facuminas",
    formacao: "Pós-graduação",
    data: "2025.2 - 2026.1",
    local: "Remoto",
  },
];
export default function FormacaoAcademica() {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.5 }}
    >
      <h3
        className={`text-xl font-semibold border-l-4 pl-4 ${isDark ? "border-yellow-500 text-white" : "border-purple-500 text-black"} mb-2`}
      >
        Formação Acadêmica
      </h3>
      <ul className="pl-4">
        {formacoesAcademicas.map((formacao, index) => (
          <FormacaoCard
            key={index}
            curso={formacao.curso}
            universidade={formacao.universidade}
            data={formacao.data}
            local={formacao.local}
            formacao={formacao.formacao}
            isDark={isDark ?? false}
          />
        ))}
      </ul>
    </motion.div>
  );
}
