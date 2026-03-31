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
        isDark ? "dark-contato-card" : "light-contato-card"
      } ${className}`}
    >
      {children}
    </div>
  );
}