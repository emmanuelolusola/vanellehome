import React from "react";
import footerlogo from "../../assets/vlogo.png";

const Footer = () => {
  return (
    <div className="mt-0 w-full bg-[#ffffff] rounded-0">
      <div className="w-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
          <div className="flex flex-col items-start gap-4">
            <img src={footerlogo} alt="" width={120} />
            <p className="text-[14px] lg:text-[16px] font-normal">
              Join our Newsletter for exclusive updates and VIP offers
            </p>
            <input
              type="text"
              name=""
              id=""
              className="w-full h-[30px] bg-transparent px-4 placeholder-[#cda78f] custom-input italic text-[14px] lg:text-[16px]"
              placeholder="enter email address"
            />
            <button className="px-2 py-1 text-[#f5f5f7] bg-[#cda78f] text-[14px] lg:text-[16px]">
              Join Now
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-end gap-10 lg:gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-bold">HELP {"&"} INFORMATION</p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                About
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Contact Us
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Shipping Information
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Refunds {"&"} Returns
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Track Order
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-bold">OUR SERVICES</p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Shipping {"&"} Delivery
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Customize Gifts
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Book A Shopper
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Cleaning Services
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-bold">ACCOUNT CENTER</p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                My Account
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                View Cart
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Wishlist/Favorites
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal cursor-pointer">
                Track Order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
