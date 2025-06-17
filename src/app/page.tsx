import Navbar from "@/components/Header/Navbar";
import Sobre from "@/app/modules/Sobre";
import Habilidades from "./modules/Habilidades";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sobre />
      <Habilidades />
    </div>
  );
}
