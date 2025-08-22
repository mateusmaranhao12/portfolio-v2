type ContatoItemProps = {
    nome: string
    href: string
    icon: React.ReactNode
    texto: string
}

export default function ContatoItem({ href, icon, texto }: ContatoItemProps) {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-4 bg-purple-800/10 border border-purple-800/20 p-4 rounded-xl hover:shadow-[0_0_15px_#ffffff22] hover:bg-purple-400/20 hover:scale-[1.02] transition'
        >
            <div className="shrink-0">{icon}</div>
            <span className='text-white text-sm'>{texto}</span>
        </a>
    )
}