type ExperienciaItemProps = {
    cargo: string
    empresa: string
    periodo: string
    descricao: string
}

export default function ExperienciaItem({ cargo, empresa, periodo, descricao }: ExperienciaItemProps) {
    return (
        <div className="bg-purple-800/10 border border-l-3 border-l-yellow-500 border-purple-800/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_15px_#ffffff22] transition">
            <h3 className="text-xl font-bold text-yellow-500">{cargo}</h3>
            <p className="text-sm text-gray-400 mb-1 mt-1">{empresa}</p>
            <p className="text-sm text-gray-500 mb-4">{periodo}</p>
            <p className="text-slate-300 leading-relaxed text-sm">{descricao}</p>
        </div>
    )
}
