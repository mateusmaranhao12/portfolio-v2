type ExperienciaItemProps = {
    cargo: string
    empresa: string
    periodo: string
    descricao: string
}

export default function ExperienciaItem({ cargo, empresa, periodo, descricao }: ExperienciaItemProps) {
    return (
        <div className="bg-purple-800/10 border border-l-3 border-l-yellow-500 border-purple-800/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_15px_#ffffff22] transition">
            <p className="text-sm text-yellow-400 tracking-wider font-bold uppercase">{empresa}</p>
            <h3 className="md:text-2xl text-xl font-bold text-white mt-1 mb-1">{cargo}</h3>
            <p className="text-sm text-gray-400 mb-4">{periodo}</p>
            <p className="text-slate-300 leading-relaxed text-sm">{descricao}</p>
        </div>
    )
}
