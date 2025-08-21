'use client'
import SectionWrapper from '@/components/Common/SectionWrapper'
import SectionTitle from '@/components/Common/SectionTitle'
import ExperienciaItem from '@/components/Experiencia/ExperienciaItem'
import { motion } from 'framer-motion'

const experiencias = [
  {
    cargo: 'Estagiário na área de TI',
    empresa: 'Imprensa Oficial de Sergipe / Serviços Gráficos de Sergipe',
    periodo: 'Mai 2023 - Mai 2024',
    descricao:
      'Realização de atividades relacionadas a área, como Digitalização do Diário Oficial e Binarilização do Acervo. Desenvolvimento de um software para transformar imagens dos diários escaneados em textos, e para poder realizar pesquisas nesses diários através do próprio software.',
  },
  {
    cargo: 'Desenvolvedor Free-lancer',
    empresa: 'Workana',
    periodo: 'Desde agosto de 2024',
    descricao:
      'Atuação como desenvolvedor freelancer na plataforma Workana, criei várias landing pages utilizando HTML5, CSS3 e Bootstrap, até sistemas mais complexos e funcionais utilizando VueJS, PHP e MySQL. Também sites modernos e componentizados utilizando ReactJS, NextJS e Tailwind CSS.',
  },
]

export default function Experiencia() {
  return (
    <SectionWrapper id="experiencia">
      <div className="w-full">
        <SectionTitle>Experiência</SectionTitle>
        <motion.div
          className="flex flex-col gap-8 mt-10"
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
          {experiencias.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <ExperienciaItem
                cargo={exp.cargo}
                empresa={exp.empresa}
                periodo={exp.periodo}
                descricao={exp.descricao}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
