// React-Next:
import React from "react";
// Framer motion
import { motion } from "framer-motion";

const container = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface Props {
  arrayTexts: string[];
  className: string;
}

export default function AnimatedText({ arrayTexts, className }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full m-auto flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {arrayTexts.map((text, index) => (
        <h1
          key={index}
          className={`w-full m-auto flex flex-wrap text-center justify-center lg:justify-start lg:text-left ${className}`}
        >
          {text.split(" ").map((word, idx) => (
            <motion.span
              variants={item}
              transition={{ duration: 0.8 }}
              key={idx}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>
      ))}
    </motion.div>
  );
}
