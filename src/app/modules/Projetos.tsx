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
}

const projetos: Projeto[] = [
    {
        nome: 'Saude+',
        video: 'saude+',
        texto: 'O sistema Saude+ foi desenvolvido como parte prática do meu Trabalho de Conclusão de Curso em Ciências da Computação pela Universidade Tiradentes. Feito em VueJS, Tailwind CSS, TypeScript, PHP e MySQL, o qual permite que pacientes agendem consultas de forma simples e eficiente, oferecendo recursos para médicos e pacientes reagendarem ou desmarcarem atendimentos em poucos segundos.',
        skills: ['VueJS', 'TypeScript', 'PHP', 'MySQL', 'Tailwind', 'SCSS', 'Git'],
        categoria: 'Acadêmico'
    },

    {
        nome: 'Lions Bertha Lutz',
        video: 'lions',
        texto: 'Um site desenvolvido em React e NextJS para a Lions Bertha Lutz em Aracaju, um projeto feito como meu estágio supervisionado da Universidade Tiradentes. Um site que mostra a história da Lions, as causas (tais como esforços humanitários, juventude, socorro em catástrofes, etc.), e onde permite que o usuário seja um voluntário e possa fazer doações para a empresa.',
        skills: ['ReactJS', 'TypeScript', 'NextJS', 'Tailwind', 'Git'],
        categoria: 'Acadêmico'

    },

    {
        nome: 'Spotify Clone',
        video: 'spotify_clone',
        texto: 'Um app tipo Spotify bem dinâmico feito em VueJS e PHP que permite login e cadastro de usuários, e que salvem músicas em suas respectivas playlists.',
        skills: ['VueJS', 'TypeScript', 'PHP', 'MySQL', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Pessoal'
    },

    {
        nome: 'GitHub Profile',
        video: 'github_profile',
        texto: 'Um sistema desenvolvido em React.js,TypeScript e SCSS, juntamente com a API do GitHub, o qual permite o usuáriopesquisar o GitHub de usuários, e visualizar alguns de seus projetos já feitos. Projeto feito no curso da udemy de ReactJS e NextJS.',
        skills: ['ReactJS', 'TypeScript', 'SCSS', 'Git'],
        categoria: 'Pessoal'

    },

    {
        nome: 'Projeto Ecommerce',
        video: 'projeto_ecommerce',
        texto: 'Um sistema que permite adicionar e remover produtos ao carrinho, como também soma o valor total dos produtos, e podendo assim, realizar a compra.',
        skills: ['ReactJS', 'TypeScript', 'SCSS', 'Git'],
        categoria: 'Pessoal'

    },

    {
        nome: 'Inova Option',
        video: 'inova-option',
        texto: 'O site do Inova Option, feito em VueJS, SCSS e Bootstrap, onde o cliente pode negociar ações, forex e criptomoedas',
        skills: ['VueJS', 'TypeScript', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Profissional'
    },

    {
        nome: 'Maragogi',
        video: 'maragogi',
        texto: 'Um projeto front-end feito em VueJS que mostra detalhes sobre Maragogi - AL',
        skills: ['VueJS', 'JavaScript', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Pessoal'
    },

    {
        nome: 'Pluug-ai Sistema',
        video: 'pluug_ai_sistema',
        texto: 'O front-end estático do sistema da Pluug-ai feito em HTML5, CSS3, Bootstrap e JavaScript',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional'
    },

    {
        nome: 'Turbo Digital',
        video: 'turbo_digital',
        texto: 'O site do Turbo Digital, feito em React, NextJS e Tailwind, onde ensina como se posicionar, criar conteúdo e vender com estratégia!',
        skills: ['ReactJS', 'TypeScript', 'NextJS', 'Tailwind', 'Git'],
        categoria: 'Profissional'
    },


    {
        nome: 'Itália Tour',
        video: 'italia_tour',
        texto: 'Um projeto feito em VueJS e em NodeJS com TypeScript que permite agendar passeios pela Itália (Ex: Roma, Veneza, Milão)',
        skills: ['VueJS', 'TypeScript', 'NodeJS', 'Bootstrap', 'SCSS', 'Git'],
        categoria: 'Pessoal'
    },

    {
        nome: 'Umuarama',
        video: 'umuarama',
        texto: 'Um projeto feito em HTML5, CSS3, Bootstrap e JavaScript, que mostra detalhes sobre Umuarama',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional'
    },

    {
        nome: 'Eder Notícias',
        video: 'eder_noticias',
        texto: 'Um portal de notícias feito em HTML5, CSS3, Bootstrap e JavaScript',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional'
    },

    {
        nome: 'Notifish',
        video: 'notifish',
        texto: 'Um sistema feito em HTML5, CSS3, Bootstrap e JavaScript, o qual facilita o processo de comunicação tomando o papel de um mediador entre você e o WhatsApp',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
        categoria: 'Profissional'
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
        <SectionWrapper id="projetos">
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
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    viewport={{once: true, amount: 0.3}}
                                    transition={{duration: 0.7, ease: "easeInOut"}}
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