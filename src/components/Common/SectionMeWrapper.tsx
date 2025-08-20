type SectionMeWrapperProps = {
    children: React.ReactNode
}

export default function SectionMeWrapper({ children }: SectionMeWrapperProps) {
    return (
        <section className="flex flex-col md:flex-row gap-10 text-center md:text-left py-16 bg-gradient-to-b mt-15">
            {children}
        </section>
    )
}