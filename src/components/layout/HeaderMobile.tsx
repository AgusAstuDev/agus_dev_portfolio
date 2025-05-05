// React-Next:
import { useState, useEffect } from "react";
import { useRef } from "react";
// Components:
import Logo from "./Logo";
import NavIcons from "../ui/NavIcons";
import NavCustomLinks from "../ui/NavCustomLinks";
// Icons:
import { HambIcon } from "../icons_svg/icons";
// Framer motion:
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cerrar menú con tecla ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div className="fixed top-0 flex justify-between items-center w-full px-[20px] mx-auto py-[20px] font-medium bg-light lg:hidden shadow-md">
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
          <Logo />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          <HambIcon className={""} />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-[70vw] max-w-[300px] px-[20px] flex flex-col gap-[40px] justify-center items-center bg-light shadow-lg"
          >
            <NavCustomLinks />
            <NavIcons />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
