import React from "react";
import homedecor from "../../assets/homedecor.png";
import bathr from "../../assets/bathr.png";
import homefrag from "../../assets/homefrag.png";

const Category = () => {
  return (
    <div className="w-full lg:w-[80%] lg:mx-auto px-[24px] lg:px-0 py-20">
      <div className="w-full flex flex-col lg:flex-row gap-0 lg:justify-center">
        {[
          { src: homedecor, alt: "Home Decor", text: "Home Decor" },
          { src: bathr, alt: "Bathroom", text: "Bathroom" },
          { src: homefrag, alt: "Home Fragrance", text: "Home Fragrance" },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <img src={item.src} alt={item.alt} className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] bg-[#d9d9d9] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-1000 ease-in-out flex items-center justify-center">
                <span className="text-white group-hover:text-black text-[24px] font-semibold border-t border-b py-1 px-2 group-hover:border-black">
                  {item.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-0 lg:justify-center">
        {[
          { src: homedecor, alt: "Home Decor", text: "Home Decor" },
          { src: bathr, alt: "Bathroom", text: "Bathroom" },
          { src: homefrag, alt: "Home Fragrance", text: "Home Fragrance" },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <img src={item.src} alt={item.alt} className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] bg-[#d9d9d9] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-1000 ease-in-out flex items-center justify-center">
                <span className="text-white group-hover:text-black text-[24px] font-semibold border-t border-b py-1 px-2 group-hover:border-black">
                  {item.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
