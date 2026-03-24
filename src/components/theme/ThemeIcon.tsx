"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./theme";

export default function ThemeIcon() {
  const { isDark, toggleTheme } = useTheme();

  if (isDark === null) return null;

  return (
    <button
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
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
