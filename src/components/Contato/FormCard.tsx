type FormCardProps = {
  children: React.ReactNode;
  isDark?: boolean;
  className?: string;
};

export default function FormCard({
  children,
  isDark = false,
  className = "",
}: FormCardProps) {
  return (
    <div
      className={`border rounded-xl p-5 md:p-6 transition backdrop-blur-sm ${
        isDark
          ? "bg-purple-980 border-purple-900/20 hover:shadow-[0_0_15px_#ffffff22]"
          : "bg-white border-slate-200 hover:shadow-[0_0_15px_#00000022]"
      } ${className}`}
    >
      {children}
    </div>
  );
}