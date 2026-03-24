"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/theme";
import {
  getInitialLang,
  getLanguageButtonClasses,
  getLanguageMenuClasses,
  getLanguageOptionClasses,
  Lang,
  LANGUAGE_OPTIONS,
  persistLang,
} from "../../app/translate/tradutor";

export default function LanguageSelect({
  onChange,
}: {
  onChange?: (lang: Lang) => void;
}) {

  //tema selecionado
  const { isDark } = useTheme();

  //estado do idioma selecionado e controle de abertura do menu
  // iniciar com um valor estável para evitar mismatches durante SSR
  const [lang, setLang] = useState<Lang>("pt");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hydrated, setHydrated] = useState(false);

  //ler valor persistido apenas no cliente após montagem e marcar como hidratado
  useEffect(() => {
    try {
      const v = localStorage.getItem("lang");
      if (v === "en" || v === "pt") setLang(v);
    } catch {}
    setHydrated(true);
  }, []);

  //efeito para persistir o idioma selecionado e notificar o componente pai
  //executa apenas depois que o componente estiver hidratado no cliente
  useEffect(() => {
    if (!hydrated) return;
    persistLang(lang);
    onChange?.(lang);
  }, [lang, onChange, hydrated]);

  //efeito para fechar o menu ao clicar fora do componente
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!(e.target instanceof Node)) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  //obtenção das classes CSS para os componentes, adaptando-se ao tema claro ou escuro
  const btnClasses = getLanguageButtonClasses(isDark);
  const menuClasses = getLanguageMenuClasses(isDark);
  const optionClasses = getLanguageOptionClasses(isDark);

  return (
    <div className="relative" ref={ref}>
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className={btnClasses}
        type="button"
      >
        <span className="font-medium">{lang.toUpperCase()}</span>
        <svg
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div role="listbox" className={menuClasses}>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option}
              role="option"
              onClick={() => {
                setLang(option);
                setOpen(false);
              }}
              className={optionClasses}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
