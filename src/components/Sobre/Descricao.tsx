type DescricaoProps = {
    paragrafos: string[]
}

export default function Descricao({paragrafos}: DescricaoProps) {
    return (
        <div className="space-y-6">
            {paragrafos.map((texto, index) => (
                <p key={index} className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: texto }} />
            ))}
        </div>
    )
}