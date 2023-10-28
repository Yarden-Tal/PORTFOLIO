import React, { useEffect, useState } from "react";
import { menu, close } from "../../assets/assets";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../../context/ColorThemeContext";
import isScrolled from "../../utils/scroll";

const MobileBurgerButton = ({ active, setActive }): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const checkScroll = (): void => {
      isScrolled() ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  return (
    <div className="sm:hidden">
      <div
        className={`flex flex-1 justify-end items-center p-2 rounded-full ${
          isDarkMode
            ? "bg-tertiary"
            : scrolled
            ? "bg-[#D4D4D4]"
            : "bg-transparent"
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
