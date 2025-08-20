import {
    FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaReact,
    FaSass, FaBootstrap, FaPhp, FaGitAlt, FaGithub,
    FaNodeJs
} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsFill } from 'react-icons/ri'
import { ReactElement } from 'react'

export type Skill = { nome: string; icon: ReactElement }

export const frontEndSkills: Skill[] = [
    { nome: 'HTML5', icon: <FaHtml5 size={40} color='#e34c26' /> },
    { nome: 'CSS3', icon: <FaCss3Alt size={40} color='#264de4' /> },
    { nome: 'JavaScript', icon: <FaJs size={40} color='#f7df1e' /> },
    { nome: 'TypeScript', icon: <SiTypescript size={40} color='#3178c6' /> },
    { nome: 'VueJS', icon: <FaVuejs size={40} color='#41b883' /> },
    { nome: 'ReactJS', icon: <FaReact size={40} color='#61dafb' /> },
    { nome: 'NextJS', icon: <RiNextjsFill size={40} color='#ffffff' /> },
    { nome: 'SCSS', icon: <FaSass size={40} color='#cc6699' /> },
    { nome: 'Bootstrap', icon: <FaBootstrap size={40} color='#7952b3' /> },
    { nome: 'Tailwind', icon: <SiTailwindcss size={40} color='#008cffff' /> },
]

export const backEndSkills: Skill[] = [
    { nome: 'PHP', icon: <FaPhp size={40} color='#8892BF' /> },
    { nome: 'NodeJS', icon: <FaNodeJs size={40} color='#339933' /> },
]

export const dbSkills: Skill[] = [
  { nome: 'MySQL', icon: <GrMysql size={40} color='#00758f' /> },
]

export const toolsSkills: Skill[] = [
  { nome: 'Git', icon: <FaGitAlt size={40} color='#f05032' /> },
  { nome: 'GitHub', icon: <FaGithub size={40} color='#ffffff' /> },
]

export const skillsByCategory: Record<string, Skill[]> = {
  'Front-end': frontEndSkills,
  'Back-end': backEndSkills,
  'Banco de dados': dbSkills,
  'Ferramentas': toolsSkills,
}

export const allSkills: Skill[] = [
  ...frontEndSkills,
  ...backEndSkills,
  ...dbSkills,
  ...toolsSkills,
]