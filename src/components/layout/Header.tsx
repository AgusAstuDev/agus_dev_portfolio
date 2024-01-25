// React-Next:
import React from "react";
import { useContext } from "react";
import Link from "next/link";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";
// Components:
import Logo from "./Logo";

export default function Header() {
  const { locale } = useContext(langContext);
  const { home, about, experience, contact } = TEXTS_HOME[locale];
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
        <Link href={"/"}>{home}</Link>
        <Link href={"/about"}>{about}</Link>
        <Link href={"/experience"}>{experience}</Link>
        <Link href={"/contact"}>{contact}</Link>
      </nav>
      <nav>
        <Link href={"/"}>RS</Link>
        <Link href={"/"}>RS</Link>
        <Link href={"/"}>RS</Link>
        <Link href={"/"}>RS</Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
