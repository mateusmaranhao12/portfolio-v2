'use client'
import { useEffect, useState, MouseEvent } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import DownloadCVButton from "../Common/DownloadButton";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState<string>('')

    const menuItems = [
        { label: 'Sobre', href: 'sobre' },
        { label: 'Habilidades', href: 'habilidades' },
        { label: 'Projetos', href: 'projetos' },
        { label: 'Experiência', href: 'experiencia' },
        { label: 'Certificados', href: 'certificados' },
        { label: 'Contato', href: 'contato' },
    ]

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
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { threshold: 0.4 }
        );

        menuItems.forEach((item) => {
            const el = document.getElementById(item.href);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="bg-purple-900 fixed shadow-md px-6 py-4 top-0 left-0 w-full z-50">
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

                {/* Botao mobile */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

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
                                className={`relative font-medium transition-colors duration-200 ${activeSection === item.href
                                    ? "text-yellow-500 cursor-text"
                                    : "text-gray-300 hover:text-yellow-300"
                                    }`}
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className="hidden md:block ml-4">
                    <DownloadCVButton />
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <motion.div
                    className="md:hidden mt-4 flex flex-col gap-4 items-center py-4 rounded"
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
                                    className="relative text-gray-200 font-medium hover:text-yellow-300 transition-colors duration-200"
                                >
                                    {item.label}
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Botão de baixar currículo no mobile */}
                    <div className="mt-2">
                        <DownloadCVButton />
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
