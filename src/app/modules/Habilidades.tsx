import SectionWrapper from '@/components/Common/SectionWrapper'
import SectionTitle from '@/components/Common/SectionTitle'

import {
    FaHtml5, FaCss3Alt, FaJs, FaVuejs, FaReact,
    FaSass, FaBootstrap, FaPhp, FaGitAlt, FaGithub,
    FaNodeJs
} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsFill } from 'react-icons/ri'
import HabilidadeCard from '@/components/Habilidades/HabilidadeCard'

const habilidades = {
    'Front-end': [
        { nome: 'HTML5', icon: <FaHtml5 size={40} color="#e34c26" /> },
        { nome: 'CSS3', icon: <FaCss3Alt size={40} color="#264de4" /> },
        { nome: 'JavaScript', icon: <FaJs size={40} color="#f7df1e" /> },
        { nome: 'TypeScript', icon: <SiTypescript size={40} color="#3178c6" /> },
        { nome: 'VueJS', icon: <FaVuejs size={40} color="#41b883" /> },
        { nome: 'ReactJS', icon: <FaReact size={40} color="#61dafb" /> },
        { nome: 'NextJS', icon: <RiNextjsFill size={40} color="#ffffff" /> },
        { nome: 'SCSS', icon: <FaSass size={40} color="#cc6699" /> },
        { nome: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952b3" /> },
        { nome: 'Tailwind', icon: <SiTailwindcss size={40} color="#008cffff" /> },
    ],

    'Back-end': [
        { nome: 'PHP', icon: <FaPhp size={40} color="#8892BF" /> },
        { nome: 'NodeJS', icon: <FaNodeJs size={40} color="#339933" /> },
    ],

    'Banco de dados': [
        { nome: 'MySQL', icon: <GrMysql size={40} color="#00758f" /> },
    ],

    'Ferramentas': [
        { nome: 'Git', icon: <FaGitAlt size={40} color="#f05032" /> },
        { nome: 'GitHub', icon: <FaGithub size={40} color="#ffffff" /> },
    ]
};

export default function Habilidades() {
    return (
        <SectionWrapper id="habilidades">
            <div className="w-full">
                <SectionTitle>Habilidades</SectionTitle>

                {Object.entries(habilidades).map(([categoria, lista]) => (
                    <div key={categoria} className="mb-10">
                        <h3 className="text-lg font-semibold text-purple-400 mb-4 mt-4">{categoria}</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {lista.map((item, index) => (
                                <HabilidadeCard
                                    key={index}
                                    nome={item.nome}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>

    );
}
