// React-Next:
import { useRouter } from "next/router";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  text: string;
  className: string;
}

export default function CustomLink({ href, text, className }: CustomLinkProps) {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group `}>
      {text}
      <div
        className={`absolute h-[2px] bg-dark inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
}
