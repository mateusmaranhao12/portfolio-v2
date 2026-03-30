"use client";
import SectionWrapper from "@/components/Common/SectionWrapper";
import SectionTitle from "@/components/Common/SectionTitle";
import HabilidadeCard from "@/components/Habilidades/HabilidadeCard";
import { getSkillsByCategory } from "@/components/Common/Skills";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/theme";
import { Lang, translations } from "../translate/tradutor";

export default function Habilidades({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;

  return (
    <SectionWrapper id="habilidades">
      <div className="w-full">
        <SectionTitle>{t.habilidades_titulo}</SectionTitle>

        {Object.entries(getSkillsByCategory(isDark ?? false, currentLang)).map(
          ([categoria, lista]) => (
            <div key={categoria} className="mb-10">
              <motion.h3
                className={`text-lg font-semibold mb-4 mt-4 ${isDark ? "dark-skill-category" : "light-skill-category"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                {categoria}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-5 xl:gap-6">
                {lista.map((item, index) => (
                  <HabilidadeCard
                    key={index}
                    nome={item.nome}
                    icon={item.icon}
                    isDark={isDark ?? false}
                  />
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </SectionWrapper>
  );
}
