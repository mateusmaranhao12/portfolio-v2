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
        body.classList.remove("bg-white", "text-gray-800");
        body.classList.add("bg-purple-980", "text-white");
      } else {
        body.classList.remove("bg-purple-980", "text-white");
        body.classList.add("bg-white", "text-gray-800");
      }
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  return <>{children}</>;
}
