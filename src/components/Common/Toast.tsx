"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useTheme } from "@/components/theme/theme";
import { translations, Lang, getInitialLang } from "@/app/translate/tradutor";

//Tipo de toast: sucesso ou erro
type ToastType = "success" | "error";

//Item de toast a ser exibido
type ToastItem = {
  id: string;
  type: ToastType;
  message: string;
};

//Contexto para fornecer funções de exibição de toast
type ToastContextValue = {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
};

//Criação do contexto
const ToastContext = createContext<ToastContextValue | null>(null);

//Hook para usar o contexto de toast
export function useToast() {
  //Garantia de que o hook é usado dentro do provedor
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

//Componente provedor de toast, que gerencia o estado dos toasts e os exibe
export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDark } = useTheme();
  const dark = isDark ?? false;

  //Estado dos toasts atualmente exibidos
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  //Função para remover um toast pelo ID
  const remove = useCallback((id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  }, []);

  //Efeito para remover toasts após 4 segundos
  useEffect(() => {
    if (toasts.length === 0) return;
    const timers = toasts.map((t) =>
      setTimeout(() => {
        remove(t.id);
      }, 4000),
    );
    return () => timers.forEach((id) => clearTimeout(id));
  }, [toasts, remove]);

  //Função para mostrar um novo toast
  const show = useCallback((type: ToastType, message: string) => {
    const id = String(Date.now()) + Math.random().toString(36).slice(2, 7);
    setToasts((s) => [{ id, type, message }, ...s]);
  }, []);

  //Valor do contexto, com funções para mostrar toasts de sucesso ou erro
  const value: ToastContextValue = {
    showSuccess: (msg: string) => show("success", msg),
    showError: (msg: string) => show("error", msg),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* container */}
      <div className="fixed z-50 right-4 top-4 flex flex-col gap-3 max-w-sm">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            type={t.type}
            message={t.message}
            onClose={() => remove(t.id)}
            isDark={dark}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function Toast({
  type,
  message,
  onClose,
  isDark,
  lang,
}: {
  type: ToastType;
  message: string;
  onClose: () => void;
  isDark?: boolean;
  lang?: Lang;

}) {
  // Background and text color depend on toast type; respect dark mode for shades
  const text = "text-white";
  const bg =
    type === "success"
      ? isDark
        ? "bg-green-950 border-green-600"
        : "bg-green-600 border-green-600"
      : isDark
        ? "bg-red-950 border-red-600"
        : "bg-red-600 border-red-600";

  const currentLang = lang ?? getInitialLang();
  const t = translations[currentLang as Lang] as any;

  return (
    <div
      role="status"
      className={`flex items-start gap-3 p-3 border rounded-lg shadow-sm ${bg} ${text}`}
    >
      <div
        className={`shrink-0 rounded-full w-8 h-8 flex items-center justify-center bg-white/10`}
      >
        {type === "success" ? (
          <FaCheckCircle className="w-5 h-5 text-white" />
        ) : (
          <FaTimesCircle className="w-5 h-5 text-white" />
        )}
      </div>

      <div className="flex-1 text-sm leading-tight">
        <div className={`font-medium ${text}`}>
          {type === "success" ? t.toast_sucesso_titulo : t.toast_erro_titulo}
        </div>
        <div className={`mt-1 ${text}`}>{message}</div>
      </div>

      <button
        onClick={onClose}
        className={`ml-2 opacity-80 hover:opacity-100 ${isDark ? "text-slate-300" : "text-slate-200"}`}
        aria-label="Close notification"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Toast;
