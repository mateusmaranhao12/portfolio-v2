import Sobre from "@/app/modules/Sobre";
import Navbar from "@/components/Header/Navbar";
import Habilidades from "./modules/Habilidades";
import Projetos from "./modules/Projetos";
import Experiencia from "./modules/Experiencia";
import Certificados from "./modules/Certificados";
import Contato from "@/app/modules/Contato";
import Me from "./modules/Me";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Me />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Experiencia />
      <Certificados />
      <Contato />
    </div>
  );
}
