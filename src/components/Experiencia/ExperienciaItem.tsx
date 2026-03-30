type ExperienciaItemProps = {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
  isDark: boolean;
};

export default function ExperienciaItem({
  cargo,
  empresa,
  periodo,
  descricao,
  isDark,
}: ExperienciaItemProps) {
  return (
    <div
      className={`
            border border-l-3 rounded-xl p-6 backdrop-blur-sm transition 
            ${
              isDark
                ? "dark-experiencia-card"
                : "light-experiencia-card"
            }`}
    >
      <p className={`text-sm tracking-wider font-bold uppercase ${isDark ? "dark-experiencia-card-empresa" : "light-experiencia-card-empresa"}`}>
        {empresa}
      </p>
      <h3 className={`md:text-2xl text-xl font-bold mt-1 mb-1 ${isDark ? "dark-experiencia-card-cargo" : "light-experiencia-card-cargo"}`}>
        {cargo}
      </h3>
      <p className={`text-sm mb-4 ${isDark ? "dark-experiencia-card-periodo" : "light-experiencia-card-periodo"}`}>{periodo}</p>
      <p className={`leading-relaxed text-sm ${isDark ? "dark-experiencia-card-descricao" : "light-experiencia-card-descricao"}`}>{descricao}</p>
    </div>
  );
}
