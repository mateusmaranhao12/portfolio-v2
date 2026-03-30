"use client";

type IdiomaCardProps = {
  idioma: string;
  nivel: string;
  detalhe?: string;
  className?: string;
  isDark: boolean;
};

export default function IdiomaCard({
  idioma,
  nivel,
  detalhe,
  className = "",
  isDark,
}: IdiomaCardProps) {
  return (
    <li
      className={`border border-l-3 ${isDark ? "dark-idioma-card" : "light-idioma-card"} rounded-xl p-5 backdrop-blur-sm transition mb-4 mt-4 ${className}`}
    >
      <p className={`font-medium ${isDark ? "dark-idioma-card-idioma" : "light-idioma-card-idioma"}`}>{idioma}</p>
      <p className={`text-sm mt-2 ${isDark ? "dark-idioma-card-nivel" : "light-idioma-card-nivel"}`}>{nivel}</p>
      {detalhe ? (
        <p className={`text-sm mt-2 ${isDark ? "dark-idioma-card-detalhe" : "light-idioma-card-detalhe"}`}>{detalhe}</p>
      ) : null}
    </li>
  );
}
