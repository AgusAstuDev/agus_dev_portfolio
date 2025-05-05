// React-Next:
import Link from "next/link";
import { useContext } from "react";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";
// Assets
import { CircularText } from "../icons_svg/icons";

export default function HireMe() {
  const { locale } = useContext(langContext);
  const { hireMe } = TEXTS_HOME[locale];
  return (
    <div className="hidden fixed left-4 bottom-4 lg:flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:agusastudillo.dev@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-dark text-light shadow-md border border-solid border-dark w-[100px] h-[100px] rounded-full font-semibold hover:bg-light hover:text-dark ease-in-out duration-300"
        >
          {hireMe}
        </Link>
      </div>
    </div>
  );
}
