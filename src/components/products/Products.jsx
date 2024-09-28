import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import product from "../../assets/product.png";

const Products = () => {
  const productArray = Array(18).fill(0);
  return (
    <div>
      <Navbar />
      <hr />
      <div className="w-full px-[20px] lg:px-[10%] py-10 flex flex-col lg:flex-row justify-between lg:justify-center gap-8 lg:items-center">
        <div className="flex lg:justify-center items-center gap-4 flex-wrap">
          <p className="text-[14px] px-4 py-2 border border-[#CDA78F] rounded-full hover:text-white hover:bg-[#CDA78F] cursor-pointer transition ease-in-out">
            Kitchenwares
          </p>
          <p className="text-[14px] px-4 py-2 border border-[#CDA78F] rounded-full hover:text-white hover:bg-[#CDA78F] cursor-pointer transition ease-in-out">
            Home Decor
          </p>
          <p className="text-[14px] px-4 py-2 border border-[#CDA78F] rounded-full hover:text-white hover:bg-[#CDA78F] cursor-pointer transition ease-in-out">
            Furnitures
          </p>
          <p className="text-[14px] px-4 py-2 border border-[#CDA78F] rounded-full hover:text-white hover:bg-[#CDA78F] cursor-pointer transition ease-in-out">
            Bathroom Essentials
          </p>
          <p className="text-[14px] px-4 py-2 border border-[#CDA78F] rounded-full hover:text-white hover:bg-[#CDA78F] cursor-pointer transition ease-in-out">
            Cleaning Essentials
          </p>

          <p className="text-[14px] px-4 py-2 border border-[#CDA78F] rounded-full hover:text-white hover:bg-[#CDA78F] cursor-pointer transition ease-in-out">
            Laundry Essentials
          </p>
          <p className="text-[14px] px-4 py-2 border border-[#CDA78F] rounded-full hover:text-white hover:bg-[#CDA78F] cursor-pointer transition ease-in-out">
            Home Fragrance
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:px-[10%] pb-10 lg:pb-20">
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
              <p className="font-bold text-[#cda78f] text-[14px]">#25,000</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;