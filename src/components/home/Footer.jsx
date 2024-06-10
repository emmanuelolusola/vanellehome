import React from "react";
import footerlogo from "../../assets/vlogo.png";

const Footer = () => {
  return (
    <div className="mt-0 w-full bg-[#ffffff] rounded-0">
      <div className="w-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-0">
          <div className="flex flex-col items-start gap-4">
            <img src={footerlogo} alt="" />
            <p className="text-[12px] font-normal">
              Subscribe to our mailing list to get the new updates!
            </p>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-[30px] bg-transparent px-4 placeholder-[#cda78f] custom-input italic text-[12px]"
              placeholder="enter email address"
            />
            <button className="px-4 py-2 text-[#f5f5f7] bg-[#cda78f] text-[12px] ">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-end gap-10 lg:gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold">INFORMATION</p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                About
              </p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold">OUR SERVICES</p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                Personalize/Customize Gifts
              </p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                Book a Shopper
              </p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                Home Cleaning Services
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold">MY ACCOUNT</p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                My Account
              </p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                View Cart
              </p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                Checkout
              </p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
                Track Order
              </p>
              <p className="text-[12px] lg:text-[16px] font-normal cursor-pointer">
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
