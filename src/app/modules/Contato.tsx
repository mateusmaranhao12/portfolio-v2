'use client'
import SectionWrapper from '@/components/Common/SectionWrapper';
import SectionTitle from '@/components/Common/SectionTitle';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContatoItem from '@/components/Contato/ContatoItem';
import { motion } from 'framer-motion';

const contatos = [
    {
        nome: 'WhatsApp',
        href: 'https://wa.me/5579991762846',
        icon: <FaWhatsapp size={28} className='text-green-400' />,
        texto: '+55 (79) 99176-2846',
    },
    {
        nome: 'E-mail',
        href: 'mailto:mateusnmaranhao@gmail.com',
        icon: <FaEnvelope size={28} className='text-red-400' />,
        texto: 'mateusnmaranhao@gmail.com',
    },
    {
        nome: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mateusnmaranhao/',
        icon: <FaLinkedin size={28} className='text-blue-500' />,
        texto: 'https://www.linkedin.com/in/mateusnmaranhao/',
    },
    {
        nome: 'GitHub',
        href: 'https://github.com/mateusmaranhao12',
        icon: <FaGithub size={28} className='text-white' />,
        texto: 'github.com/mateusmaranhao12',
    },
];

export default function Contato() {
    return (
        <SectionWrapper id='contato'>
            <motion.div
                className='w-full'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
                <SectionTitle>Contato</SectionTitle>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
                    {contatos.map((contato, index) => (
                        <ContatoItem
                            key={index}
                            nome={contato.nome}
                            href={contato.href}
                            icon={contato.icon}
                            texto={contato.texto}
                        />
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
