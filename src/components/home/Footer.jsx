import React from "react";
import footerlogo from "../../assets/vlogo.png";

const Footer = () => {
  return (
    <div className="mt-20 w-full bg-[#ffffff] rounded-[30px]">
      <div className="w-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-0">
          <div className="flex flex-col items-start gap-4">
            <img src={footerlogo} alt="" />
            <p className="text-[16px] font-normal">
              Subscribe to our mailing list to get the new updates!
            </p>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-[40px] bg-transparent px-4 placeholder-[#cda78f] custom-input italic"
              placeholder="enter email address"
            />
            <button className="px-8 py-4 text-[#f5f5f7] bg-[#cda78f] text-[16px] ">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-end gap-10 lg:gap-20">
            <div className="flex flex-col gap-2">
              <p className="lg:text-[18px] font-bold">INFORMATION</p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                About
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="lg:text-[18px] font-bold">OUR SERVICES</p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Personalize/Customize Gifts
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Book a Shopper
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Home Cleaning Services
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="lg:text-[18px] font-bold">MY ACCOUNT</p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                My Account
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                View Cart
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Checkout
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Track Order
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Wishlist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
