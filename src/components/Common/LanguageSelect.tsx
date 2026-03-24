"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/theme";

type Lang = "pt" | "en";

export default function LanguageSelect({
  onChange,
}: {
  onChange?: (lang: Lang) => void;
}) {
  const { isDark } = useTheme();
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem("lang");
      return v === "en" ? "en" : "pt";
    } catch {
      return "pt";
    }
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    onChange?.(lang);
  }, [lang, onChange]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!(e.target instanceof Node)) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const btnClasses = `text-sm rounded px-2 py-1 flex items-center gap-2 border ${isDark ? "bg-purple-950 text-white border-gray-700" : "bg-white text-gray-800 border-gray-300"}`;
  const menuClasses = `absolute right-0 mt-2 w-20 rounded shadow z-50 ${isDark ? "bg-purple-950 text-white border border-gray-700" : "bg-white text-gray-800 border border-gray-200"}`;

  return (
    <div className="relative" ref={ref}>
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className={btnClasses}
        type="button"
      >
        <span className="font-medium">{lang.toUpperCase()}</span>
        <svg
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div role="listbox" className={menuClasses}>
          <button
            role="option"
            onClick={() => {
              setLang("pt");
              setOpen(false);
            }}
            className={`w-full text-left px-3 py-2 hover:bg-opacity-10 ${isDark ? "hover:bg-white/10" : "hover:bg-gray-100"}`}
          >
            PT
          </button>
          <button
            role="option"
            onClick={() => {
              setLang("en");
              setOpen(false);
            }}
            className={`w-full text-left px-3 py-2 hover:bg-opacity-10 ${isDark ? "hover:bg-white/10" : "hover:bg-gray-100"}`}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}
