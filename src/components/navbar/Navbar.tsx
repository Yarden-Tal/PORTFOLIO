import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ColorThemeContext";
import isScrolled from "../../utils/scroll";
import DesktopLinks from "./DesktopLinks";
import MenuLeftPart from "./MenuLeftPart";
import MobileBurgerButton from "./MobileBurgerButton";

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const checkScroll = (): void => {
      isScrolled() ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  
  const navStyle: string = `${scrolled ? `${isDarkMode ? "bg-primary" : "bg-primaryDark"}` : "bg-transparent"}
  nav-style`;

  return (
    <nav className={navStyle}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <MenuLeftPart {...{setActive}} />
        <DesktopLinks {...{active, isDarkMode, setActive}} />
        <MobileBurgerButton {...{active, setActive}} />
      </div>
    </nav>
  );
};

export default Navbar;
