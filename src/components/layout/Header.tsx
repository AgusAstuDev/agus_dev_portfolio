// React-Next:
import React from "react";
// Components:
import Logo from "./Logo";
import NavIcons from "../ui/NavIcons";
import NavCustomLinks from "../ui/NavCustomLinks";
import GeneralWrapper from "../common/GeneralWrapper";

export default function Header() {
  return (
    <header className="hidden lg:flex relative w-full h-[88px] mx-auto font-medium justify-between items-center shadow-md bg-light">
      <GeneralWrapper className="flex justify-between items-center ">
        <NavCustomLinks />
        <NavIcons />
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Logo />
        </div>
      </GeneralWrapper>
    </header>
  );
}
