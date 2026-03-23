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
        texto: 'Entre em contato diretamente comigo via WhatsApp',
    },
    {
        nome: 'E-mail',
        href: 'mailto:mateusnm2003@gmail.com',
        icon: <FaEnvelope size={28} className='text-red-400' />,
        texto: 'mateusnm2003@gmail.com',
    },
    {
        nome: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mateusnmaranhao/',
        icon: <FaLinkedin size={28} className='text-blue-500' />,
        texto: 'Conecte-se comigo no LinkedIn agora mesmo!',
    },
    {
        nome: 'GitHub',
        href: 'https://github.com/mateusmaranhao12',
        icon: <FaGithub size={28} className='text-white' />,
        texto: 'Venha conferir meus projetos e contribuições no GitHub!',
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
                <p className='text-slate-400 text-start mt-2'>Fique à vontade para entrar em contato comigo através dos links abaixo!</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-20'>
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
