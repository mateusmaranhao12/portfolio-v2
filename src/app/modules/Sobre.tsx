'use client';
import SectionTitle from "@/components/Common/SectionTitle";
import SectionWrapper from "@/components/Common/SectionWrapper";
import Descricao from "@/components/Sobre/Descricao";
import FormacaoAcademica from "@/components/Sobre/FormacaoAcademica";
import Idiomas from "@/components/Sobre/Idiomas";
import { useTheme } from "@/components/theme/theme";

export default function Sobre() {
  const { isDark } = useTheme();
  const paragrafos = [
    `Olá! Sou <strong class="text-yellow-500">Mateus Nunes Maranhão</strong>, 
            graduado em <strong class="text-yellow-500">Ciência da Computação</strong> pela <strong class="text-yellow-500">Universidade Tiradentes</strong> em Aracaju - SE. Movido por desafios e apaixonado por desenvolvimento web, atuo com tecnologias como React.js, Next.js, Vue.js, Node.js, TypeScript e PHP.`,
  ];

  return (
    <SectionWrapper
      id="sobre"
      className={isDark ? "bg-purple-950" : "bg-slate-100"}
    >
      {/* Texto */}
      <div className="w-full space-y-6">
        <SectionTitle>Sobre mim</SectionTitle>

        <Descricao paragrafos={paragrafos} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 pb-20">
          <FormacaoAcademica />
          <Idiomas />
          {/* <Objetivos /> */}
        </div>
      </div>
    </SectionWrapper>
  );
}
