import SectionTitle from "@/components/Common/SectionTitle"
import SectionWrapper from "@/components/Common/SectionWrapper"
import ProjetoCard from "@/components/Projetos/ProjetoCard"

const projetos = [
    {
        nome: 'Spotify Clone',
        video: 'spotify_clone',
        texto: 'Um app tipo Spotify bem dinâmico feito em VueJS e PHP que permite login e cadastro de usuários, e que salvem músicas em suas respectivas playlists.'
    },

    {
        nome: 'Maragogi',
        video: 'maragogi',
        texto: 'Um projeto front-end feito em VueJS que mostra detalhes sobre Maragogi - AL'
    },

    {
        nome: 'Itália Tour',
        video: 'italia_tour',
        texto: 'Um projeto feito em VueJS e em NodeJS com TypeScript que permite agendar passeios pela Itália (Ex: Roma, Veneza, Milão)'
    },

    {
        nome: 'Pluug-ai Sistema',
        video: 'pluug_ai_sistema',
        texto: 'O front-end estático do sistema da Pluug-ai feito em HTML5, CSS3, Bootstrap e JavaScript'
    },

    {
        nome: 'Turbo Digital',
        video: 'turbo_digital',
        texto: 'O site do Turbo Digital, feito em React, NextJS e Tailwind, onde ensina como se posicionar, criar conteúdo e vender com estratégia!'
    },

    {
        nome: 'Inova Option',
        video: 'inova-option',
        texto: 'O site do Inova Option, feito em VueJS, SCSS e Bootstrap, onde o cliente pode negociar ações, forex e criptomoedas'
    },

    {
        nome: 'Umuarama',
        video: 'umuarama',
        texto: 'Um projeto feito em HTML5, CSS3, Bootstrap e JavaScript, que mostra detalhes sobre Umuarama'
    },

    {
        nome: 'Eder Notícias',
        video: 'eder_noticias',
        texto: 'Um portal de notícias feito em HTML5, CSS3, Bootstrap e JavaScript'
    },

    {
        nome: 'Notifish',
        video: 'notifish',
        texto: 'Um sistema feito em HTML5, CSS3, Bootstrap e JavaScript, o qual facilita o processo de comunicação tomando o papel de um mediador entre você e o WhatsApp'
    },

    {
        nome: 'Saude+',
        video: 'saude+',
        texto: 'O sistema Saude+ foi desenvolvido como parte prática do meu Trabalho de Conclusão de Curso em Ciências da Computação pela Universidade Tiradentes. Um sistema feito em VueJS, Tailwind CSS, TypeScript, PHP e MySQL, o qual permite que pacientes agendem consultas de forma simples e eficiente, oferecendo recursos para médicos e pacientes reagendarem ou desmarcarem atendimentos em poucos segundos.'
    }
]

export default function Projetos() {
    return (
        <SectionWrapper id="projetos">
            <div className="w-full min-h-screen">
                <SectionTitle>Projetos</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {projetos.map((projeto, index) => (
                        <ProjetoCard
                            key={index}
                            nome={projeto.nome}
                            video={projeto.video}
                            texto={projeto.texto}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}