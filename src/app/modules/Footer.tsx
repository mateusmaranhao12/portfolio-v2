'use client';
import { useTheme } from "@/components/theme/theme";
import { translations, Lang } from "@/app/translate/tradutor";

export default function Footer({ lang }: { lang?: Lang }) {
    const { isDark } = useTheme();
    const currentLang = lang ?? "pt";
    const t = translations[currentLang as Lang] as any;
    return (
        <footer className={`w-full py-6 text-center font-bold text-sm ${isDark ? "bg-purple-950 text-slate-400" : "bg-slate-100 text-slate-800"}`}>
            &copy; {new Date().getFullYear()} Mateus Maranhao. {t.footer_direitos_reservados}
        </footer>
    );
}