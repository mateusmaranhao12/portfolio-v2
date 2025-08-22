'use client'
import SectionWrapper from "@/components/Common/SectionWrapper"
import SectionTitle from "@/components/Common/SectionTitle"
import CertificadoItem from "@/components/Certificados/CertificadoCard"
import { motion } from "framer-motion"

const certificados = [
    {
        nome: 'Desenvolvimento Web Completo',
        imagem: '/imgs/cert_dw_completo.jpg',
        descricao: 'Meu primeiro curso de desenvolvimento Full-Stack realizado em 2021, para aprender e me aprofundar em tecnologias como HTML5, CSS3, JavaScript, MySQL, PHP, Bootstrap, etc.'
    },
    {
        nome: 'Desenvolvimento Web Avançado 2022 com Vue e Vuex',
        imagem: '/imgs/cert_vue.jpg',
        descricao: 'Curso realizado em 2022, com o objetivo de aprender e aprofundar no VueJS e suas tecnologias como Vuex, vue-router, componentização e animações.'
    },
    {
        nome: 'Wise Up Online – 50 horas',
        imagem: '/imgs/certificado_wise_up.jpg',
        descricao: 'Curso realizado em 2023 para desenvolver meu inglês.'
    },
    {
        nome: 'React e NextJS do básico ao avançado: Aplicações reais',
        imagem: '/imgs/certificado_react_nextjs.jpg',
        descricao: 'Curso realizado para aprimorar meus conhecimentos em React e NextJS.'
    },
    {
        nome: 'Git e GitHub, do básico ao avançado',
        imagem: '/imgs/certificado_git_github.jpg',
        descricao: 'Curso realizado para aprofundar conhecimentos já aplicados em projetos anteriores.'
    }
]

export default function Certificados() {
    return (
        <SectionWrapper id="certificados" className="bg-purple-950">
            <div className="w-full">
                <SectionTitle>Certificados</SectionTitle>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 1 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {certificados.map((cert, index) => (
                        <CertificadoItem
                            key={index}
                            nome={cert.nome}
                            imagem={cert.imagem}
                            descricao={cert.descricao}
                        />
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    )
}