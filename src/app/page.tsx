import Sobre from "@/app/modules/Sobre";
import Navbar from "@/components/Header/Navbar";
import Habilidades from "./modules/Habilidades";
import Projetos from "./modules/Projetos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sobre />
      <Habilidades />
      <Projetos />
    </div>
  );
}
