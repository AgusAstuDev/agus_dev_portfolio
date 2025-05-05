// React-Next:
import React from "react";
import { useContext } from "react";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";
import GeneralWrapper from "../common/GeneralWrapper";

export default function Footer() {
  const { locale } = useContext(langContext);
  const { footer1, footer2 } = TEXTS_HOME[locale];
  return (
    <footer className="w-full h-auto border-t-2 border-solid border-dark font-medium text-lg ">
      <GeneralWrapper className="h-[90px] flex justify-between items-center flex-col-reverse py-[15px] lg:flex-row">
        <p>
          {new Date().getFullYear()} &copy; {footer1}
        </p>
        <p>
          {footer2[0]} <span className=" text-primary">&#9825;</span>{" "}
          {footer2[1]}
        </p>
      </GeneralWrapper>
    </footer>
  );
}
