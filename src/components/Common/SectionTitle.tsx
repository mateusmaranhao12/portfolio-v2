type Props = {
    children: React.ReactNode
}

export default function SectionTitle({ children }: Props) {
    return (
        <h2 className="text-4xl font-bold text-yellow-300 border-b-2 border-yellow-300 inline-block">
            {children}
        </h2>
    )
}