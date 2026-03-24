export default function FormacaoCard({
  curso,
  universidade,
  data,
  local,
  formacao,
  isDark,
}: {
  curso: string;
  universidade: string;
  data?: string;
  local?: string;
  formacao?: string;
  isDark: boolean;
}) {
  return (
    <li
      className={`border border-l-3 ${isDark ? "bg-purple-950/10 border-l-yellow-500 border-purple-900/20 hover:shadow-[0_0_15px_#ffffff22]" : "bg-white border-l-purple-500 border-slate-500/20 hover:shadow-[0_0_15px_#00000022]"} rounded-xl p-6 backdrop-blur-sm transition mb-4 mt-4`}
    >
      <p
        className={`text-sm ${isDark ? "text-yellow-400" : "text-purple-500"} font-bold tracking-wide uppercase`}
      >
        {universidade}
      </p>
      <p
        className={`text-md md:text-xl font-medium ${isDark ? "text-white" : "text-black"}`}
      >
        {curso}
      </p>
      {formacao ? (
        <p
          className={`text-sm tracking-wide ${isDark ? "text-slate-200" : "text-slate-800"}`}
        >
          {formacao}
        </p>
      ) : null}
      {data ? (
        <p
          className={`text-sm ${isDark ? "text-purple-200/80" : "text-slate-700/80"}`}
        >
          {data}
        </p>
      ) : null}
      {local ? (
        <p
          className={`text-sm ${isDark ? "text-purple-200/80" : "text-slate-700/80"}`}
        >
          {local}
        </p>
      ) : null}
    </li>
  );
}
