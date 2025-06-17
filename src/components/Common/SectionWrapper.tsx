type SectionWrapperProps = {
    id: string
    children: React.ReactNode
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
    return (
        <section id={id} className="bg-[#0d0225] text-white px-6 pt-20 pb-5">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {children}
            </div>
        </section>
    )
}