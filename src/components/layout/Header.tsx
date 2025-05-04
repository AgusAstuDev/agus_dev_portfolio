// React-Next:
import React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_HOME } from "@/languages/texts_home";
// Components:
import Logo from "./Logo";
// Framer motion
import { motion } from "framer-motion";
// Icons:
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
} from "@/components/icons_svg/icons";

interface CustomLinkProps {
  href: string;
  text: string;
  className: string;
}

const CustomLink = ({ href, text, className }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group `}>
      {text}
      <span
        className={`absolute h-[2px] bg-dark inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

export default function Header() {
  const { locale } = useContext(langContext);
  const { home, about, experience, contact } = TEXTS_HOME[locale];
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
        <CustomLink
          href={"/"}
          text={home}
          className="w-max h-auto mr-4 inline-block"
        />
        <CustomLink
          href={"/about"}
          text={about}
          className="w-max h-auto mr-4 inline-block"
        />
        <CustomLink
          href={"/experience"}
          text={experience}
          className="w-max h-auto mr-4 inline-block"
        />
        <CustomLink
          href={"/contact"}
          text={contact}
          className="w-max h-auto mr-4 inline-block"
        />
      </nav>
      <nav className="flex items-center justify-center">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
          href="https://github.com/AgusAstuDev"
          target="_blank"
        >
          <GithubIcon className={""}></GithubIcon>
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
          href="https://twitter.com/AgusAstudillo97"
          target="_blank"
        >
          <TwitterIcon className={""}></TwitterIcon>
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
          href="https://www.linkedin.com/in/agustin-ezequiel-astudillo/"
          target="_blank"
        >
          <LinkedInIcon className={""}></LinkedInIcon>
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
