// React-Next:
import React from "react";
import { useContext } from "react";
import Image from "next/image";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";
// Assets:
import logo_agus from "../../../public/favicon.png";

export default function Footer() {
  const { locale } = useContext(langContext);
  const { footer1, footer2 } = TEXTS_HOME[locale];
  return (
    <footer className="w-full h-auto border-t-2 border-solid border-dark font-medium text-lg mt-20">
      <div className="w-full h-auto flex justify-around items-center py-8">
        <p>
          {new Date().getFullYear()} &copy; {footer1}
        </p>
        <p>
          {footer2[0]} <span className=" text-primary">&#9825;</span>{" "}
          {footer2[1]}
        </p>
        <Image
          src={logo_agus}
          alt="Logo AgusAstuDev"
          className="w-[60px] h-auto"
        ></Image>
      </div>
    </footer>
  );
}
