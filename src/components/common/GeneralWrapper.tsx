interface GeneralWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function GeneralWrapper({
  children,
  className = "",
}: GeneralWrapperProps) {
  return (
    <section
      className={`w-full max-w-[1300px] px-[20px] mx-auto lg:mt-0 bg-light ${className}`}
    >
      {children}
    </section>
  );
}
