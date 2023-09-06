import React, { useState } from 'react';
import { menu, close } from "../../assets/assets";
import MobileMenu from './MobileMenu';

const MobileBurgerButton = ({active, setActive}): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
    <img
      src={toggle ? close : menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain"
      onClick={() => setToggle(!toggle)}
    />
    <MobileMenu {...{toggle, setToggle, active, setActive}} />
  </div>
  )
}

export default MobileBurgerButton;
