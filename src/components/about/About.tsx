// React-Next:
import React from "react";
// Tools:
import AnimatedText from "../common/AnimatedText";

export default function About() {
  return (
    <div className="w-full">
      <AnimatedText
        arrayTexts={["Mi nombre es el mas pro"]}
        className="w-full m-auto flex justify-center text-dark font-bold text-6xl text-left"
      />
    </div>
  );
}
