import React from "react";
import cleaning from "../../assets/cleaning.jpg";

const CleaningService = () => {
  return (
    <div className="w-full relative">
      <div
        className="w-full h-[600px] lg:h-[700px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${cleaning})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="w-full h-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto flex justify-center items-center relative">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[48px] lg:text-[64px] text-[#f5f5f7] leading-tight lg:text-center">
                Home Cleaning
                <br />
                Services
              </p>
              <p className="w-full lg:w-[650px] font-normal text-[16px] text-[#f5f5f7] lg:leading-loose lg:text-center">
                We offer professional house cleaning services with a personal
                touch, tailored to your unique needs and preferences.
              </p>
            </div>
            <div className="flex lg:justify-center">
              <button className="px-8 py-4 text-[#f5f5f7] border border-[#f5f5f7] text-[16px] hover:scale-105 transition ease-in-out hover:bg-[#f5f5f7] hover:text-[#1d1d1f] custom-hover-transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningService;
