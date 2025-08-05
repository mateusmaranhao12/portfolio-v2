import Image from "next/image"

type CertificadoItemProps = {
    nome: string
    imagem: string
    descricao: string
}

export default function CertificadoItem({ nome, imagem, descricao }: CertificadoItemProps) {
    return (
        <div
            className="bg-purple-800/10 border border-purple-700 rounded-xl p-4 backdrop-blur-sm hover:shadow-[0_0_15px_#ffffff22] transition"
        >
            <div className="w-full overflow-hidden rounded-lg mb-3">
                <Image
                    src={imagem}
                    alt={nome}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full rounded"
                />
            </div>
            <p className="text-yellow-500 text-start text-xl font-bold">{nome}</p>
            <p className="text-white text-start text-sm font-light">{descricao}</p>
        </div>
    )
}