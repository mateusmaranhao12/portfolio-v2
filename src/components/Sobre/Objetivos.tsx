const objetivos = [
    'Atuar como Desenvolvedor Web Full-Stack',
    ' Contribuir em projetos como Desenvolvedor Front-end, utilizando tecnologias modernas'
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