"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "../theme/theme";

export default function DownloadCVButton({ label }: { label?: string }) {
  const { isDark } = useTheme();

  if (isDark === null) return null;

  return (
    <motion.a
      href="/curriculo_mateus_maranhao.pdf"
      download
      className={`inline-flex items-center px-4 py-2 ${isDark ? "btn-download-dark" : "btn-download-light"} rounded transition-all font-semibold`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <FaDownload className="mr-2" />
      {label || "Download CV"}
    </motion.a>
  );
}
