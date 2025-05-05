// Framer motion
import { motion } from "framer-motion";
// Icons:
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
} from "@/components/icons_svg/icons";

export default function NavIcons() {
  return (
    <nav className="flex items-center justify-center">
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-[20px] lg:w-[24px] mr-3"
        href="https://github.com/AgusAstuDev"
        target="_blank"
      >
        <GithubIcon className={""}></GithubIcon>
      </motion.a>
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-[20px] lg:w-[24px] mr-3"
        href="https://twitter.com/AgusAstudillo97"
        target="_blank"
      >
        <TwitterIcon className={""}></TwitterIcon>
      </motion.a>
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-[20px] lg:w-[24px] mr-3"
        href="https://www.linkedin.com/in/agustin-ezequiel-astudillo/"
        target="_blank"
      >
        <LinkedInIcon className={""}></LinkedInIcon>
      </motion.a>
    </nav>
  );
}
