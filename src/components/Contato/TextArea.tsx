type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  isDark?: boolean;
};

export default function TextArea({
  label,
  name,
  placeholder,
  rows = 5,
  required = false,
  isDark = false,
}: TextAreaProps) {
  return (
    <label className="flex flex-col gap-2 w-full">
      <span
        className={`text-sm font-semibold ${
          isDark ? "text-slate-200" : "text-slate-800"
        }`}
      >
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={`w-full rounded-lg px-4 py-3 outline-none border transition resize-y ${
          isDark
            ? "bg-purple-950 border-purple-900/30 text-white placeholder:text-slate-400 focus:border-yellow-500"
            : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-purple-500"
        }`}
      />
    </label>
  );
}