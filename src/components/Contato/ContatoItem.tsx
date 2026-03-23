type ContatoItemProps = {
  nome: string;
  href: string;
  icon: React.ReactNode;
  texto?: string;
};

export default function ContatoItem({
  href,
  icon,
  texto,
  nome,
}: ContatoItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-start gap-1 bg-purple-800/10 border border-purple-800/20 p-4 rounded-xl hover:shadow-[0_0_15px_#ffffff22] hover:bg-purple-400/20 hover:scale-[1.02] transition"
    >
      <div className="flex gap-2 mb-2">
        <div className="shrink-0">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{nome}</h3>
      </div>
      {texto && <span className="text-slate-400 text-sm">{texto}</span>}
    </a>
  );
}