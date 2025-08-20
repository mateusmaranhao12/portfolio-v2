'use client'
import { FaDownload } from "react-icons/fa"

export default function DownloadCVButton() {
    return (
        <a
            href="/curriculo_mateus_maranhao.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition-all font-semibold"
        >
            <FaDownload className="mr-2" />
            Download CV
        </a>
    );
}
