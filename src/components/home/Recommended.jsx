import React from "react";
import product from "../../assets/product.png";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const Recommended = () => {
  const productArray = Array(4).fill(0);
  return (
    <div className="w-full lg:w-[80%] lg:mx-auto px-[24px] lg:px-0 py-10 lg:py-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="w-full flex">
            <p className="py-2 border-b-2 border-[#cda78f] text-[24px] font-bold">
              Recommended For You
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {productArray.map((_, index) => (
            <div key={index} className="flex flex-col gap-4 mt-4 items-center">
              <div
                className="relative w-[38vw] lg:w-[18vw] h-[25vh] lg:h-[40vh] bg-center bg-cover flex justify-center items-center hover:scale-105 transition ease-in-out border border-[#00000010]"
                style={{ backgroundImage: `url(${product})` }}
              >
                <div className="absolute bottom-4 flex gap-2">
                  <div className="bg-white rounded-full flex justify-center items-center p-2 cursor-pointer hover:scale-125 transition ease-in-out">
                    <FiHeart />
                  </div>
                  <div className="bg-white rounded-full flex justify-center items-center p-2 cursor-pointer hover:scale-125 transition ease-in-out">
                    <IoCartOutline />
                  </div>
                  <div className="bg-white rounded-full flex justify-center items-center p-2 cursor-pointer hover:scale-125 transition ease-in-out">
                    <FaEye />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[14px] font-normal">Product Name</p>
                <p
                  className="font-bold text-[#cda78f] text-[14px]"
                  style={{ fontFamily: '"Host Grotesk", sans-serif' }}
                >
                  #25,000
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <button className="px-4 py-2 text-[#cda78f] border border-[#cda78f] text-[14px] hover:scale-105 transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition font-bold">
          SHOW MORE
        </button>
      </div>
    </div>
  );
};

export default Recommended;
