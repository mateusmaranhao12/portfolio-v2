"use client";
import { getAllSkills, Skill } from "@/components/Common/Skills";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaLock, FaServer } from "react-icons/fa";
import { Button } from "../Common/Button";
import { useTheme } from "@/components/theme/theme";
import { Lang, translations } from "@/app/translate/tradutor";

type ProjetoCardProps = {
  nome: string;
  video: string;
  texto: string;
  skills?: string[];
  lang?: Lang;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  repoPrivado?: boolean;
  backendPrivado?: boolean;
  demoUrl?: string;
};

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjetoCard({
  nome,
  video,
  texto,
  skills = [],
  lang,
  githubFrontendUrl,
  githubBackendUrl,
  repoPrivado,
  backendPrivado,
  demoUrl,
}: ProjetoCardProps) {
  const { isDark } = useTheme();
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;
  const allSkills = getAllSkills(isDark ?? false, currentLang);

  const skillObjs: Skill[] = skills
    .map((s) => allSkills.find((sk) => sk.nome === s))
    .filter(Boolean) as Skill[];

  const mostrarSeloRepoPrivado = !!repoPrivado;
  const mostrarBtnFront = !!githubFrontendUrl && !repoPrivado;
  const mostrarBtnBack = !!githubBackendUrl && !repoPrivado;
  const mostrarSeloBackPrivado = !!backendPrivado && !repoPrivado;

  return (
    <motion.div
      className={`h-full flex flex-col border
            ${isDark ? "bg-purple-800/10 border-purple-800/20 hover:shadow-[0_0_15px_#ffffff33]" : "bg-white border-slate-200 hover:shadow-[0_0_15px_#00000022]"}
            backdrop-blur-sm p-5 rounded-xl 
            transition duration-300`}
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
          Seu navegador não suporta vídeo!
        </video>
      </div>

      <h3
        className={`text-xl font-bold mb-2 ${isDark ? "text-yellow-500" : "text-purple-500"}`}
      >
        {nome}
      </h3>
      <p
        className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-800"}`}
      >
        {texto}
      </p>

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
              className={`flex items-center mt-2 gap-1 px-2 py-1 text-xs ${isDark ? "text-white" : "text-black"}`}
            >
              {s.icon}
              {/*<span className="hidden sm:inline">{s.nome}</span> */}
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
            label={t.projeto_btn_ver_github}
            href={githubFrontendUrl}
            icon={<FaGithub className="text-2xl" />}
            variant="black"
            isDark={isDark ?? false}
          />
        )}

        {mostrarBtnBack && (
          <Button
            label={t.projeto_btn_ver_github_backend}
            href={githubBackendUrl}
            icon={<FaServer />}
            variant="black"
            isDark={isDark ?? false}
          />
        )}

        {demoUrl && (
          <Button
            label={t.projeto_btn_demo}
            href={demoUrl}
            icon={<FaGlobe />}
            variant="demo"
            isDark={isDark ?? false}
          />
        )}

        {mostrarSeloBackPrivado && (
          <Button
            label={t.projeto_btn_backend_privado}
            icon={<FaLock />}
            disabled
            isDark={isDark ?? false}
          />
        )}

        {mostrarSeloRepoPrivado && (
          <Button
            label={t.projeto_btn_codigo_privado}
            icon={<FaLock />}
            disabled
            isDark={isDark ?? false}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
