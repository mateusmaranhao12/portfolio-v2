type ProjetoCardProps = {
    nome: string
    video: string
    texto: string
}

export default function ProjetoCard({ nome, video, texto }: ProjetoCardProps) {
    return (
        <div
            className="
            bg-purple-800/10 backdrop-blur-sm p-5 rounded-xl 
            border border-violet-700 hover:shadow-[0_0_15px_#ffffff33] 
            transition duration-300
    ">
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <video
                    src={`/videos/${video}.mp4`}
                    controls
                    className="w-full h-full object-cover"
                >
                    Seu navegador não suporta vídeo.
                </video>
            </div>

            <h3 className="text-xl font-bold text-yellow-300 mb-2">{nome}</h3>
            <p className="text-white text-sm leading-relaxed">{texto}</p>
        </div>
    )
}