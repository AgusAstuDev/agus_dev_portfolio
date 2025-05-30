// React-Next:
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Assets
import logo_agus from "@/assets/layout/logoAgusAstu.png";
// Framer motion
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="w-[55px] lg:w-[85px] h-auto"
      whileHover={{
        scale: 1.1,
        rotate: 360,
      }}
      transition={{ duration: 3, type: "spring" }}
    >
      <Link href={"/"} className="w-full h-full">
        <Image
          src={logo_agus}
          alt="Logo Agus"
          className="w-full h-auto object-cover object-center"
        ></Image>
      </Link>
    </motion.div>
  );
}
