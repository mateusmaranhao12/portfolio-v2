import Sobre from "@/app/modules/Sobre";
import Navbar from "@/components/Header/Navbar";
import Habilidades from "./modules/Habilidades";
import Projetos from "./modules/Projetos";
import Experiencia from "./modules/Experiencia";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Experiencia />
    </div>
  );
}
