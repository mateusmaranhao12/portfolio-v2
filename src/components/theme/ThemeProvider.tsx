"use client";
import React, { useEffect } from "react";
import { useTheme, applyTheme } from "./theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();

  useEffect(() => {
    if (isDark === null) return;

    // Persiste a preferência e aplica o tema visualmente
    applyTheme(isDark);

    // Aplica as classes de tema ao body para garantir que o fundo e a cor do texto sejam consistentes
    try {
      const body = document.body;
      if (isDark) {
        body.classList.remove("light-bg-body", "light-text-body");
        body.classList.add("dark-bg-body", "dark-text-body");
      } else {
        body.classList.remove("dark-bg-body", "dark-text-body");
        body.classList.add("light-bg-body", "light-text-body");
      }
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  return <>{children}</>;
}
