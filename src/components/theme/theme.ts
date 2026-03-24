import { useEffect, useState } from "react";

const THEME_KEY = "theme";

/// Aplica o tema e salva a preferência no localStorage
export function applyTheme(isDark: boolean) {
  try {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
    // Notifica outros listeners na mesma janela
    try {
      window.dispatchEvent(new CustomEvent("theme-change", { detail: { isDark } }));
    } catch (e) {
      // ignore
    }
  } catch (e) {
    // ignore
  }
}

/// Retorna "dark", "light" ou null se não houver preferência armazenada
export function getStoredTheme(): "dark" | "light" | null {
  try {
    const s = localStorage.getItem(THEME_KEY);
    return s === "dark" ? "dark" : s === "light" ? "light" : null;
  } catch (e) {
    return null;
  }
}

/// Retorna o tema inicial baseado na preferência armazenada ou na classe do documento
export function getInitialTheme(): boolean {
  try {
    const stored = getStoredTheme();
    if (stored) return stored === "dark";
    return document.documentElement.classList.contains("dark");
  } catch (e) {
    return false;
  }
}

/// Hook para gerenciar o estado do tema e fornecer uma função para alternar-lo
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

  /// Alterna o tema e salva a preferência
  function toggleTheme() {
    if (isDark === null) return;
    const next = !isDark;
    applyTheme(next);
    setIsDark(next);
  }

  // Escuta mudanças vindas de outros componentes/abas
  useEffect(() => {
    function onThemeChange(e: Event) {
      try {
        const detail = (e as CustomEvent)?.detail;
        if (detail && typeof detail.isDark === "boolean") {
          setIsDark(detail.isDark);
          return;
        }
      } catch (err) {
        // fallthrough
      }

      // fallback: ler do localStorage
      const stored = getStoredTheme();
      if (stored === "dark") setIsDark(true);
      else if (stored === "light") setIsDark(false);
    }

    function onStorage(e: StorageEvent) {
      if (e.key === THEME_KEY) {
        const value = e.newValue;
        if (value === "dark") setIsDark(true);
        else if (value === "light") setIsDark(false);
      }
    }

    window.addEventListener("theme-change", onThemeChange as EventListener);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("theme-change", onThemeChange as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return { isDark, toggleTheme, setTheme: applyTheme } as const;
}
