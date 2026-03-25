import SectionMeWrapper from "@/components/Common/SectionMeWrapper";
import TextBlock from "@/components/Common/TextBlock";
import ProfileSection from "@/components/Me/ProfileSection";
import TituloPrincipal from "@/components/Me/TituloPrincipal";
import Descricao from "@/components/Sobre/Descricao";
import { translations, Lang } from "@/app/translate/tradutor";

export default function Me({ lang }: { lang?: Lang }) {

  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;

  const paragrafos = [
    `${t.me_paragrafo_1}`,
    `${t.me_paragrafo_2}`,
  ];

  return (
    <SectionMeWrapper>
      <ProfileSection />
      <TextBlock>
        <TituloPrincipal lang={currentLang} />
        <Descricao paragrafos={paragrafos} />
      </TextBlock>
    </SectionMeWrapper>
  );
}
