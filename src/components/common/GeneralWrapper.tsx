interface GeneralWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function GeneralWrapper({
  children,
  className = "",
}: GeneralWrapperProps) {
  return (
    <section className={`w-full max-w-[1400px] px-[20px] mx-auto ${className}`}>
      {children}
    </section>
  );
}
