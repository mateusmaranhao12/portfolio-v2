'use client'
import SectionWrapper from '@/components/Common/SectionWrapper'
import SectionTitle from '@/components/Common/SectionTitle'
import HabilidadeCard from '@/components/Habilidades/HabilidadeCard'
import { skillsByCategory } from '@/components/Common/Skills'
import { motion } from 'framer-motion';

export default function Habilidades() {
    return (
        <SectionWrapper id="habilidades">
            <div className="w-full">
                <SectionTitle>Habilidades</SectionTitle>

                {Object.entries(skillsByCategory).map(([categoria, lista]) => (
                    <div key={categoria} className="mb-10">
                        <motion.h3
                            className="text-lg font-semibold text-purple-400 mb-4 mt-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        >
                            {categoria}
                        </motion.h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {lista.map((item, index) => (
                                <HabilidadeCard
                                    key={index}
                                    nome={item.nome}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>

    );
}
