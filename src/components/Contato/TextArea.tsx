type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  isDark?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  label,
  name,
  placeholder,
  rows = 5,
  required = false,
  isDark = false,
  onChange,
}: TextAreaProps) {
  return (
    <label className="flex flex-col gap-2 w-full">
      <span
        className={`text-sm font-semibold ${isDark ? "dark-contato-field-label" : "light-contato-field-label"}`}
      >
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={`w-full rounded-lg px-4 py-3 outline-none border transition resize-y ${isDark ? "dark-contato-field" : "light-contato-field"}`}
        onChange={onChange}
      />
    </label>
  );
}