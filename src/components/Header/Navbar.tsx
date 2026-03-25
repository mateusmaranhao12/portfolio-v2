"use client";
import { motion } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DownloadCVButton from "../Common/DownloadButton";
import ThemeIcon from "../theme/ThemeIcon";
import LanguageSelect from "../Common/LanguageSelect";
import { useTheme } from "../theme/theme";
import { Lang } from "@/app/translate/tradutor";

//traduções para os itens do menu, adaptando-se ao idioma selecionado
const translations = {
  pt: {
    sobre: "Sobre",
    habilidades: "Habilidades",
    experiencia: "Experiência",
    projetos: "Projetos",
    certificados: "Certificados",
    contato: "Contato",
  },

  en: {
    sobre: "About",
    habilidades: "Skills",
    experiencia: "Experience",
    projetos: "Projects",
    certificados: "Certificates",
    contato: "Contact",
  },
};

export default function Navbar() {

  const [lang, setLang] = useState<Lang>("pt");
  const t = translations[lang];

  //estado para controle do menu mobile e seção ativa
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  //tema selecionado
  const { isDark } = useTheme();
  const dark = isDark ?? false;

  //itens do menu de navegação
  const menuItems = [
    { label: t.sobre, href: "sobre" },
    { label: t.habilidades, href: "habilidades" },
    { label: t.experiencia, href: "experiencia" },
    { label: t.projetos, href: "projetos" },
    { label: t.certificados, href: "certificados" },
    { label: t.contato, href: "contato" },
  ];

  //altura da navbar para cálculo de scroll suave
  const NAV_HEIGHT = 72;

  //função para lidar com o clique nos links do menu, realizando scroll suave para a seção correspondente
  function handleSmoothScroll(e: MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // posição do alvo – offset da navbar
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setIsOpen(false);
  }

  //efeito para observar as seções do site e atualizar a seção ativa no menu conforme o usuário rola a página
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 },
    );

    menuItems.forEach((item) => {
      const el = document.getElementById(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed shadow-md px-6 py-4 top-0 left-0 w-full z-50 ${dark ? "bg-purple-950 text-white" : "bg-white text-gray-800"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1
          className="text-xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Mateus Maranhão
        </motion.h1>

        {/* Botao mobile + ThemeIcon ao lado + LanguageSelect */}
        <div className="hidden max-[1024px]:flex items-center gap-2">
          <ThemeIcon />
          <LanguageSelect onChange={(l) => setLang(l)} />
          <button
            className={`text-2xl ${dark ? "text-white" : "text-gray-800"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu desktop */}
        <motion.ul
          className="hidden min-[1025px]:flex gap-6"
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
                delay: 0.2 + index * 0.2,
              }}
            >
              <a
                href={`#${item.href}`}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative font-medium transition-colors duration-200 ${
                  activeSection === item.href
                    ? dark
                      ? "text-yellow-500 cursor-text"
                      : "text-purple-500 cursor-text"
                    : dark
                      ? "text-gray-300 hover:text-yellow-300"
                      : "text-gray-700 hover:text-purple-500"
                }`}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="hidden min-[1025px]:flex items-center gap-4">
          <DownloadCVButton />
          <LanguageSelect onChange={(l) => setLang(l)} />
          <ThemeIcon />
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          className={`min-[1025px]:hidden mt-4 flex flex-col gap-4 items-center py-4 rounded ${dark ? "bg-purple-950 text-white" : "bg-white text-gray-800"}`}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className="flex flex-col gap-4 items-center">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                  delay: 0.2 + index * 0.2,
                }}
              >
                <a
                  href={`#${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className={`relative font-medium transition-colors duration-200 ${
                    dark
                      ? "text-gray-300 hover:text-yellow-300"
                      : "text-gray-700 hover:text-purple-500"
                  }`}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Botão de baixar currículo no mobile*/}
          <div className="mt-2 flex gap-4">
            <DownloadCVButton />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
