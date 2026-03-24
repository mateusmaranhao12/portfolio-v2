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
      className={`border border-l-3 ${isDark ? "bg-purple-950/10 border-l-yellow-500 border-purple-900/20 hover:shadow-[0_0_15px_#ffffff22]" : "bg-white border-l-purple-500 border-slate-500/20 hover:shadow-[0_0_15px_#00000022]"} rounded-xl p-5 backdrop-blur-sm transition mb-4 mt-4 ${className}`}
    >
      <p className={`font-medium ${isDark ? "text-white" : "text-black"}`}>{idioma}</p>
      <p className={`text-sm mt-2 ${isDark ? "text-purple-200/80" : "text-slate-700/80"}`}>{nivel}</p>
      {detalhe ? (
        <p className={`text-sm mt-2 ${isDark ? "text-yellow-400" : "text-purple-500"}`}>{detalhe}</p>
      ) : null}
    </li>
  );
}
