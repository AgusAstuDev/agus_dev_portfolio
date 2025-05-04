// React-Next:
import React from "react";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
// Context:
import { langContext } from "@/context/langContext";
// Image:
import img_ia from "@/assets/home/IA_profile_agus.png";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";
// Components:
import AnimatedText from "../common/AnimatedText";
// Framer motion
import { motion } from "framer-motion";
// Animated icons
import { LinkArrow } from "@/components/icons_svg/icons";

const FadeOut = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function HomeInfo() {
  const { locale } = useContext(langContext);
  const { title1, title2, paragraph, resume, resumeHref, contact } =
    TEXTS_HOME[locale];

  return (
    <div className="w-full h-auto max-h-[90vh] flex justify-around items-center overflow-hidden">
      <div className="w-full max-w-[700px] h-auto">
        <Image
          src={img_ia}
          alt="Imagen IA Agus"
          className="w-full h-auto object-cover object-bottom"
          quality={100}
          priority
        ></Image>
      </div>
      <div className="w-1/2 flex flex-col items-center self-center max-w-[720px]">
        <AnimatedText
          arrayTexts={[title1]}
          className="w-full m-auto flex flex-wrap text-dark font-bold text-6xl text-left"
        />
        <AnimatedText
          arrayTexts={[title2]}
          className="w-full m-auto flex flex-wrap text-dark font-bold text-6xl text-left"
        />
        <motion.p
          variants={FadeOut}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 2 }}
          className="text-roboto text-[16px] leading-[24px] mb-[30px]"
        >
          {paragraph}
        </motion.p>
        <motion.div
          className="w-full h-auto flex flex-row gap-6"
          variants={FadeOut}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Link
            href={resumeHref}
            target="_blank"
            className="w-auto h-auto py-[10px] px-[20px] border-solid border-dark border-[2px] rounded-md text-roboto font-bold text-[18px] leading-[20px] text-light bg-dark hover:bg-light hover:text-dark transition-colors ease-linear duration-200 flex"
          >
            {resume}
            <LinkArrow className="w-[20px] h-auto ml-[10px]" />
          </Link>
          <Link
            href="mailto:agusastudillo.dev@gmail.com"
            target="_blank"
            className="w-auto h-auto py-[10px] px-[20px] border-solid text-roboto font-bold text-[18px] leading-[18px] text-dark underline"
          >
            {contact}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
