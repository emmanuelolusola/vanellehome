import React, { useState, useRef, useEffect } from "react";

import logo from "../../assets/vlogo.png";
import hamburger from "../../assets/menu-left.svg";
import cancel from "../../assets/cancel.svg";
import search from "../../assets/search-line.svg";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

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
          <div className="w-[60%] flex gap-2">
            <img src={hamburger} alt="" className="sm:hidden" width={22} />
            <img src={search} alt="" width={24} className="hidden lg:block" />
            <FiHeart className="sm:hidden" size={22} />
          </div>
          <div className="w-full flex justify-center">
            <img src={logo} alt="" />
          </div>
          <div className="w-[80%] hidden lg:flex gap-4 justify-end">
            <p className="font-normal text-[16px] cursor-pointer">My Account</p>
            <p className="font-normal text-[16px] cursor-pointer">Wishlist</p>
            <p className="font-normal text-[16px] cursor-pointer">View cart</p>
          </div>
          <div className="sm:hidden w-[60%] flex gap-2 justify-end">
            <CgProfile size={22} />
            <IoCartOutline size={22} />
          </div>
        </div>
        <div className="hidden lg:flex justify-center gap-12">
          <p className="font-bold text-[16px] text-[#CDA78F] cursor-pointer hover-border-animation">
            HOME
          </p>
          <p className="font-normal text-[16px] text-[#CDA78F] cursor-pointer hover-border-animation">
            ABOUT US
          </p>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <p className="font-normal text-[16px] text-[#CDA78F] cursor-pointer hover-border-animation">
              CATEGORIES
            </p>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-0 w-[300px] bg-[#eeebe8] shadow-lg z-10 p-4 text-[#cda78f]"
              >
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">KITCHENWARES</p>
                  <IoMdAdd />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">BATHROOM ESSENTIALS</p>
                  <IoMdAdd />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">CLEANING ESSENTIALS</p>
                  <IoMdAdd />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">FURNITURES</p>
                  <IoMdAdd />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">LAUNDRY ESSENTIALS</p>
                  <IoMdAdd />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">HOME DECOR</p>
                  <IoMdAdd />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">HOME FRAGRANCE</p>
                  <IoMdAdd />
                </div>
              </div>
            )}
          </div>
          <p className="font-normal text-[16px] text-[#CDA78F] cursor-pointer hover-border-animation">
            CUSTOMIZE GIFTS
          </p>
          <p className="font-normal text-[16px] text-[#CDA78F] cursor-pointer hover-border-animation">
            BOOK A SHOPPER
          </p>
          <p className="font-normal text-[16px] text-[#CDA78F] cursor-pointer hover-border-animation">
            CLEANING SERVICES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
