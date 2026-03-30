import React from "react";

type InputTextProps = {
  label: string;
  name: string;
  type?: "text" | "email";
  placeholder?: string;
  required?: boolean;
  isDark?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputText({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  isDark = false,
  onChange,
}: InputTextProps) {
  return (
    <label className="flex flex-col gap-2 w-full">
      <span
        className={`text-sm font-semibold ${isDark ? "dark-contato-field-label" : "light-contato-field-label"}`}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full rounded-lg px-4 py-3 outline-none border transition ${isDark ? "dark-contato-field" : "light-contato-field"}`}
      />
    </label>
  );
}