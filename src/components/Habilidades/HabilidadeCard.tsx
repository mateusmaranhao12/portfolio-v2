import { JSX } from "react"

type HabilidadeCardProps = {
    nome: string
    icon: JSX.Element
}

export default function HabilidadeCard({ nome, icon }: HabilidadeCardProps) {
    return (
        <div className="
            flex flex-col items-center text-center 
            bg-purple-800/10 backdrop-blur-sm rounded-xl p-4
            transition-transform duration-300 group hover:scale-105 
            shadow-[0_0_10px_#ffffff22]
        ">
            <div className="mb-2 group-hover:brightness-110">{icon}</div>
            <span className="text-white mt-1 font-medium">{nome}</span>
        </div>
    )
}