import SectionTitle from '@/components/Common/SectionTitle';
import SectionWrapper from '@/components/Common/SectionWrapper';
import ProfileImage from '@/components/Images/ProfileImage';
import Descricao from '@/components/Sobre/Descricao';
import Idiomas from '@/components/Sobre/Idiomas';
import Objetivos from '@/components/Sobre/Objetivos';

export default function Sobre() {

    const paragrafos = [
        `Olá! Meu nome é <strong class="text-yellow-300">Mateus Nunes Maranhão</strong>, 
            sou graduado em <strong class="text-yellow-300">Ciência da Computação</strong> na <strong class="text-yellow-300">Universidade Tiradentes</strong>. 
            Moro em Aracaju - SE e sou apaixonado por tecnologia e desenvolvimento web.`,

        `Estou em busca de oportunidades de uma vaga na área 
            de <strong class="text-yellow-300">Desenvolvimento Web</strong> ou <strong class="text-yellow-300">Tecnologia da Informação</strong>. 
            Tenho experiência com criação de projetos práticos, participação em sistemas reais 
            e estou sempre me atualizando com as melhores práticas do mercado.`
    ]

    return (
        <SectionWrapper id='sobre'>
            {/* Texto */}
            <div className="w-full md:w-2/3 space-y-6" >
                <SectionTitle>
                    Sobre mim
                </SectionTitle>

                <Descricao paragrafos={paragrafos} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <Idiomas />
                    <Objetivos />
                </div>
            </div>

            {/* Imagem */}
            < ProfileImage />
        </SectionWrapper>
    );
}
