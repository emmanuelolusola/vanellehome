import React from "react";
import kitchen from "../../assets/kitchen.jpg";

const ForKitchen = () => {
  return (
    <div
      className="w-full h-[350px] lg:h-[400px] bg-cover bg-center relative py-10"
      style={{ backgroundImage: `url(${kitchen})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-[90vw] h-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto flex justify-start items-end relative">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className=" w-[80%] font-bold text-[32px] lg:text-[48px] text-[#f5f5f7] leading-tight">
              Essentials for your kitchen
            </p>
          </div>
          <div className="flex justify-start">
            <button className="px-4 py-2 text-[#f5f5f7] border border-[#f5f5f7] text-[14px] hover:scale-105 transition ease-in-out hover:bg-[#f5f5f7] hover:text-[#1d1d1f] custom-hover-transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForKitchen;
