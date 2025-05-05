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
    <div className="w-full h-auto flex flex-col justify-around items-center overflow-hidden lg:min-h-screen lg:flex-row lg:max-h-[90vh]">
      <div className="w-full max-w-[700px] flex h-auto my-[15px] lg:my-0">
        <Image
          src={img_ia}
          alt="Imagen IA Agus"
          className="w-full max-w-[300px] mx-auto h-auto object-cover object-bottom lg:max-w-[450px]"
          quality={100}
          priority
        />
      </div>
      <div className="w-full flex flex-col items-center max-w-[720px] lg:items-start">
        <AnimatedText
          arrayTexts={[title1]}
          className="text-[35px] mb-[10px] leading-[40px] lg:text-[54px] lg:leading-[60px] text-dark font-bold"
        />
        <AnimatedText
          arrayTexts={[title2]}
          className="text-[25px] leading-[30px] lg:text-[28px] lg:leading-[35px] text-dark/80 font-bold"
        />
        <motion.p
          variants={FadeOut}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 2 }}
          className="text-roboto text-center text-[16px] leading-[24px] my-[30px] lg:my-[20px] lg:text-start"
        >
          {paragraph}
        </motion.p>
        <motion.div
          className="w-full max-w-[350px] h-auto flex flex-row gap-6"
          variants={FadeOut}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Link
            href={resumeHref}
            target="_blank"
            className="flex items-center justify-between w-1/2 px-[10px] h-[40px] border-solid border-dark border-[2px] text-[18px] leading-[20px] rounded-md text-roboto font-bold text-light bg-dark hover:bg-light hover:text-dark transition-colors ease-linear duration-200 lg:h-auto lg:py-[10px] lg:px-[20px] lg:text-[18px] lg:leading-[20px]"
          >
            {resume}
            <LinkArrow className="w-[25px] lg:w-[20px] h-auto" />
          </Link>
          <Link
            href="mailto:agusastudillo.dev@gmail.com"
            target="_blank"
            className="flex w-1/2 h-[40px] items-center justify-center px-[5px] lg:py-[10px] lg:px-[20px] border-solid text-roboto font-bold text-[18px] leading-[18px] text-dark underline"
          >
            {contact}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
