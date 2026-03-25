"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./theme";
import { translations, getInitialLang, Lang } from "@/app/translate/tradutor";

export default function ThemeIcon({ lang }: { lang?: Lang }) {
  const { isDark, toggleTheme } = useTheme();

  if (isDark === null) return null;

  const currentLang = lang ?? getInitialLang();
  const t = translations[currentLang as Lang] as any;

  return (
    <button
      aria-label={isDark ? t.activate_light : t.activate_dark}
      title={isDark ? t.theme_light : t.theme_dark}
      onClick={toggleTheme}
      className={`p-2 rounded-md ${isDark ? "hover:bg-white/5" : "hover:bg-gray-200"} transition`}
    >
      {isDark ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-900" />
      )}
    </button>
  );
}
