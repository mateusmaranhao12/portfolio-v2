'use client'
import { allSkills, Skill } from "@/components/Common/Skills"
import { motion } from "framer-motion"
import { FaGithub, FaLock, FaServer } from "react-icons/fa"
import { Button } from '../Common/Button'

type ProjetoCardProps = {
    nome: string
    video: string
    texto: string
    skills?: string[]
    githubFrontendUrl?: string
    githubBackendUrl?: string
    repoPrivado?: boolean
    backendPrivado?: boolean
}

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
}

const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
}

export default function ProjetoCard({
    nome,
    video,
    texto,
    skills = [],
    githubFrontendUrl,
    githubBackendUrl,
    repoPrivado,
    backendPrivado,
}: ProjetoCardProps) {

    const skillObjs: Skill[] = skills
        .map((s) => allSkills.find((sk) => sk.nome === s))
        .filter(Boolean) as Skill[]

    const mostrarSeloRepoPrivado = !!repoPrivado
    const mostrarBtnFront = !!githubFrontendUrl && !repoPrivado
    const mostrarBtnBack = !!githubBackendUrl && !repoPrivado
    const mostrarSeloBackPrivado = !!backendPrivado && !repoPrivado

    return (
        <motion.div
            className="h-full flex flex-col
            bg-purple-800/10 backdrop-blur-sm p-5 rounded-xl 
            border border-purple-800/20 hover:shadow-[0_0_15px_#ffffff33] 
            transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
        >
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <video
                    src={`/videos/${video}.mp4`}
                    controls
                    className="w-full h-full object-cover"
                >
                    Seu navegador não suporta vídeo.
                </video>
            </div>

            <h3 className="text-xl font-bold text-yellow-500 mb-2">{nome}</h3>
            <p className="text-white text-sm leading-relaxed">{texto}</p>

            {skillObjs.length > 0 && (
                <motion.div
                    className="mt-auto flex flex-wrap justify-center md:justify-start gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                >

                    {skillObjs.map((s) => (
                        <motion.span
                            key={s.nome}
                            variants={item}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            title={s.nome}
                            className="flex items-center mt-2 gap-1 px-2 py-1 text-xs text-white"
                        >
                            {s.icon}
                            <span className="hidden sm:inline">{s.nome}</span>
                        </motion.span>
                    ))}

                </motion.div>
            )}

            <motion.div
                className="mt-5 flex gap-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
            >

                {mostrarBtnFront && (
                    <Button
                        label="Ver no GitHub"
                        href={githubFrontendUrl}
                        icon={<FaGithub className="text-2xl" />}
                        variant="black"
                    />
                )}

                {mostrarBtnBack && (
                    <Button
                        label="Ver no GitHub (Back-end)"
                        href={githubBackendUrl}
                        icon={<FaServer />}
                        variant="black"
                    />
                )}

                {mostrarSeloBackPrivado && (
                    <Button
                        label="Back-end privado"
                        icon={<FaLock />}
                        disabled
                    />
                )}

                {mostrarSeloRepoPrivado && (
                    <Button
                        label="Código privado"
                        icon={<FaLock />}
                        disabled
                    />
                )}
            </motion.div>
        </motion.div>
    )
}