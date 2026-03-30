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
            ? "dark-contato-item"
            : "light-contato-item"
        }`}
    >
      <div className="flex gap-2 mb-2">
        <div className="shrink-0">{icon}</div>
        <h3 className={`text-lg font-semibold ${isDark ? "dark-contato-item-titulo" : "light-contato-item-titulo"}`}>{nome}</h3>
      </div>
      {texto && <span className={`text-sm ${isDark ? "dark-contato-item-texto" : "light-contato-item-texto"}`}>{texto}</span>}
    </a>
  );
}
