'use client';
import { useTheme } from "@/components/theme/theme";
import { translations, Lang } from "@/app/translate/tradutor";

export default function Footer({ lang }: { lang?: Lang }) {
    const { isDark } = useTheme();
    const currentLang = lang ?? "pt";
    const t = translations[currentLang as Lang] as any;
    return (
        <footer className={`w-full py-6 text-center font-bold text-sm ${isDark ? "dark-footer" : "light-footer"}`}>
            &copy; {new Date().getFullYear()} Mateus Maranhao. {t.footer_direitos_reservados}
        </footer>
    );
}