"use client";
import SectionWrapper from "@/components/Common/SectionWrapper";
import SectionTitle from "@/components/Common/SectionTitle";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContatoItem from "@/components/Contato/ContatoItem";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/theme";

export default function Contato() {
  const { isDark } = useTheme();

  const contatos = [
    {
      nome: "WhatsApp",
      href: "https://wa.me/5579991762846",
      icon: (
        <FaWhatsapp
          size={28}
          className={isDark ? "text-green-400" : "text-green-600"}
        />
      ),
      texto: "Entre em contato diretamente comigo via WhatsApp",
    },
    {
      nome: "E-mail",
      href: "mailto:mateusnm2003@gmail.com",
      icon: (
        <FaEnvelope size={28} className={isDark ? "text-red-400" : "text-red-600"} />
      ),
      texto: "mateusnm2003@gmail.com",
    },
    {
      nome: "LinkedIn",
      href: "https://www.linkedin.com/in/mateusnmaranhao/",
      icon: (
        <FaLinkedin size={28} className={isDark ? "text-blue-400" : "text-blue-600"} />
      ),
      texto: "Conecte-se comigo no LinkedIn agora mesmo!",
    },
    {
      nome: "GitHub",
      href: "https://github.com/mateusmaranhao12",
      icon: (
        <FaGithub size={28} className={isDark ? "text-white" : "text-black"} />
      ),
      texto: "Venha conferir meus projetos e contribuições no GitHub!",
    },
  ];
  return (
    <SectionWrapper id="contato">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <SectionTitle>Contato</SectionTitle>
        <p
          className={`text-start mt-2 ${isDark ? "text-slate-300" : "text-slate-800"}`}
        >
          Fique à vontade para entrar em contato comigo através dos links
          abaixo!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-20">
          {contatos.map((contato, index) => (
            <ContatoItem
              key={index}
              nome={contato.nome}
              href={contato.href}
              icon={contato.icon}
              texto={contato.texto}
              isDark={isDark ?? false}
            />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
