import React, { useState, useRef, useEffect } from "react";

import logo from "../../assets/vlogo.png";
import { RiMenu2Fill } from "react-icons/ri";
import cancel from "../../assets/cancel.svg";
import search from "../../assets/search-line.svg";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
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
      <div className="w-full lg:w-[80%] px-[20px] lg:px-0 lg:mx-auto flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <div className="w-[60%] flex gap-[12px] items-center">
            <RiMenu2Fill size={18} style={{ strokeWidth: 0 }} className="" />
            <p className="hidden lg:block">Menu</p>
            <FiHeart
              className="sm:hidden"
              size={18}
              style={{ strokeWidth: 1 }}
            />
          </div>
          <div className="w-full flex justify-center">
            <img src={logo} alt="" width={110} />
          </div>
          <div className="w-[80%] hidden lg:flex gap-4 justify-end">
            <p className="font-normal text-[16px] cursor-pointer">My Account</p>
            <p className="font-normal text-[16px] cursor-pointer">Wishlist</p>
            <p className="font-normal text-[16px] cursor-pointer">View cart</p>
          </div>
          <div className="sm:hidden w-[60%] flex gap-[12px] justify-end">
            <VscAccount size={18} style={{ strokeWidth: 0 }} />
            <CiShoppingCart size={20} style={{ strokeWidth: 0 }} />
          </div>
        </div>
        <div className="hidden lg:flex justify-center gap-12">
          <p className="font-bold text-[16px] text-black cursor-pointer hover-border-animation">
            HOME
          </p>
          <p className="font-normal text-[16px] text-black cursor-pointer hover-border-animation">
            ABOUT US
          </p>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <p className="font-normal text-[16px] text-black cursor-pointer hover-border-animation">
              CATEGORIES
            </p>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-0 w-[300px] bg-[#eeebe8] shadow-lg z-10 p-4 text-black"
              >
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">KITCHENWARES</p>
                  <IoMdAdd style={{ strokeWidth: 1 }} />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">BATHROOM ESSENTIALS</p>
                  <IoMdAdd style={{ strokeWidth: 1 }} />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">CLEANING ESSENTIALS</p>
                  <IoMdAdd style={{ strokeWidth: 1 }} />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">FURNITURES</p>
                  <IoMdAdd style={{ strokeWidth: 1 }} />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">LAUNDRY ESSENTIALS</p>
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">HOME DECOR</p>
                  <IoMdAdd style={{ strokeWidth: 1 }} />
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">HOME FRAGRANCE</p>
                  <IoMdAdd style={{ strokeWidth: 1 }} />
                </div>
              </div>
            )}
          </div>
          <p className="font-normal text-[16px] text-black cursor-pointer hover-border-animation">
            CUSTOMIZE GIFTS
          </p>
          <p className="font-normal text-[16px] text-black cursor-pointer hover-border-animation">
            BOOK A SHOPPER
          </p>
          <p className="font-normal text-[16px] text-vlack cursor-pointer hover-border-animation">
            CLEANING SERVICES
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full lg:w-[600px] bg-[#00000010] px-4 lg:px-6 py-2 lg:py-2 flex justify-between items-center gap-2 lg:gap-4 rounded-full">
            <img src={search} alt="" width={18} />
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-transparent placeholder-[#cda78f] custom-input-new text-[14px]"
              placeholder="Search Items"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
