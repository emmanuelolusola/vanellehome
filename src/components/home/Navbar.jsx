import React, { useState, useRef, useEffect } from "react";

import logo from "../../assets/vlogo.png";
import hamburger from "../../assets/menu-left.svg";
import cancel from "../../assets/cancel.svg";
import search from "../../assets/search-line.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full py-4">
      <div className="w-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto flex flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <div className="w-[40%]">
            <img src={search} alt="" width={24} />
          </div>
          <div className="w-full flex justify-center">
            <img src={logo} alt="" />
          </div>
          <div className="w-[40%] flex gap-4">
            <p className="font-normal text-[16px]">My Account</p>
            <p className="font-normal text-[16px]">Wishlist</p>
            <p className="font-normal text-[16px]">View cart</p>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <p className="font-normal text-[16px] text-[#CDA78F]">ABOUT US</p>
          <p className="font-normal text-[16px] text-[#CDA78F]">CATEGORIES</p>
          <p className="font-normal text-[16px] text-[#CDA78F]">
            CUSTOMIZE GIFTS
          </p>
          <p className="font-normal text-[16px] text-[#CDA78F]">
            BOOK A SHOPPER
          </p>
          <p className="font-normal text-[16px] text-[#CDA78F]">
            CLEANING SERVICES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
