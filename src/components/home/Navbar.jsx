import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/vlogo.png";
import { RiMenu2Fill } from "react-icons/ri";
import search from "../../assets/search-line.svg";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();

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
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="w-full py-4">
      <div className="w-full lg:w-[80%] px-[20px] lg:px-0 lg:mx-auto flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex gap-[12px] items-center">
            <RiMenu2Fill
              size={18}
              style={{ strokeWidth: 0 }}
              className="sm:hidden"
              onClick={toggleMenu}
            />
            <FiHeart
              className="sm:hidden"
              size={18}
              style={{ strokeWidth: 1 }}
            />
            <div className="hidden w-[80%] bg-[#00000010] px-4 lg:px-6 py-2 lg:py-2 lg:flex justify-between items-center gap-2 lg:gap-4 rounded-full">
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
          <div className="w-full flex justify-center">
            <img
              src={logo}
              alt=""
              width={150}
              className="sm:hidden"
              onClick={() => navigate(`/`)}
            />
            <img
              src={logo}
              alt=""
              width={150}
              className="hidden lg:block"
              onClick={() => navigate(`/`)}
            />
          </div>
          <div className="w-full hidden lg:flex gap-4 justify-end items-center">
            <p className="font-normal text-[16px] cursor-pointer">My Account</p>
            <p className="font-normal text-[16px] cursor-pointer">Wishlist</p>
            <p className="font-normal text-[16px]">View cart</p>
          </div>
          <div className="sm:hidden w-full flex gap-[12px] justify-end items-center">
            <VscAccount size={18} style={{ strokeWidth: 0 }} />
            <CiShoppingCart size={20} style={{ strokeWidth: 0 }} />
          </div>
        </div>
        {/* CONTENT */}
        <div className="hidden lg:flex justify-center gap-12">
          <p
            className="font-bold text-[16px] text-black cursor-pointer hover-border-animation"
            onClick={() => navigate(`/`)}
          >
            HOME
          </p>
          <p
            className="font-normal text-[16px] text-black cursor-pointer hover-border-animation"
            onClick={() => {
              navigate(`/about`);
              scrollToTop();
            }}
          >
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
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">BATHROOM ESSENTIALS</p>
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">CLEANING ESSENTIALS</p>
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">FURNITURES</p>
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">LAUNDRY ESSENTIALS</p>
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">HOME DECOR</p>
                </div>
                <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                  <p className="text-[16px]">HOME FRAGRANCE</p>
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
        <div className="sm:hidden w-full flex justify-center items-center">
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
      {/* Drawer */}
      {isMenuOpen && (
        <div className="drawer faded-in h-full" ref={menuRef}>
          <div className="drawer-content flex flex-col gap-4">
            <div className="w-full flex justify-between items-center gap-2">
              <p
                className="font-bold text-[14px] text-black cursor-pointer"
                onClick={() => navigate(`/`)}
              >
                HOME
              </p>
              <IoIosClose onClick={toggleMenu} size={20} />
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <p
                className="font-normal text-[14px] text-black cursor-pointer"
                onClick={() => {
                  navigate(`/about`);
                  scrollToTop();
                }}
              >
                ABOUT US
              </p>
            </div>
            <div
              className="relative"
              onClick={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="w-full flex justify-start gap-2 items-center">
                <p className="font-normal text-[14px] text-black cursor-pointer">
                  CATEGORIES
                </p>
                <MdOutlineKeyboardArrowRight
                  size={22}
                  className={`cursor-pointer transform transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </div>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="faded-in mt-0 w-full bg-[#eeebe8] z-10 p-2 text-black"
                >
                  <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                    <p className="text-[14px]">KITCHENWARES</p>
                  </div>
                  <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                    <p className="text-[14px]">BATHROOM ESSENTIALS</p>
                  </div>
                  <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                    <p className="text-[14px]">CLEANING ESSENTIALS</p>
                  </div>
                  <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                    <p className="text-[14px]">FURNITURES</p>
                  </div>
                  <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                    <p className="text-[14px]">LAUNDRY ESSENTIALS</p>
                  </div>
                  <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                    <p className="text-[14px]">HOME DECOR</p>
                  </div>
                  <div className="w-full flex justify-between items-center p-2 hover:bg-white custom-hover-transition cursor-pointer">
                    <p className="text-[14px]">HOME FRAGRANCE</p>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <p className="font-normal text-[14px] text-black cursor-pointer">
                CUSTOMIZE GIFTS
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <p className="font-normal text-[14px] text-black cursor-pointer">
                BOOK A SHOPPER
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <p className="font-normal text-[14px] text-black cursor-pointer">
                CLEANING SERVICES
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
