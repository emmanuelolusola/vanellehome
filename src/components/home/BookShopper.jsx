import React from "react";
import shopping from "../../assets/shopping.jpg";

const BookShopper = () => {
  return (
    <div className="w-full relative">
      <div
        className="w-full h-[600px] lg:h-[700px] bg-white lg:bg-cover lg:bg-center"
        style={{ backgroundImage: `url(${shopping})` }}
      >
        <div className="w-full h-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto flex items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-[48px] lg:text-[64px] text-[#1d1d1f] leading-tight">
                Book a<br />
                Shopper
              </p>
              <p className="w-full lg:w-[650px] font-normal text-[16px] text-[#1d1d1f] lg:leading-loose">
                Booking a Home Style Shopper ensures a stress-free shopping
                experience. Our experts are trained to identify top-notch
                quality and will select items based on your unique home
                decoration requirements.
              </p>
            </div>
            <div className="flex justify-between">
              <button className="px-8 py-4 text-[#1d1d1f] border border-[#1d1d1f] text-[16px] hover:scale-105 transition ease-in-out hover:bg-[#1d1d1f] hover:text-[#f5f5f7] custom-hover-transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShopper;
