export default function Navbar() {

    const menuItems = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Habilidades', href: '#habilidades' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Experiência', href: '#experiencia' },
        { label: 'Certificados', href: '#certificados' },
        { label: 'Contato', href: '#contato' },
    ]

    return (
        <div className="bg-purple-900 shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Mateus Maranhão</h1>
                <ul className="flex gap-6">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="relative text-gray-300 font-medium hover:text-yellow-300 transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
