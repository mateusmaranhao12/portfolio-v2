import SectionTitle from "@/components/Common/SectionTitle"
import SectionWrapper from "@/components/Common/SectionWrapper"

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
    }
]

export default function Projetos() {
    return (
        <SectionWrapper id="projetos">
            <div className="w-full min-h-screen">
                <SectionTitle>Projetos</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {projetos.map((projeto, index) => (
                        <div
                            key={index}
                            className="
                                    bg-purple-800/10 backdrop-blur-sm p-5 rounded-xl 
                                    border border-violet-700 hover:shadow-[0_0_15px_#ffffff33] 
                                    transition duration-300
                                "
                        >
                            <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                                <video
                                    src={`/videos/${projeto.video}.mp4`}
                                    controls
                                    className="w-full h-full object-cover"
                                >
                                    Seu navegador não suporta vídeo.
                                </video>
                            </div>

                            <h3 className="text-xl font-bold text-yellow-300 mb-2">{projeto.nome}</h3>
                            <p className="text-white text-sm leading-relaxed">{projeto.texto}</p>

                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}