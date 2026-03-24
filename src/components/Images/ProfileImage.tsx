"use client";
import Image from "next/image";
import perfil from "@/app/assets/imgs/me.jpg";
import { motion } from "framer-motion";
import { useTheme } from "../theme/theme";

export default function ProfileImage() {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="w-64 h-64 flex justify-center "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.5 }}
    >
      <Image
        src={perfil}
        alt="Mateus Maranhão"
        width={256}
        height={256}
        className={`rounded-full object-cover border-4 ${isDark ? "border-yellow-500 shadow-[5px_5px_10px_#ffffff33]" : "border-purple-500 shadow-[5px_5px_10px_#00000033]"}`}
      />
    </motion.div>
  );
}
