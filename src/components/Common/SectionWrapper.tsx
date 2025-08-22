type SectionWrapperProps = {
    id: string
    children: React.ReactNode
    className?: string
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
    return (
        <section id={id} className={`text-white px-6 pt-20 pb-5 scroll-mt-24 ${className ?? ""}`}>
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {children}
            </div>
        </section>
    )
}