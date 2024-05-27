import React from "react";
import img from "../../assets/hero_image.png";
import img2 from "../../assets/FRAG.png";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div
        className="w-full h-[100vh] bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="px-[24px] lg:px-0 mt-10 flex flex-col gap-8 w-full lg:w-[600px]">
          <p className="font-bold text-[48px] lg:text-[64px] text-[#f5f5f7] text-center">
            Home Decor
          </p>
          <p className="font-normal text-[16px] text-[#f5f5f7] text-center">
            Figma ipsum component variant main layer. Component bold team device
            group figma draft frame hand.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 text-white border border-[#cda78f] text-[16px] hover:scale-105 transition ease-in-out hover:bg-[#cda78f]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[100vh] bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="px-[24px] lg:px-0 mt-10 flex flex-col gap-8 w-full lg:w-[600px]">
          <p className="font-bold text-[48px] lg:text-[64px] text-[#f5f5f7] text-center">
            Home Fragrance
          </p>
          <p className="font-normal text-[16px] text-[#f5f5f7] text-center">
            Figma ipsum component variant main layer. Component bold team device
            group figma draft frame hand.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 text-white border border-[#cda78f] text-[16px] hover:scale-105 transition ease-in-out hover:bg-[#cda78f]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
