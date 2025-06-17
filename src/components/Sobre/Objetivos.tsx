const objetivos = [
    'Vaga como Desenvolvedor Web Full-Stack',
    'Vaga como Desenvolvedor Web Front-end'
]
export default function Objetivos() {
    return (
        <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Objetivos</h3>
            <ul className="list-disc list-inside">
                {objetivos.map((objetivo, index) => (
                    <li key={index}>{objetivo}</li>
                ))}
            </ul>
        </div>
    )
}