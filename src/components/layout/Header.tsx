// React-Next:
import React from "react";
import { useContext } from "react";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";

export default function Header() {
  const { locale } = useContext(langContext);
  const { title } = TEXTS_HOME[locale];
  return <div className="font-roboto text-xl">{title}</div>;
}
