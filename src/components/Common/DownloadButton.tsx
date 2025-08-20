'use client'
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa"

export default function DownloadCVButton() {
    return (
        <motion.a
            href="/curriculo_mateus_maranhao.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition-all font-semibold"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <FaDownload className="mr-2" />
            Download CV
        </motion.a>
    );
}
