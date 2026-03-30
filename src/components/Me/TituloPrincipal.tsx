"use client";

import { Lang, translations } from "@/app/translate/tradutor";
import RevealText from "../Common/RevealText";
import { useTheme } from "../theme/theme";

type Props = { lang?: Lang };

export default function TituloPrincipal({ lang }: Props) {
  const { isDark } = useTheme();

  return <TranslatedTitle lang={lang} isDark={isDark} />;
}

function TranslatedTitle({
  lang,
  isDark,
}: {
  lang?: Lang;
  isDark: boolean | null;
}) {
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;

  // decide qual parte do título deve ser destacada com base na tradução
  const highlight = t.title_highlight as "first" | "second";

  return (
    <h1 key={currentLang} className="text-4xl font-bold mb-5">
      {highlight === "first" ? (
        <>
          <span
            className={
              isDark ? "dark-text-titulo-me-dark" : "light-text-titulo-me-light"
            }
          >
            <RevealText text={t.title_part1} perChar={0.03} delay={0.6} />{" "}
          </span>
          <RevealText text={t.title_part2} perChar={0.03} delay={0.8} />{" "}
        </>
      ) : (
        <>
          <RevealText text={t.title_part1} perChar={0.03} delay={0.6} />{" "}
          <span
            className={
              isDark ? "dark-text-titulo-me-dark" : "light-text-titulo-me-light"
            }
          >
            <RevealText text={t.title_part2} perChar={0.03} delay={0.8} />{" "}
          </span>
        </>
      )}
    </h1>
  );
}
