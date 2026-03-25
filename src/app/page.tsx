"use client";
import { useEffect, useState } from "react";
import Contato from "@/app/modules/Contato";
import Sobre from "@/app/modules/Sobre";
import Navbar from "@/components/Header/Navbar";
import Certificados from "./modules/Certificados";
import Experiencia from "./modules/Experiencia";
import Footer from "./modules/Footer";
import Habilidades from "./modules/Habilidades";
import Me from "./modules/Me";
import Projetos from "./modules/Projetos";
import { Lang } from "@/app/translate/tradutor";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");

  // read persisted lang on client after mount to avoid SSR mismatch
  useEffect(() => {
    try {
      const v = localStorage.getItem("lang");
      if (v === "en" || v === "pt") setLang(v as Lang);
    } catch {}
  }, []);

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Me lang={lang} />
      <Sobre lang={lang} />
      <Habilidades lang={lang} />
      <Experiencia lang={lang} />
      <Projetos lang={lang} />
      <Certificados lang={lang} />
      <Contato lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
