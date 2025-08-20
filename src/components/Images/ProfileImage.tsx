'use client'
import Image from 'next/image'
import perfil from '@/app/assets/imgs/me.jpg'
import { motion } from 'framer-motion'

export default function ProfileImage() {
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
                className="rounded-full object-cover shadow-[5px_5px_10px_#ffffff33] border-4 border-yellow-300"
            />
        </motion.div>
    )
}