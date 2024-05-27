import React from "react";
import product from "../../assets/product.png";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const Collection = () => {
  const productArray = Array(7).fill(0);

  return (
    <div className="w-full lg:w-[80%] lg:mx-auto px-[24px] lg:px-0 py-20">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-center">
            <p className="py-2 border-b-4 border-[#cda78f] text-[18px]">
              BEST SELLER
            </p>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-[18px]">Best Seller Product this Week!</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center lg:gap-10">
          {productArray.map((_, index) => (
            <div key={index} className="flex flex-col gap-4 mt-10 items-center">
              <div
                className="relative w-[85vw] lg:w-[18vw] h-[50vh] lg:h-[40vh] bg-center bg-cover flex justify-center items-center hover:scale-105 transition ease-in-out"
                style={{ backgroundImage: `url(${product})` }}
              >
                <div className="absolute bottom-6 flex gap-4">
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
                <p className="text-[16px] font-normal">Product Name</p>
                <p className="font-bold text-[#cda78f] text-[16px]">#25,000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
