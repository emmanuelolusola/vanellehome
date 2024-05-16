import React, { useState, useRef, useEffect } from "react";

import logo from "../../assets/vlogo.png";
import hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel.svg";

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
    <div className="w-full lg:w-[80%] lg:mx-auto flex justify-between items-center px-[24px] lg:px-0 py-4">
      <img src={logo} alt="" className="w-[150px]" />
      <div className="hidden lg:flex gap-10">
        <p className="text-[18px] cursor-pointer hover:text-[#cda78f]">Home</p>
        <p className="text-[18px] cursor-pointer hover:text-[#cda78f]">About</p>
        <p className="text-[18px] cursor-pointer hover:text-[#cda78f]">
          Contact
        </p>
      </div>
      <div className="hidden lg:flex gap-8">
        <button className="px-8 py-2 text-[18px] bg-[#CDA78F] text-[#eeebe8] rounded-[25px]">
          Join Us
        </button>
        <button className="px-8 py-2 text-[18px] bg-[#CDA78F] text-[#eeebe8] rounded-[25px]">
          View Cart
        </button>
      </div>
      <div className="sm:hidden relative" ref={menuRef}>
        <img
          src={isMenuOpen ? cancel : hamburger}
          alt=""
          onClick={toggleMenu}
          className="cursor-pointer"
        />
        {isMenuOpen && (
          <div className="faded-in fixed top-[60px] left-0 w-full h-[310px] bg-black text-white px-[24px] py-[24px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 text-center">
                <p className="text-[16px] text-[#CDA78F]">Home</p>
                <p className="text-[16px] text-[#CDA78F]">Shop</p>
                <p className="text-[16px] text-[#CDA78F]">About Us</p>
                <p className="text-[16px] text-[#CDA78F]">Featured</p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-8 py-2 text-[16px] border border-[#CDA78F] text-[#eeebe8] rounded-[25px]">
                  Join Us
                </button>
                <button className="px-8 py-2 text-[16px] bg-[#CDA78F] text-[#eeebe8] rounded-[25px]">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
