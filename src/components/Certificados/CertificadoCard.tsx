"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type CertificadoItemProps = {
  nome: string;
  imagem: string;
  descricao: string;
  isDark?: boolean;
};

const itemVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function CertificadoItem({
  nome,
  imagem,
  descricao,
  isDark = false,
}: CertificadoItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`border rounded-xl p-4 backdrop-blur-sm transition ${isDark ? "bg-purple-800/10 border-purple-800/20 hover:shadow-[0_0_15px_#ffffff22]" : "bg-white border-slate-200 hover:shadow-[0_0_15px_#00000022]"}`}
    >
      <div className="w-full overflow-hidden rounded-lg mb-3">
        <Image
          src={imagem}
          alt={nome}
          width={400}
          height={200}
          className="object-cover w-full h-full rounded"
        />
      </div>
      <p
        className={`text-start text-xl font-bold ${isDark ? "text-yellow-500" : "text-purple-500"}`}
      >
        {nome}
      </p>
      <p
        className={`text-start text-sm font-light ${isDark ? "text-slate-300" : "text-slate-800"}`}
      >
        {descricao}
      </p>
    </motion.div>
  );
}
