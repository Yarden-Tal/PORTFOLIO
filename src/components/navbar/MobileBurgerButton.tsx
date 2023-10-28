import React, { useState } from "react";
import { menu, close } from "../../assets/assets";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../../context/ColorThemeContext";

const MobileBurgerButton = ({ active, setActive }): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="sm:hidden">
      <div
        className={`flex flex-1 justify-end items-center p-2 rounded-full ${
          useTheme().isDarkMode ? "bg-tertiary" : "bg-[#D4D4D4]"
        }`}
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <MobileMenu {...{ toggle, setToggle, active, setActive }} />
    </div>
  );
};

export default MobileBurgerButton;
