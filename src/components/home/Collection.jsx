import React from "react";
import product from "../../assets/product.png";
import fav from "../../assets/fav.svg";
import cart from "../../assets/cart.svg";
import view from "../../assets/view.svg";

const Collection = () => {
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
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div
              className="relative w-[350px] h-[400px] bg-center bg-cover flex justify-center items-center"
              style={{ backgroundImage: `url(${product})` }}
            >
              <div className="absolute bottom-6 flex gap-4">
                <div className="bg-white rounded-full flex justify-center items-center p-2">
                  <img src={fav} alt="" width={24} />
                </div>
                <div className="bg-white rounded-full flex justify-center items-center p-2">
                  <img src={cart} alt="" width={24} />
                </div>
                <div className="bg-white rounded-full flex justify-center items-center p-2">
                  <img src={view} alt="" width={24} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[16px] font-normal">Product Name</p>
              <p className="font-bold text-[#cda78f] text-[16px]">#25,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
