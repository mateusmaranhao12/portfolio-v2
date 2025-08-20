'use client'
import { allSkills, Skill } from "@/components/Common/Skills"
import { motion } from "framer-motion"

type ProjetoCardProps = {
    nome: string
    video: string
    texto: string
    skills?: string[]
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

export default function ProjetoCard({ nome, video, texto, skills = [] }: ProjetoCardProps) {

    const skillObjs: Skill[] = skills
        .map((s) => allSkills.find((sk) => sk.nome === s))
        .filter(Boolean) as Skill[]

    return (
        <div
            className="
            bg-purple-800/10 backdrop-blur-sm p-5 rounded-xl 
            border border-violet-700 hover:shadow-[0_0_15px_#ffffff33] 
            transition duration-300
        ">
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <video
                    src={`/videos/${video}.mp4`}
                    controls
                    className="w-full h-full object-cover"
                >
                    Seu navegador não suporta vídeo.
                </video>
            </div>

            <h3 className="text-xl font-bold text-yellow-300 mb-2">{nome}</h3>
            <p className="text-white text-sm leading-relaxed">{texto}</p>

            {skillObjs.length > 0 && (
                <motion.div
                    className="flex flex-wrap gap-2"
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
                            className="flex items-center gap-1 px-2 py-1 text-xs text-white"
                        >
                            {s.icon}
                            <span className="hidden sm:inline">{s.nome}</span>
                        </motion.span>
                    ))}

                </motion.div>


            )}
        </div>
    )
}