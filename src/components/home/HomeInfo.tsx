// React-Next:
import React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
// Context:
import { langContext } from "@/context/langContext";
// Image:
import img_ia from "@/assets/home/IA_profile_agus.png";
// Framer motion
import { motion } from "framer-motion";
// Icons:
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
} from "@/components/icons_svg/icons";

export default function HomeInfo() {
  return (
    <div className="w-full h-screen  flex justify-around items-center">
      <div className="w-full max-w-[700px] h-auto">
        <Image
          src={img_ia}
          alt="Imagen IA Agus"
          className="w-full h-auto object-cover"
        ></Image>
      </div>
      <div className="">
        <h1>Astudillo Agustin</h1>
      </div>
    </div>
  );
}
