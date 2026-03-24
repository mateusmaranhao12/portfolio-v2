'use client';
import { useTheme } from "@/components/theme/theme";
export default function Footer() {
    const { isDark } = useTheme();
    return (
        <footer className={`w-full py-6 text-center font-bold text-sm ${isDark ? "bg-purple-950 text-slate-400" : "bg-slate-100 text-slate-800"}`}>
            &copy; {new Date().getFullYear()} Mateus Maranhao. Todos os direitos reservados.
        </footer>
    );
}