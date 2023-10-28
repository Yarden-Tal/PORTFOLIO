import React from "react";
import { Tooltip } from "react-tooltip";
import { moon, sun } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ColorThemeContext";

const MenuLeftPart = ({ setActive }): JSX.Element => {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <div className="flex gap-10">
      <button
        data-tooltip-id="theme"
        data-tooltip-content="Change Theme"
        data-tooltip-place="top"
        content="Change Theme"
        className="w-12"
        onClick={() => {
          toggleTheme();
        }}
      >
        <img className="w-2/3" src={!isDarkMode ? moon : sun} />
        <Tooltip
          className="change-color"
          id="theme"
          data-tooltip-delay-hide={100}
        />
      </button>
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <p
          className={`text-[18px] font-bold cursor-pointer flex ${
            isDarkMode ? "text-white" : "text-tertiary"
          }`}
        >
          Yarden Tal &nbsp;
          <span className="sm:block hidden">|&nbsp; Fullstack Dev</span>
        </p>
      </Link>
    </div>
  );
};

export default MenuLeftPart;
