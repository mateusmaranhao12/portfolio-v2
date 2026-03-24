"use client";
import { motion } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DownloadCVButton from "../Common/DownloadButton";
import ThemeIcon from "../theme/ThemeIcon";
import { useTheme } from "../theme/theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { isDark } = useTheme();
  const dark = isDark ?? false;

  const menuItems = [
    { label: "Sobre", href: "sobre" },
    { label: "Habilidades", href: "habilidades" },
    { label: "Experiência", href: "experiencia" },
    { label: "Projetos", href: "projetos" },
    { label: "Certificados", href: "certificados" },
    { label: "Contato", href: "contato" },
  ];

  const NAV_HEIGHT = 72;

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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          Mateus Maranhão
        </motion.h1>

        {/* Botao mobile + ThemeIcon ao lado */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeIcon />
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
          className="hidden md:flex gap-6"
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
                    ? dark ? "text-yellow-500 cursor-text" : "text-purple-500 cursor-text"
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

        <div className="hidden md:flex items-center gap-4">
          <DownloadCVButton />
          <ThemeIcon />
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          className={`md:hidden mt-4 flex flex-col gap-4 items-center py-4 rounded ${dark ? "bg-purple-950 text-white" : "bg-white text-gray-800"}`}
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
                    dark ? "text-gray-300 hover:text-yellow-300" : "text-gray-700 hover:text-purple-500"
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
