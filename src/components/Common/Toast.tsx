"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              type={t.type}
              message={t.message}
              onClose={() => remove(t.id)}
              isDark={dark}
            />
          ))}
        </AnimatePresence>
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
  const toneClass =
    type === "success"
      ? isDark
        ? "dark-toast-success"
        : "light-toast-success"
      : isDark
        ? "dark-toast-error"
        : "light-toast-error";

  const textClass = isDark ? "dark-toast-text" : "light-toast-text";
  const iconWrapClass = isDark ? "dark-toast-icon-wrap" : "light-toast-icon-wrap";
  const iconClass = isDark ? "dark-toast-icon" : "light-toast-icon";
  const closeClass = isDark ? "dark-toast-close" : "light-toast-close";

  const currentLang = lang ?? getInitialLang();
  const t = translations[currentLang as Lang] as any;

  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, x: 24, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 24, scale: 0.98, transition: { duration: 0.18 } }}
      transition={{ type: "spring", stiffness: 700, damping: 40 }}
      className={`flex items-start md:items-center gap-3 p-3 border rounded-lg shadow-sm ${toneClass} ${textClass}`}
    >
      <div className={`shrink-0 rounded-full w-8 h-8 flex items-center justify-center ${iconWrapClass}`}>
        {type === "success" ? (
          <FaCheckCircle className={`w-5 h-5 ${iconClass}`} />
        ) : (
          <FaTimesCircle className={`w-5 h-5 ${iconClass}`} />
        )}
      </div>

      <div className="flex-1 text-sm leading-tight">
        <div className={`font-medium ${textClass}`}>
          {type === "success" ? t.toast_sucesso_titulo : t.toast_erro_titulo}
        </div>
        <div className={`mt-1 ${textClass}`}>{message}</div>
      </div>

      <button
        onClick={onClose}
        className={`ml-2 opacity-80 hover:opacity-100 ${closeClass}`}
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
    </motion.div>
  );
}

export default Toast;
