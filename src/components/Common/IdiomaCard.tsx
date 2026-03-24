"use client";

type IdiomaCardProps = {
  idioma: string;
  nivel: string;
  detalhe?: string;
  className?: string;
};

export default function IdiomaCard({ idioma, nivel, detalhe, className = "" }: IdiomaCardProps) {
  return (
    <li
      className={`bg-purple-950/10 border border-l-3 border-l-yellow-500 border-purple-900/20 rounded-xl p-5 backdrop-blur-sm hover:shadow-[0_0_15px_#ffffff22] transition mb-4 mt-4 ${className}`}
    >
      <p className="text-white font-medium">{idioma}</p>
      <p className="text-sm text-purple-200/80 mt-2">{nivel}</p>
      {detalhe ? <p className="text-sm text-yellow-400 mt-2">{detalhe}</p> : null}
    </li>
  );
}
