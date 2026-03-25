import {
  FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaReact,
  FaSass, FaBootstrap, FaPhp, FaGitAlt, FaGithub,
  FaNodeJs
} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsFill } from 'react-icons/ri'
import { ReactElement } from 'react'
import { translations, Lang } from '@/app/translate/tradutor'

export type Skill = { nome: string; icon: ReactElement }

function makeIcon(IconComp: any, size = 40, color = '#6b21a8') {
  return <IconComp size={size} color={color} />;
}

export function getSkillsByCategory(isDark: boolean, lang: Lang = 'pt'): Record<string, Skill[]> {
  const darkColors = {
    html: '#e34c26',
    css: '#264de4',
    js: '#f7df1e',
    ts: '#3178c6',
    vue: '#41b883',
    react: '#61dafb',
    next: '#ffffff',
    scss: '#cc6699',
    bootstrap: '#7952b3',
    tailwind: '#008cffff',
    php: '#8892BF',
    node: '#339933',
    mysql: '#00758f',
    git: '#f05032',
    github: '#ffffff',
  };

  const lightColors: Record<string, string> = {
    html: '#ff2f00',
    css: '#003cff',
    js: '#ffae00',
    ts: '#0083fd',
    vue: '#00a055',
    react: '#00a6ff',
    next: '#111827',
    scss: '#ff3a8f',
    bootstrap: '#4f2d86',
    tailwind: '#00b2f8',
    php: '#7457dd',
    node: '#00ac00',
    mysql: '#036b6b',
    git: '#ff3300',
    github: '#111827',
  };

  const c = (key: keyof typeof darkColors) => (isDark ? darkColors[key] ?? '#ffffff' : lightColors[key] ?? '#6b21a8');

  const frontEndSkills: Skill[] = [
    { nome: 'HTML5', icon: makeIcon(FaHtml5, 40, c('html')) },
    { nome: 'CSS3', icon: makeIcon(FaCss3Alt, 40, c('css')) },
    { nome: 'JavaScript', icon: makeIcon(FaJs, 40, c('js')) },
    { nome: 'TypeScript', icon: makeIcon(SiTypescript, 40, c('ts')) },
    { nome: 'Vue.js', icon: makeIcon(FaVuejs, 40, c('vue')) },
    { nome: 'React.js', icon: makeIcon(FaReact, 40, c('react')) },
    { nome: 'Next.js', icon: makeIcon(RiNextjsFill, 40, c('next')) },
    { nome: 'SCSS', icon: makeIcon(FaSass, 40, c('scss')) },
    { nome: 'Bootstrap', icon: makeIcon(FaBootstrap, 40, c('bootstrap')) },
    { nome: 'Tailwind CSS', icon: makeIcon(SiTailwindcss, 40, c('tailwind')) },
  ];

  const backEndSkills: Skill[] = [
    { nome: 'PHP', icon: makeIcon(FaPhp, 40, c('php')) },
    { nome: 'NodeJS', icon: makeIcon(FaNodeJs, 40, c('node')) },
  ];

  const dbSkills: Skill[] = [
    { nome: 'MySQL', icon: makeIcon(GrMysql, 40, c('mysql')) },
  ];

  const toolsSkills: Skill[] = [
    { nome: 'Git', icon: makeIcon(FaGitAlt, 40, c('git')) },
    { nome: 'GitHub', icon: makeIcon(FaGithub, 40, c('github')) },
  ];

  const dbLabel = (translations[lang] as any).banco_de_dados ?? 'Banco de dados'
  const toolsLabel = (translations[lang] as any).ferramentas ?? 'Ferramentas'

  return {
    'Front-end': frontEndSkills,
    'Back-end': backEndSkills,
    [dbLabel]: dbSkills,
    [toolsLabel]: toolsSkills,
  };
}

export function getAllSkills(isDark: boolean, lang: Lang = 'pt'): Skill[] {
  const byCat = getSkillsByCategory(isDark, lang);
  return [
    ...byCat['Front-end'],
    ...byCat['Back-end'],
    ...byCat[(translations[lang] as any).banco_de_dados ?? 'Banco de dados'],
    ...byCat[(translations[lang] as any).ferramentas ?? 'Ferramentas'],
  ];
}