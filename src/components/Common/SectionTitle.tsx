"use client";
import { motion } from "framer-motion";
import { useTheme } from "../theme/theme";

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  const { isDark } = useTheme();

  return (
    <motion.h2
      className={`text-4xl font-bold ${isDark ? "dark-text-section-title-dark" : "light-text-section-title-light"} border-l-6 pl-5 inline-block`}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {children}
    </motion.h2>
  );
}
