export default function FormacaoCard({
  curso,
  universidade,
  data,
  local,
  formacao,
}: {
  curso: string;
  universidade: string;
  data?: string;
  local?: string;
  formacao?: string;
}) {
  return (
    <li className="bg-purple-950/10 border border-l-3 border-l-yellow-500 border-purple-900/20 rounded-xl p-6 backdrop-blur-sm hover:shadow-[0_0_15px_#ffffff22] transition mb-4 mt-4">
      <p className="text-sm text-yellow-400 font-bold tracking-wide uppercase">
        {universidade}
      </p>
      <p className="text-white font-medium text-md md:text-xl">{curso}</p>
      {formacao ? <p className="text-sm text-slate-200 tracking-wide">{formacao}</p> : null}
      {data ? <p className="text-sm text-purple-200/80">{data}</p> : null}
      {local ? <p className="text-sm text-purple-200/80">{local}</p> : null}
    </li>
  );
}
