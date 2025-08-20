'use client'

import { motion } from "framer-motion"

type DescricaoProps = {
  paragrafos: string[]
}

export default function Descricao({ paragrafos }: DescricaoProps) {
  return (
    <div className="space-y-6">
      {paragrafos.map((texto, index) => (
        <motion.p
          key={index}
          className="text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: texto }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, delay: index * 0.3 }}
        />
      ))}
    </div>
  )
}
