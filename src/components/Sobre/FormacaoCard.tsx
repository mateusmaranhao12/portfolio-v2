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
      className={`border border-l-3 ${isDark ? "dark-formacao-card" : "light-formacao-card"} rounded-xl p-6 backdrop-blur-sm transition mb-4 mt-4`}
    >
      <p
        className={`text-sm ${isDark ? "dark-formacao-card-universidade" : "light-formacao-card-universidade"} font-bold tracking-wide uppercase`}
      >
        {universidade}
      </p>
      <p
        className={`text-md md:text-xl font-medium ${isDark ? "dark-formacao-card-curso" : "light-formacao-card-curso"}`}
      >
        {curso}
      </p>
      {formacao ? (
        <p
          className={`text-sm tracking-wide ${isDark ? "dark-formacao-card-formacao" : "light-formacao-card-formacao"}`}
        >
          {formacao}
        </p>
      ) : null}
      {data ? (
        <p
          className={`text-sm ${isDark ? "dark-formacao-card-meta" : "light-formacao-card-meta"}`}
        >
          {data}
        </p>
      ) : null}
      {local ? (
        <p
          className={`text-sm ${isDark ? "dark-formacao-card-meta" : "light-formacao-card-meta"}`}
        >
          {local}
        </p>
      ) : null}
    </li>
  );
}
