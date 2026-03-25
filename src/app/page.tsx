"use client";
import { useState } from "react";
import Contato from "@/app/modules/Contato";
import Sobre from "@/app/modules/Sobre";
import Navbar from "@/components/Header/Navbar";
import Certificados from "./modules/Certificados";
import Experiencia from "./modules/Experiencia";
import Footer from "./modules/Footer";
import Habilidades from "./modules/Habilidades";
import Me from "./modules/Me";
import Projetos from "./modules/Projetos";
import { Lang, getInitialLang } from "@/app/translate/tradutor";

export default function Home() {
  const [lang, setLang] = useState<Lang>(() => getInitialLang());

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Me lang={lang} />
      <Sobre />
      <Habilidades />
      <Experiencia />
      <Projetos />
      <Certificados />
      <Contato />
      <Footer />
    </div>
  );
}
