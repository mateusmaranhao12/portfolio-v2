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
  return `text-sm rounded px-2 py-1 flex items-center gap-2 border ${isDark ? "bg-purple-950 text-white border-gray-700" : "bg-white text-gray-800 border-gray-300"}`;
}

export function getLanguageMenuClasses(isDark: boolean | null): string {
  return `absolute right-0 mt-2 w-20 rounded shadow z-50 ${isDark ? "bg-purple-950 text-white border border-gray-700" : "bg-white text-gray-800 border border-gray-200"}`;
}

export function getLanguageOptionClasses(isDark: boolean | null): string {
  return `w-full text-left px-3 py-2 hover:bg-opacity-10 ${isDark ? "hover:bg-white/10" : "hover:bg-gray-100"}`;
}

// traduções compartilhadas da aplicação
export const translations = {
  pt: {
    //navbar
    sobre: "Sobre",
    habilidades: "Habilidades",
    experiencia: "Experiência",
    projetos: "Projetos",
    certificados: "Certificados",
    contato: "Contato",
    download: "Baixar CV",

    // theme labels
    theme_light: "Tema claro",
    theme_dark: "Tema escuro",
    activate_light: "Ativar tema claro",
    activate_dark: "Ativar tema escuro",

    //section me
    me_paragrafo_1:
      "Desenvolvedor de sistemas e sites responsivos e funcionais.",
    me_paragrafo_2:
      "Focado em construir soluções digitais com qualidade, usabilidade e boas práticas.",
    // title
    title_part1: "Desenvolvedor",
    title_part2: "Full-Stack",

    // qual parte destacar: 'first' ou 'second'
    title_highlight: "first",

    //sobre mim
	sobre_titulo: "Sobre mim",
    sobre_paragrafo_1:
      'Olá! Sou <strong class="text-yellow-500">Mateus Nunes Maranhão</strong>, sou <strong class="text-yellow-500">desenvolvedor Full-Stack </strong>, graduado em <strong class="text-yellow-500">Ciência da Computação</strong> pela <strong class="text-yellow-500">Universidade Tiradentes</strong> em Aracaju - SE. Movido por desafios e apaixonado por desenvolvimento web, atuo com tecnologias como React.js, Next.js, Vue.js, Node.js, TypeScript e PHP.',
  },
  en: {
    //navbar
    sobre: "About",
    habilidades: "Skills",
    experiencia: "Experience",
    projetos: "Projects",
    certificados: "Certificates",
    contato: "Contact",
    download: "Download CV",

    // theme labels
    theme_light: "Light theme",
    theme_dark: "Dark theme",
    activate_light: "Activate light theme",
    activate_dark: "Activate dark theme",

    //section me
    me_paragrafo_1:
      "Developer of responsive and functional systems and websites.",
    me_paragrafo_2:
      "Focused on building digital solutions with quality, usability, and best practices.",

    // title
    title_part1: "Full-Stack",
    title_part2: "Developer",

    // which part to highlight: 'first' or 'second'
    title_highlight: "second",

    //about me
	sobre_titulo: "About me",
    sobre_paragrafo_1:
      'Hello! I\'m <strong class="text-yellow-500">Mateus Nunes Maranhão</strong>, I\'m a <strong class="text-yellow-500">Full-Stack Developer </strong>, graduated in <strong class="text-yellow-500">Computer Science</strong> from <strong class="text-yellow-500">Universidade Tiradentes</strong> in Aracaju - SE, in Brazil. Driven by challenges and passionate about web development, I work with technologies like React.js, Next.js, Vue.js, Node.js, TypeScript, and PHP.',
  },
} as const;
