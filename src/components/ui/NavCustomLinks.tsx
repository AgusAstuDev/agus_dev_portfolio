// React-Next:
import { useContext } from "react";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";
// Components:
import CustomLink from "../ui/CustomLink";

export default function NavCustomLinks() {
  const { locale } = useContext(langContext);
  const { home, about, experience, contact } = TEXTS_HOME[locale];
  return (
    <nav className="flex items-center flex-col gap-[20px] lg:flex-row">
      <CustomLink
        href={"/"}
        text={home}
        className="w-max h-auto inline-block"
      />
      <CustomLink
        href={"/about"}
        text={about}
        className="w-max h-auto inline-block"
      />
      <CustomLink
        href={"/experience"}
        text={experience}
        className="w-max h-auto inline-block"
      />
      <CustomLink
        href={"/contact"}
        text={contact}
        className="w-max h-auto inline-block"
      />
    </nav>
  );
}
