"use client";
import SectionWrapper from "@/components/Common/SectionWrapper";
import SectionTitle from "@/components/Common/SectionTitle";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContatoItem from "@/components/Contato/ContatoItem";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/theme";
import { translations, Lang } from "@/app/translate/tradutor";
import FormContato from "@/components/Contato/FormContato";

export default function Contato({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;

  const contatos = [
    {
      nome: `${t.contato_whatsapp}`,
      href: "https://wa.me/5579991762846",
      icon: (
        <FaWhatsapp
          size={28}
          className={isDark ? "text-green-400" : "text-green-600"}
        />
      ),
      texto: `${t.contato_whatsapp_texto}`,
    },
    {
      nome: `${t.contato_email}`,
      href: "mailto:mateusnm2003@gmail.com",
      icon: (
        <FaEnvelope
          size={28}
          className={isDark ? "text-red-400" : "text-red-600"}
        />
      ),
      texto: `${t.contato_email_texto}`,
    },
    {
      nome: `${t.contato_linkedin}`,
      href: "https://www.linkedin.com/in/mateusnmaranhao/",
      icon: (
        <FaLinkedin
          size={28}
          className={isDark ? "text-blue-400" : "text-blue-600"}
        />
      ),
      texto: `${t.contato_linkedin_texto}`,
    },
    {
      nome: `${t.contato_github}`,
      href: "https://github.com/mateusmaranhao12",
      icon: (
        <FaGithub size={28} className={isDark ? "text-white" : "text-black"} />
      ),
      texto: `${t.contato_github_texto}`,
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
        <SectionTitle>{t.contato_titulo}</SectionTitle>
        <p
          className={`text-start mt-2 ${isDark ? "text-slate-300" : "text-slate-800"}`}
        >
          {t.contato_texto}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 mb-20 items-start">
          <div className="lg:col-span-7">
            <FormContato lang={currentLang} />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:col-span-5">
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
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
