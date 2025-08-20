import SectionMeWrapper from "@/components/Common/SectionMeWrapper";
import TextBlock from "@/components/Common/TextBlock";
import ProfileSection from "@/components/Me/ProfileSection";
import TituloPrincipal from "@/components/Me/TituloPrincipal";
import Descricao from "@/components/Sobre/Descricao";

export default function Me() {

    const paragrafos =
        [
            `Desenvolvedor de sistemas e sites responsivos e funcionais.`,
            `Focado em construir soluções digitais com qualidade, usabilidade e boas práticas.`
        ]

    return (
        <SectionMeWrapper>
            <ProfileSection />
            <TextBlock>
                <TituloPrincipal />
                <Descricao paragrafos={paragrafos} />
            </TextBlock>
        </SectionMeWrapper>
    );
}
