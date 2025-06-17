'use client'
import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.6,
            }
        )

        menuItems.forEach((item) => {
            const el = document.getElementById(item.href)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (

        <nav className="bg-purple-900 fixed shadow-md px-6 py-4 top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Mateus Maranhão</h1>

                {/*Botao mobile*/}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Menu desktop */}
                <ul className="hidden md:flex gap-6">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={`#${item.href}`}
                                className={`relative font-medium ransition-colors duration-200 ${
                                    activeSection === item.href
                                    ? 'text-yellow-500 cursor-text'
                                    : 'text-gray-300 hover:text-yellow-300'
                                }`}
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
            {/* Menu Mobile */}
            {isOpen && (
                <ul className="md:hidden mt-4 flex flex-col gap-4 items-center bg-purple-800 py-4 rounded">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="relative text-gray-200 font-medium hover:text-yellow-300 transition-colors duration-200"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
