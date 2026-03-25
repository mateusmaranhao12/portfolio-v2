"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import SectionWrapper from "@/components/Common/SectionWrapper";
import Descricao from "@/components/Sobre/Descricao";
import FormacaoAcademica from "@/components/Sobre/FormacaoAcademica";
import Idiomas from "@/components/Sobre/Idiomas";
import { useTheme } from "@/components/theme/theme";
import { translations, Lang } from "@/app/translate/tradutor";

export default function Sobre({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;
  const paragrafos = [`${t.sobre_paragrafo_1}`];

  return (
    <SectionWrapper
      id="sobre"
      className={isDark ? "bg-purple-950" : "bg-slate-100"}
    >
      {/* Texto */}
      <div className="w-full space-y-6">
        <SectionTitle>{t.sobre_titulo}</SectionTitle>

        <Descricao paragrafos={paragrafos} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 pb-20">
          <FormacaoAcademica />
          <Idiomas />
          {/* <Objetivos /> */}
        </div>
      </div>
    </SectionWrapper>
  );
}
