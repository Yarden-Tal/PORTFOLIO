import React from "react";
import { navLinks } from "../../data/data";
import { NavLink } from "../../ts/types";

const MobileMenu = ({ toggle, setToggle, active, setActive }): JSX.Element => {
  const handleClick = (nav: NavLink): void => {
    setToggle(!toggle);
    setActive(nav.title);
  };

  return (
    <div
      className={`${
        !toggle ? "hidden" : "flex"
      } p-6 bg-primary shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
    >
      <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
        {navLinks.map((nav: NavLink) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-secondary"
            }`}
            onClick={() => handleClick(nav)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
