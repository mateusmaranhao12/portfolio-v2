//tipagem de tradução e persistência de idioma
export type Lang = "pt" | "en";

//chave para armazenamento local do idioma
const LANG_STORAGE_KEY = "lang";

//opções de idioma disponíveis
export const LANGUAGE_OPTIONS: Lang[] = ["pt", "en"];

//função para obter o idioma inicial, verificando o armazenamento local
export function getInitialLang(): Lang {
  try {
    const value = localStorage.getItem(LANG_STORAGE_KEY);
    return value === "en" ? "en" : "pt";
  } catch {
    return "pt";
  }
}

//função para persistir o idioma selecionado no armazenamento local
export function persistLang(lang: Lang): void {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {}
}

//funções para obter as classes CSS dos componentes de seleção de idioma, adaptando-se ao tema claro ou escuro
export function getLanguageButtonClasses(isDark: boolean | null): string {
  return `text-sm rounded px-2 py-1 flex items-center gap-2 border ${isDark ? "dark-language-button" : "light-language-button"}`;
}

export function getLanguageMenuClasses(isDark: boolean | null): string {
  return `absolute right-0 mt-2 w-20 rounded shadow z-50 border ${isDark ? "dark-language-menu" : "light-language-menu"}`;
}

export function getLanguageOptionClasses(isDark: boolean | null): string {
  return `w-full text-left px-3 py-2 ${isDark ? "dark-language-option" : "light-language-option"}`;
}

//importação das traduções e exportação para uso em outros módulos
import { translations } from "./translations";
export { translations };

