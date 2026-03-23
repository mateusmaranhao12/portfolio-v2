export default function Footer() {
    return (
        <footer className="bg-purple-950 w-full py-6 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Mateus Maranhao. Todos os direitos reservados.
        </footer>
    );
}