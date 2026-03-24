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
                ? "bg-purple-800/10 text-white border-l-yellow-500 border-purple-800/20 hover:shadow-[0_0_15px_#ffffff22]"
                : "bg-white text-black border-l-purple-500 border-slate-200 hover:shadow-[0_0_15px_#00000022]"
            }`}
    >
      <p className={`text-sm tracking-wider font-bold uppercase ${isDark ? "text-yellow-400" : "text-purple-500"}`}>
        {empresa}
      </p>
      <h3 className={`md:text-2xl text-xl font-bold mt-1 mb-1 ${isDark ? "text-white" : "text-black"}`}>
        {cargo}
      </h3>
      <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{periodo}</p>
      <p className={`leading-relaxed text-sm ${isDark ? "text-slate-300" : "text-slate-800"}`}>{descricao}</p>
    </div>
  );
}
