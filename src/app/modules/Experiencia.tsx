"use client";
import SectionWrapper from "@/components/Common/SectionWrapper";
import SectionTitle from "@/components/Common/SectionTitle";
import ExperienciaItem from "@/components/Experiencia/ExperienciaItem";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/theme";
import { translations, Lang } from "@/app/translate/tradutor";

export default function Experiencia({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;
  const experiencias = [
    {
      cargo: `${t.experiencia_cargo_1}`,
      empresa: `${t.experiencia_empresa_1}`,
      periodo: `${t.experiencia_periodo_1}`,
      descricao: `${t.experiencia_descricao_1}`,
    },
    {
      cargo: `${t.experiencia_cargo_2}`,
      empresa: `${t.experiencia_empresa_2}`,
      periodo: `${t.experiencia_periodo_2}`,
      descricao: `${t.experiencia_descricao_2}`,
    },
    {
      cargo: `${t.experiencia_cargo_3}`,
      empresa: `${t.experiencia_empresa_3}`,
      periodo: `${t.experiencia_periodo_3}`,
      descricao: `${t.experiencia_descricao_3}`,
    },
  ];

  return (
    <SectionWrapper
      id="experiencia"
      className={isDark ? "dark-bg-body-2" : "light-bg-body-2"}
    >
      <div className="w-full">
        <SectionTitle>{t.experiencia_titulo}</SectionTitle>
        <motion.div
          className="flex flex-col gap-8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {experiencias.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <ExperienciaItem
                cargo={exp.cargo}
                empresa={exp.empresa}
                periodo={exp.periodo}
                descricao={exp.descricao}
                isDark={isDark ?? false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
