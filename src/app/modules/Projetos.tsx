'use client'
import SectionTitle from "@/components/Common/SectionTitle"
import SectionWrapper from "@/components/Common/SectionWrapper"
import ProjetoCard from "@/components/Projetos/ProjetoCard"
import { motion } from "framer-motion"

type Categoria = 'Profissional' | 'Acadêmico' | 'Pessoal'

type Projeto = {
    nome: string
    video: string
    texto: string
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
        texto: 'O sistema Saude+ foi desenvolvido como parte prática do meu Trabalho de Conclusão de Curso em Ciências da Computação pela Universidade Tiradentes. Feito em Vue.js, Tailwind CSS, TypeScript, PHP e MySQL, o qual permite que pacientes agendem consultas de forma simples e eficiente, oferecendo recursos para médicos e pacientes reagendarem ou desmarcarem atendimentos em poucos segundos.',
        skills: ['Vue.js', 'TypeScript', 'PHP', 'MySQL', 'Tailwind', 'SCSS', 'Git'],
        categoria: 'Acadêmico',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/tcc_unit_frontend',
        backendPrivado: true
    },

    /*{
        nome: 'Lions Bertha Lutz',
        video: 'lions',
        texto: 'Um site desenvolvido em React e NextJS para a Lions Bertha Lutz em Aracaju, um projeto feito em grupo como nosso estágio supervisionado da Universidade Tiradentes. Um site que mostra a história da Lions, as causas (tais como esforços humanitários, juventude, socorro em catástrofes, etc.), e onde permite que o usuário seja um voluntário e possa fazer doações para a empresa.',
        skills: ['React.js', 'TypeScript', 'NextJS', 'Tailwind', 'Git'],
        categoria: 'Acadêmico',
        repoPrivado: true
    }, */

    {
        nome: 'Spotify Clone',
        video: 'spotify_clone',
        texto: 'Projeto pessoal desenvolvido em Vue.js e PHP para praticar autenticação de usuários e gerenciamento de playlists, com foco em CRUD e integração front-end/back-end.',
        skills: ['Vue.js', 'TypeScript', 'PHP', 'MySQL', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/spotify_clone',
    },

    {
        nome: 'GitHub Profile',
        video: 'github_profile',
        texto: 'Um sistema desenvolvido em React.js,TypeScript e SCSS, juntamente com a API do GitHub, o qual permite o usuáriopesquisar o GitHub de usuários, e visualizar alguns de seus projetos já feitos. Projeto feito no curso da udemy de React.js e NextJS.',
        skills: ['React.js', 'TypeScript', 'SCSS', 'Git'],
        categoria: 'Pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/github-remote'

    },

    {
        nome: 'Projeto Ecommerce',
        video: 'projeto_ecommerce',
        texto: 'Um sistema que permite adicionar e remover produtos ao carrinho, como também soma o valor total dos produtos, e podendo assim, realizar a compra.',
        skills: ['React.js', 'TypeScript', 'SCSS', 'Git'],
        categoria: 'Pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/project-ecommerce'
    },

    {
        nome: 'Bioohub',
        video: 'bioohub',
        texto: 'Um sistema robusto feito em Vue.js, PHP e MySQL que permite que o usuário construa uma biografia completa, podendo adicionar redes sociais, títulos, textos, imagens, vídeos do youtube, etc.',
        skills: ['Vue.js', 'TypeScript', 'Bootstrap', 'SCSS', 'PHP', 'MySQL', 'Git'],
        categoria: 'Profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/bioohub_frontend',
        backendPrivado: true
    },

    {
        nome: 'Inova Option',
        video: 'inova-option',
        texto: 'O site do Inova Option, feito em Vue.js, SCSS e Bootstrap, onde o cliente pode negociar ações, forex e criptomoedas, o sistema conta com animações de transições suaves e componentização em sua organização.',
        skills: ['Vue.js', 'TypeScript', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/inovaoption',
        demoUrl: 'https://inovaoption.vercel.app/'
    },

    {
        nome: 'Maragogi',
        video: 'maragogi',
        texto: 'Um projeto pessoal feito em Vue.js que mostra detalhes sobre Maragogi - AL',
        skills: ['Vue.js', 'JavaScript', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/maragogi_vue'
    },

    {
        nome: 'Pluug-ai Sistema',
        video: 'pluug_ai_sistema',
        texto: 'O front-end estático do sistema da Pluug-ai feito em HTML5, CSS3, Bootstrap e JavaScript, o qual contribuiu para um sistema completo e funcional posteriormente.',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/pluug.ai_v2',
        demoUrl: 'https://pluug-ai-v2.vercel.app/'
    },

    {
        nome: 'Turbo Digital',
        video: 'turbo_digital',
        texto: 'O site do Turbo Digital, feito em React, NextJS e Tailwind, onde ensina como se posicionar, criar conteúdo e vender com estratégia!',
        skills: ['React.js', 'TypeScript', 'NextJS', 'Tailwind', 'Git'],
        categoria: 'Profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/turbo_digital',
        demoUrl: 'https://ruizmidias.com.br/mentoria-turbo-digital/'
    },


    {
        nome: 'Itália Tour',
        video: 'italia_tour',
        texto: 'Projeto pessoal desenvolvido em Vue.js e Node.js com TypeScript, focado em praticar rotas, formulários e integração com back-end para simular o agendamento de passeios.',
        skills: ['Vue.js', 'TypeScript', 'NodeJS', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Pessoal',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/italia_tour'
    },

    {
        nome: 'Umuarama',
        video: 'umuarama',
        texto: 'Um projeto feito em HTML5, CSS3, Bootstrap e JavaScript, que mostra detalhes sobre Umuarama',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/umuarama',
        demoUrl: 'https://umuarama.vercel.app/'
    },

    {
        nome: 'Eder Notícias',
        video: 'eder_noticias',
        texto: 'Um portal de notícias feito em HTML5, CSS3, Bootstrap e JavaScript',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/eder-luiz-noticias',
        demoUrl: 'https://eder-luiz-noticias.vercel.app/'
    },

    {
        nome: 'Notifish',
        video: 'notifish',
        texto: 'Um sistema feito em HTML5, CSS3, Bootstrap e JavaScript, o qual facilita o processo de comunicação tomando o papel de um mediador entre você e o WhatsApp',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional',
        githubFrontendUrl: 'https://github.com/mateusmaranhao12/notifish',
        demoUrl: 'https://notifish.vercel.app/'
    },

]

const grupos = projetos.reduce<Record<Categoria, Projeto[]>>(
    (acc, p) => {
        (acc[p.categoria] ||= []).push(p)
        return acc
    },
    { Profissional: [], Acadêmico: [], Pessoal: [] }
)

const ordem: Categoria[] = ['Profissional', 'Acadêmico', 'Pessoal']

export default function Projetos() {
    return (
        <SectionWrapper id="projetos" className="bg-purple-950">
            <div className="w-full min-h-screen">
                <SectionTitle>Projetos</SectionTitle>

                <div className="mt-6 space-y-12">
                    {ordem.map((cat) => {
                        const lista = grupos[cat]
                        if (!lista.length) return null

                        return (
                            <section key={cat}>
                                <motion.h3
                                    className="text-lg md:text-xl font-semibold text-purple-300 mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                >
                                    {cat === 'Profissional' && 'Projetos em que trabalhei'}
                                    {cat === 'Acadêmico' && 'Projetos acadêmicos'}
                                    {cat === 'Pessoal' && 'Projetos pessoais'}
                                </motion.h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                                    {lista.map((projeto, index) => (
                                        <ProjetoCard
                                            key={`${cat}-${index}-${projeto.nome}`}
                                            nome={projeto.nome}
                                            video={projeto.video}
                                            texto={projeto.texto}
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