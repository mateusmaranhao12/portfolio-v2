type TextBlockProps = {
  children: React.ReactNode;
};

export default function TextBlock({ children }: TextBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center md:items-start max-w-xl md:w-2/3">
      {children}
    </div>
  );
}
