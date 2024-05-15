import React from "react";
import logo from "../../assets/vlogo.png";
import hamburger from "../../assets/hamburger.svg";

const Navbar = () => {
  return (
    <div className="w-full lg:w-[80%] lg:mx-auto flex justify-between items-center px-[24px] lg:px-0 py-4">
      <img src={logo} alt="" className="w-[150px]" />
      <div className="hidden lg:flex gap-10">
        <p className="text-[18px] cursor-pointer">Home</p>
        <p className="text-[18px] cursor-pointer">About</p>
        <p className="text-[18px] cursor-pointer">Contact</p>
      </div>
      <div className="hidden lg:flex gap-8">
        <button className="px-8 py-2 text-[18px] bg-[#CDA78F] text-[#eeebe8] rounded-[25px]">
          Join Us
        </button>
        <button className="px-8 py-2 text-[18px] bg-[#CDA78F] text-[#eeebe8] rounded-[25px]">
          View Cart
        </button>
      </div>
      <div className="sm:hidden">
        <img src={hamburger} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
