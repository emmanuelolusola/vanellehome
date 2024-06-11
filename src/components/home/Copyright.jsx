import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="w-full bg-[#1d1d1f]">
      <div className="w-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto py-4 flex flex-col lg:flex-row gap-4">
        <div className="w-full flex justify-center lg:justify-start items-center gap-2">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#f5f5f7]">
            <FaFacebookF />
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#f5f5f7]">
            <FaXTwitter />
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#f5f5f7]">
            <FaInstagram />
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#f5f5f7]">
            <FaTiktok />
          </div>
        </div>
        <div className="w-full flex gap-2 lg:gap-0 justify-between items-center">
          <p className="text-[14px] lg:text-[16px] text-[#f5f5f7] font-normal">
            © Vanellehome 2024
          </p>
          <div className="flex justify-end gap-4">
            <p className="text-[14px] lg:text-[16px] text-[#f5f5f7] font-normal cursor-pointer">
              Privacy
            </p>
            <p className="text-[14px] lg:text-[16px] text-[#f5f5f7] font-normal cursor-pointer">
              Terms
            </p>
            <p className="text-[14px] lg:text-[16px] text-[#f5f5f7] font-normal cursor-pointer">
              Sitemap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
