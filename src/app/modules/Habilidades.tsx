import SectionWrapper from '@/components/Common/SectionWrapper'
import SectionTitle from '@/components/Common/SectionTitle'

import {
    FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaReact,
    FaSass, FaBootstrap, FaPhp, FaGitAlt, FaGithub,
    FaNodeJs
} from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsFill } from 'react-icons/ri'

const habilidades = [
    { nome: 'HTML5', icon: <FaHtml5 size={40} color="#e34c26" /> },
    { nome: 'CSS3', icon: <FaCss3Alt size={40} color="#264de4" /> },
    { nome: 'JavaScript', icon: <FaJs size={40} color="#f7df1e" /> },
    { nome: 'TypeScript', icon: <SiTypescript size={40} color="#3178c6" /> },
    { nome: 'VueJS', icon: <FaVuejs size={40} color="#41b883" /> },
    { nome: 'ReactJS', icon: <FaReact size={40} color="#61dafb" /> },
    { nome: 'NextJS', icon: <RiNextjsFill size={40} color="#ffffff" /> },
    { nome: 'NextJS', icon: <FaNodeJs size={40} color="#339933" /> },
    { nome: 'SCSS', icon: <FaSass size={40} color="#cc6699" /> },
    { nome: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952b3" /> },
    { nome: 'PHP', icon: <FaPhp size={40} color="#8892BF" /> },
    { nome: 'MySQL', icon: <GrMysql size={40} color="#00758f" /> },
    { nome: 'Git', icon: <FaGitAlt size={40} color="#f05032" /> },
    { nome: 'GitHub', icon: <FaGithub size={40} color="#ffffff" /> },
];

export default function Habilidades() {
    return (
        <SectionWrapper id="habilidades">
            <div className="w-full">
                <SectionTitle>Habilidades</SectionTitle>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
                    {habilidades.map((item, index) => (
                        <div key={index} className="
                            flex flex-col items-center text-center 
                            bg-purple-800/10 backdrop-blur-sm rounded-xl p-4
                            transition-transform duration-300 group hover:scale-105 
                            shadow-[0_0_10px_#ffffff22]
                        ">
                            <div className="mb-2 group-hover:brightness-110">{item.icon}</div>
                            <span className="text-white mt-1 font-medium">{item.nome}</span>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
