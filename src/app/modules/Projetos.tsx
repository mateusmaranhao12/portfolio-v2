'use client'
import SectionTitle from "@/components/Common/SectionTitle"
import SectionWrapper from "@/components/Common/SectionWrapper"
import ProjetoCard from "@/components/Projetos/ProjetoCard"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme/theme"
import { translations, Lang } from "@/app/translate/tradutor"

type Categoria = 'profissional' | 'academico' | 'pessoal'

type Projeto = {
    nome: string
    video: string
    textoKey: string
    skills?: string[]
    categoria: Categoria
    githubFrontendUrl?: string
    githubBackendUrl?: string
    repoPrivado?: boolean
    backendPrivado?: boolean
    demoUrl?: string
}

const projetos: Projeto[] = [
    {
        nome: 'Saude+',
        video: 'saude+',
        textoKey: 'projeto_saude_mais_texto',
        skills: ['Vue.js', 'TypeScript', 'PHP', 'MySQL', 'Tailwind', 'SCSS', 'Git'],
        categoria: 'academico',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/tcc_unit_frontend',
        backendPrivado: true
    },

    /*{
        nome: 'Lions Bertha Lutz',
        video: 'lions',
        texto: 'Um site desenvolvido em React e Next.js para a Lions Bertha Lutz em Aracaju, um projeto feito em grupo como nosso estágio supervisionado da Universidade Tiradentes. Um site que mostra a história da Lions, as causas (tais como esforços humanitários, juventude, socorro em catástrofes, etc.), e onde permite que o usuário seja um voluntário e possa fazer doações para a empresa.',
        skills: ['React.js', 'TypeScript', 'Next.js', 'Tailwind', 'Git'],
        categoria: 'Acadêmico',
        repoPrivado: true
    }, */

    {
        nome: 'Spotify Clone',
        video: 'spotify_clone',
        textoKey: 'projeto_spotify_clone_texto',
        skills: ['Vue.js', 'TypeScript', 'PHP', 'MySQL', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/spotify_clone',
    },

    {
        nome: 'GitHub Profile',
        video: 'github_profile',
        textoKey: 'projeto_github_profile_texto',
        skills: ['React.js', 'TypeScript', 'SCSS', 'Git', 'Next.js'],
        categoria: 'pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/github-remote'

    },

    {
        nome: 'Projeto Ecommerce',
        video: 'projeto_ecommerce',
        textoKey: 'projeto_ecommerce_texto',
        skills: ['React.js', 'TypeScript', 'SCSS', 'Git'],
        categoria: 'pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/project-ecommerce'
    },

    {
        nome: 'Bioohub',
        video: 'bioohub',
        textoKey: 'projeto_bioohub_texto',
        skills: ['Vue.js', 'TypeScript', 'Bootstrap', 'SCSS', 'PHP', 'MySQL', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/bioohub_frontend',
        backendPrivado: true
    },

    {
        nome: 'Inova Option',
        video: 'inova-option',
        textoKey: 'projeto_inova_option_texto',
        skills: ['Vue.js', 'TypeScript', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/inovaoption',
        demoUrl: 'https://inovaoption.vercel.app/'
    },

    {
        nome: 'Maragogi',
        video: 'maragogi',
        textoKey: 'projeto_maragogi_texto',
        skills: ['Vue.js', 'JavaScript', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/maragogi_vue'
    },

    {
        nome: 'Pluug-ai Sistema',
        video: 'pluug_ai_sistema',
        textoKey: 'projeto_pluug_ai_texto',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/pluug.ai_v2',
        demoUrl: 'https://pluug-ai-v2.vercel.app/'
    },

    {
        nome: 'Turbo Digital',
        video: 'turbo_digital',
        textoKey: 'projeto_turbo_digital_texto',
        skills: ['React.js', 'TypeScript', 'Next.js', 'Tailwind', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/turbo_digital',
        demoUrl: 'https://ruizmidias.com.br/mentoria-turbo-digital/'
    },


    {
        nome: 'Itália Tour',
        video: 'italia_tour',
        textoKey: 'projeto_italia_tour_texto',
        skills: ['Vue.js', 'TypeScript', 'NodeJS', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/italia_tour'
    },

    {
        nome: 'Umuarama',
        video: 'umuarama',
        textoKey: 'projeto_umuarama_texto',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/umuarama',
        demoUrl: 'https://umuarama.vercel.app/'
    },

    {
        nome: 'Eder Notícias',
        video: 'eder_noticias',
        textoKey: 'projeto_eder_noticias_texto',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/eder-luiz-noticias',
        demoUrl: 'https://eder-luiz-noticias.vercel.app/'
    },

    {
        nome: 'Notifish',
        video: 'notifish',
        textoKey: 'projeto_notifish_texto',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/notifish',
        demoUrl: 'https://notifish.vercel.app/'
    },

    {
        nome: 'Atmos Powered',
        video: 'atmos',
        textoKey: 'projeto_atmos_texto',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/atmos',
        demoUrl: 'https://atmos-rosy.vercel.app/'
    }

]

const grupos = projetos.reduce<Record<Categoria, Projeto[]>>(
    (acc, p) => {
        (acc[p.categoria] ||= []).push(p)
        return acc
    },
    { profissional: [], academico: [], pessoal: [] }
)

const ordem: Categoria[] = ['profissional', 'academico', 'pessoal']

export default function Projetos({ lang }: { lang?: Lang }) {
    const { isDark } = useTheme();
    const currentLang = lang ?? "pt";
    const t = translations[currentLang as Lang] as any;
    return (
        <SectionWrapper id="projetos">
            <div className="w-full min-h-screen">
                <SectionTitle>{t.projetos_titulo}</SectionTitle>

                <div className="mt-6 space-y-12">
                    {ordem.map((cat) => {
                        const lista = grupos[cat]
                        if (!lista.length) return null

                        return (
                            <section key={cat}>
                                <motion.h3
                                    className={`text-lg md:text-xl font-semibold mb-2 ${isDark ? "text-purple-300" : "text-slate-700"}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                >
                                    {cat === 'profissional' && t.projetos_categoria_profissional}
                                    {cat === 'academico' && t.projetos_categoria_academico}
                                    {cat === 'pessoal' && t.projetos_categoria_pessoal}
                                </motion.h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                                    {lista.map((projeto, index) => (
                                        <ProjetoCard
                                            key={`${cat}-${index}-${projeto.nome}`}
                                            nome={projeto.nome}
                                            video={projeto.video}
                                            texto={t[projeto.textoKey]}
                                            lang={currentLang}
                                            skills={projeto.skills}
                                            githubFrontendUrl={projeto.githubFrontendUrl}
                                            githubBackendUrl={projeto.githubBackendUrl}
                                            repoPrivado={projeto.repoPrivado}
                                            backendPrivado={projeto.backendPrivado}
                                            demoUrl={projeto.demoUrl}
                                        />
                                    ))}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
        </SectionWrapper>
    )
}