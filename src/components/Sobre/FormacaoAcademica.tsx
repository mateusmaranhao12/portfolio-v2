"use client";
import { motion } from "framer-motion";
import FormacaoCard from "./FormacaoCard";
import { useTheme } from "../theme/theme";
import { translations, Lang } from "@/app/translate/tradutor";

export default function FormacaoAcademica({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;
  const formacoesAcademicas = [
    {
      curso: `${t.formacao_curso_1}`,
      universidade: `${t.formacao_universidade_1}`,
      formacao: `${t.formacao_formacao_1}`,
      data: `${t.formacao_data_1}`,
      local: `${t.formacao_local_1}`,
    },
    {
      curso: `${t.formacao_curso_2}`,
      universidade: `${t.formacao_universidade_2}`,
      formacao: `${t.formacao_formacao_2}`,
      data: `${t.formacao_data_2}`,
      local: `${t.formacao_local_2}`,
    },
  ];
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
        {t.formacao_titulo}
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
