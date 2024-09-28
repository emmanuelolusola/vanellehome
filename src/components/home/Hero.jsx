import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/hero_image.png";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="w-full relative flex flex-col gap-2 mt-8">
      <div
        className="w-full h-[600px] lg:h-[100vh] bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="px-[24px] lg:px-0 mt-10 flex flex-col gap-8 w-full lg:w-[600px]">
          <p className="w-[280px] lg:w-full slide-animation font-bold text-[48px] lg:text-[84px] text-[#f5f5f7] text-start lg:text-center">
            Everything You Need In One Place
          </p>
          <div className="slide-animation flex justify-start lg:justify-center">
            <button
              className="px-4 py-2 text-white border border-[#cda78f] text-[14px] hover:scale-105 transition ease-in-out hover:bg-[#cda78f] custom-hover-transition"
              onClick={() => {
                navigate(`/product`);
                scrollToTop();
              }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
