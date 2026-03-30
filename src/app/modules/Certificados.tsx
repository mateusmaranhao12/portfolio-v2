"use client";
import SectionWrapper from "@/components/Common/SectionWrapper";
import SectionTitle from "@/components/Common/SectionTitle";
import CertificadoItem from "@/components/Certificados/CertificadoCard";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/theme";
import { Lang, translations } from "../translate/tradutor";

export default function Certificados({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;
  const certificados = [
    {
      nome: `${t.certificado_dw_completo}`,
      imagem: "/imgs/cert_dw_completo.jpg",
      descricao: `${t.certificado_dw_completo_desc}`,
    },
    {
      nome: `${t.certificado_vue}`,
      imagem: "/imgs/cert_vue.jpg",
      descricao: `${t.certificado_vue_desc}`,
    },
    {
      nome: `${t.certificado_wise_up}`,
      imagem: "/imgs/certificado_wise_up.jpg",
      descricao: `${t.certificado_wise_up_desc}`,
    },
    {
      nome: `${t.certificado_react_nextjs}`,
      imagem: "/imgs/certificado_react_nextjs.jpg",
      descricao: `${t.certificado_react_nextjs_desc}`,
    },
    {
      nome: `${t.certificado_git_github}`,
      imagem: "/imgs/certificado_git_github.jpg",
      descricao: `${t.certificado_git_github_desc}`,
    },
  ];
  return (
    <SectionWrapper
      id="certificados"
      className={isDark ? "dark-certificado-bg" : "light-certificado-bg"}
    >
      <div className="w-full">
        <SectionTitle>{t.certificados_titulo}</SectionTitle>
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
              isDark={isDark ?? false}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
