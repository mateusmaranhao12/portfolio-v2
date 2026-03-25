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

    //formacao academica
    formacao_titulo: "Formação Acadêmica",
    formacao_curso_1: "Ciência da Computação",
    formacao_universidade_1: "Universidade Tiradentes",
    formacao_formacao_1: "Bacharelado",
    formacao_data_1: "2021.1 - 2025.1",
    formacao_local_1: "Aracaju - SE",
    formacao_curso_2: "Arquitetura de Software",
    formacao_universidade_2: "Facuminas",
    formacao_formacao_2: "Pós-graduação",
    formacao_data_2: "2025.2 - 2026.1",
    formacao_local_2: "Remoto",

    //idiomas
    idiomas_titulo: "Idiomas",
    idioma_1: "Português",
    idioma_2: "Inglês",
    idioma_3: "Espanhol",
    nivel_nativo: "Nativo",
    nivel_intermediario: "Intermediário",
    nivel_basico: "Básico",
    detalhe_leitura_tecnica: "Leitura técnica",

	//habilidades
	habilidades_titulo: "Habilidades",
	banco_de_dados: "Banco de dados",
	ferramentas: "Ferramentas",

	//Experiência
	experiencia_titulo: "Experiência",
	experiencia_cargo_1: "Desenvolvedor Júnior",
	experiencia_empresa_1: "Líder Mão de Obra LTDA",
	experiencia_periodo_1: "Jan 2026 - Presente",
	experiencia_descricao_1: "Alocado em secretaria da Prefeitura Municipal de Aracaju por meio da Líder Locação de Mão de Obra Ltda, atuo como Desenvolvedor Full-Stack utilizando tecnologias como Vue.js, Tailwind CSS, PHP e MySQL. Uma das minhas atuações inclui na participação do desenvolvimento de um sistema completo de gestão de senhas/tickets para o evento municipal \"Tamo Junto\", incluindo geração de senhas, painéis de atendimento, filas em tempo real e integrações para mais de 80 serviços.",
	experiencia_cargo_2: "Desenvolvedor Free-lancer",
	experiencia_empresa_2: "Workana",
	experiencia_periodo_2: "Ago 2024 - Dez 2025",
	experiencia_descricao_2: "Atuação como desenvolvedor freelancer na plataforma Workana, criei várias landing pages utilizando HTML5, CSS3 e Bootstrap, até sistemas mais complexos e funcionais utilizando VueJS, PHP e MySQL. Também sites modernos e componentizados utilizando ReactJS, NextJS e Tailwind CSS.",
	experiencia_cargo_3: "Estagiário na área de TI",
	experiencia_empresa_3: "Imprensa Oficial de Sergipe",
	experiencia_periodo_3: "Mai 2023 - Mai 2024",
	experiencia_descricao_3: "Realização de atividades relacionadas a área, como Digitalização do Diário Oficial e Binarilização do Acervo. Desenvolvimento de um software para transformar imagens dos diários escaneados em textos, e para poder realizar pesquisas nesses diários através do próprio software.",
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

    //academic background
    formacao_titulo: "Academic Background",
    formacao_curso_1: "Computer Science",
    formacao_universidade_1: "Universidade Tiradentes",
    formacao_formacao_1: "Bachelor's Degree",
    formacao_data_1: "2021.1 - 2025.1",
    formacao_local_1: "Aracaju - SE, Brazil",
    formacao_curso_2: "Software Architecture",
    formacao_universidade_2: "Facuminas",
    formacao_formacao_2: "Postgraduate",
    formacao_data_2: "2025.2 - 2026.1",
    formacao_local_2: "Remote",

    //languages
    idiomas_titulo: "Languages",
    idioma_1: "Portuguese",
    idioma_2: "English",
    idioma_3: "Spanish",
    nivel_nativo: "Native",
    nivel_intermediario: "Intermediate",
    nivel_basico: "Basic",
    detalhe_leitura_tecnica: "Technical reading",

	//skills	
	habilidades_titulo: "Skills",
	banco_de_dados: "Databases",
	ferramentas: "Tools",

	//Experience
	experiencia_titulo: "Experience",
	experiencia_cargo_1: "Junior Developer",
	experiencia_empresa_1: "Líder Mão de Obra LTDA",
	experiencia_periodo_1: "Jan 2026 - Present",
	experiencia_descricao_1: "Allocated in the secretariat of the Aracaju City Hall through Líder Locação de Mão de Obra Ltda, I work as a Full-Stack Developer using technologies such as Vue.js, Tailwind CSS, PHP, and MySQL. One of my roles includes participating in the development of a complete password/ticket management system for the municipal event \"Tamo Junto\", including password generation, service panels, real-time queues, and integrations for over 80 services.",
	experiencia_cargo_2: "Freelance Developer",
	experiencia_empresa_2: "Workana",
	experiencia_periodo_2: "Aug 2024 - Dec 2025",
	experiencia_descricao_2: "As a freelance developer on the Workana platform, I created various landing pages using HTML5, CSS3, and Bootstrap, as well as more complex and functional systems using VueJS, PHP, and MySQL. I also developed modern and componentized websites using ReactJS, NextJS, and Tailwind CSS.",
	experiencia_cargo_3: "IT Intern",
	experiencia_empresa_3: "Imprensa Oficial de Sergipe",
	experiencia_periodo_3: "May 2023 - May 2024",
	experiencia_descricao_3: "Performed activities related to the field, such as digitizing the Official Gazette and binarizing the archive. Developed software to convert scanned images of the gazettes into text, enabling searches within these gazettes through the software itself.",

  },
} as const;
