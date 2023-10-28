import React from "react";
import { navLinks } from "../../data/data";
import { NavLink } from "../../ts/interfaces";

const DesktopLinks = ({ active, isDarkMode, setActive }): JSX.Element => {
  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((link: NavLink) => (
        <li
          key={link.id}
          className={`${
            active === link.title
              ? isDarkMode
                ? "text-white"
                : "text-slate-400"
              : isDarkMode
              ? "text-secondary"
              : "text-tertiary"
          } 
        hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopLinks;
