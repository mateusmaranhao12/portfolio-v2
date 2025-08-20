import SectionTitle from '@/components/Common/SectionTitle';
import SectionWrapper from '@/components/Common/SectionWrapper';
import Descricao from '@/components/Sobre/Descricao';
import Idiomas from '@/components/Sobre/Idiomas';
import Objetivos from '@/components/Sobre/Objetivos';

export default function Sobre() {

    const paragrafos = [
        `Olá! Sou <strong class="text-yellow-300">Mateus Nunes Maranhão</strong>, 
            graduado em <strong class="text-yellow-300">Ciência da Computação</strong> pela <strong class="text-yellow-300">Universidade Tiradentes</strong> em Aracaju - SE. Sou movido por desafios e apaixonado por desenvolvimento web.`,

        `Estou em busca de oportunidades na área 
            de <strong class="text-yellow-300">Desenvolvimento Web</strong> ou <strong class="text-yellow-300">Tecnologia da Informação</strong>,
            onde eu possa aplicar meus conhecimentos técnicos em projetos reais, colaborar com equipes e continuar evoluindo com as melhores práticas do mercado.`
    ]

    return (
        <SectionWrapper id='sobre'>
            {/* Texto */}
            <div className="w-full space-y-6" >
                <SectionTitle>
                    Sobre mim
                </SectionTitle>

                <Descricao paragrafos={paragrafos} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <Idiomas />
                    <Objetivos />
                </div>
            </div>
        </SectionWrapper>
    );
}
