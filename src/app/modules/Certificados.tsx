import SectionWrapper from "@/components/Common/SectionWrapper"
import SectionTitle from "@/components/Common/SectionTitle"
import CertificadoItem from "@/components/Certificados/CertificadoCard"

const certificados = [
    {
        nome: 'Desenvolvimento Web Completo',
        imagem: '/imgs/cert_dw_completo.jpg'
    },
    {
        nome: 'Desenvolvimento Web Avançado 2022 com Vue e Vuex',
        imagem: '/imgs/cert_vue.jpg'
    },
    {
        nome: 'Wise Up Online – 50 horas',
        imagem: '/imgs/certificado_wise_up.jpg'
    },
    {
        nome: 'React e NextJS do básico ao avançado: Aplicações reais',
        imagem: '/imgs/certificado_react_nextjs.jpg'
    }
]

export default function Certificados() {
    return (
        <SectionWrapper id="certificados">
            <div className="w-full">
                <SectionTitle>Certificados</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
                    {certificados.map((cert, index) => (
                        <CertificadoItem
                            key={index}
                            nome={cert.nome}
                            imagem={cert.imagem}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}