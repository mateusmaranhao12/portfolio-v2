import { useEffect, useState } from "react";

const THEME_KEY = "theme";

export function applyTheme(isDark: boolean) {
  try {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  } catch (e) {
    // ignore
  }
}

export function getStoredTheme(): "dark" | "light" | null {
  try {
    const s = localStorage.getItem(THEME_KEY);
    return s === "dark" ? "dark" : s === "light" ? "light" : null;
  } catch (e) {
    return null;
  }
}

export function getInitialTheme(): boolean {
  try {
    const stored = getStoredTheme();
    if (stored) return stored === "dark";
    return document.documentElement.classList.contains("dark");
  } catch (e) {
    return false;
  }
}

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = getStoredTheme();
      if (stored === "dark") {
        applyTheme(true);
        setIsDark(true);
        return;
      }
      if (stored === "light") {
        applyTheme(false);
        setIsDark(false);
        return;
      }

      const hasClass = document.documentElement.classList.contains("dark");
      setIsDark(hasClass);
    } catch (e) {
      setIsDark(false);
    }
  }, []);

  function toggleTheme() {
    if (isDark === null) return;
    const next = !isDark;
    applyTheme(next);
    setIsDark(next);
  }

  return { isDark, toggleTheme, setTheme: applyTheme } as const;
}
