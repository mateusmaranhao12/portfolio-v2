type ContatoItemProps = {
  nome: string;
  href: string;
  icon: React.ReactNode;
  texto?: string;
  isDark?: boolean;
};

export default function ContatoItem({
  href,
  icon,
  texto,
  nome,
  isDark = false,
}: ContatoItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex flex-col items-start gap-1 border-l-3 border p-4 rounded-xl hover:scale-[1.02] transition 
        ${
          isDark
            ? "border-l-yellow-500 border-purple-900/20 hover:shadow-[0_0_15px_#ffffff22] hover:bg-purple-400/20"
            : "border-l-purple-500 border-slate-500/20 hover:shadow-[0_0_15px_#00000022] hover:bg-slate-200/50"
        }`}
    >
      <div className="flex gap-2 mb-2">
        <div className="shrink-0">{icon}</div>
        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>{nome}</h3>
      </div>
      {texto && <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-800"}`}>{texto}</span>}
    </a>
  );
}
