import SectionWrapper from '@/components/Common/SectionWrapper'
import SectionTitle from '@/components/Common/SectionTitle'
import ExperienciaItem from '@/components/Experiencia/ExperienciaItem'

const experiencias = [
    {
        cargo: 'Estagiário na área de TI',
        empresa: 'Imprensa Oficial de Sergipe / Serviços Gráficos de Sergipe',
        periodo: 'Mai 2023 - Mai 2024',
        descricao: 'Realização de atividades relacionadas a área, como Digitalização do Diário Oficial e Binarilização do Acervo. Desenvolvimento de um software para transformar imagens dos diários escaneados em textos, e para poder realizar pesquisas nesses diários através do próprio software.',
    },

    {
        cargo: 'Desenvolvedor Free-lancer',
        empresa: 'Workana',
        periodo: 'Desde agosto de 2024',
        descricao: 'Atuação como desenvolvedor freelancer na plataforma Workana, com experiência em projetos utilizando React, Vue.js, Tailwind CSS, HTML e Bootstrap.',
    },
]

export default function Experiencia() {
    return (
        <SectionWrapper id='experiencia'>
            <div className="w-full">
                <SectionTitle>Experiência</SectionTitle>
                <div className="flex flex-col gap-8 mt-10">
                    {experiencias.map((exp, index) => (
                        <ExperienciaItem
                            key={index}
                            cargo={exp.cargo}
                            empresa={exp.empresa}
                            periodo={exp.periodo}
                            descricao={exp.descricao}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}