import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { useNavigate } from "react-router-dom";
import { IoMdShareAlt } from "react-icons/io";
import img from "../../assets/shopping.jpg";

const BookAShopper = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <Navbar />
      </div>
      <div
        className="w-full mt-10 h-[150px] lg:h-[250px] bg-cover bg-center relative py-10 cursor-pointer"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="w-full px-[20px] lg:px-[10%] flex flex-col justify-between gap-4 lg:gap-20 relative">
          <p
            className="lg:text-[18px] underline cursor-pointer text-white"
            onClick={() => {
              navigate(-1);
              scrollToTop();
            }}
          >
            Back
          </p>
          <div className="w-full flex flex-col gap-2">
            <p className="text-[32px] lg:text-center lg:text-[48px] font-bold text-white">
              Book a Shopper
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-[20px] lg:px-[10%] pt-10 pb-20 flex flex-col gap-4">
        <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 lg:p-8 lg:justify-between">
          <div className="w-full flex flex-col gap-4">
            <p className="text-justify">
              Kindly note that We specialize in sourcing high-quality bedsheets
              and curtains only, to offer our customers a wide range of options.
              By focusing solely on these items, we ensure that customers have
              ample choices and can select products that meet their preferences
              for fabric quality, texture, and design. Our goal is to provide a
              curated selection that allows customers to find the perfect
              bedding and window treatments they'll love.
            </p>
            <p className="text-justify font-bold">
              At Home Style Shopper, we understand the importance of selecting
              high-quality, durable bedsheets and curtains that perfectly
              complement your home decor. Our experienced shoppers will assist
              you in choosing the finest products tailored to your preferences
              and style.
            </p>
            <p className="text-[24px] font-bold text-[#cda78f]">
              Why Book a Shopper?
            </p>
            <p className="text-justify">
              Booking a Home Style Shopper ensures a stress-free shopping
              experience. Our experts are trained to identify top-notch quality
              and will select items based on your unique home decoration
              requirements. You won't have to worry about making choices—leave
              it to us to curate the best selections for you.
            </p>
            <div className="hidden md:flex flex-col gap-4 pt-4">
              <div className="w-full bg-[#cda78f] h-12 flex justify-center items-center gap-4 cursor-pointer">
                <p className="text-white font-bold text-[14px]">CONTACT US</p>
              </div>
              <div className="w-full border border-[#000] h-12 flex justify-center items-center gap-4 cursor-pointer">
                <IoMdShareAlt color="#000" />
                <p className="text-[#000] font-bold text-[14px]">SHARE</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#cda78f]">The Process</p>
            <p className="text-[18px] font-bold">1. Booking a Shopper</p>
            <div className="flex flex-col gap-2">
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                Clients are required to book a shopper at least 3-4 days in
                advance.
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                A booking fee of <span className="font-bold">₦10,000</span> will
                be required to secure the appointment. This serves as a down
                payment for our service charge of{" "}
                <span className="font-bold">30%</span>
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                Provide essential information such as name, address, specific
                needs (bedsheets, curtains), measurements, and style preferences
                (e.g., color, fabric).
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                Specify any home decor rules or themes you follow for a cohesive
                look.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-bold">2. Shopping Appointment</p>
              <p className="text-justify">
                Clients must be available and easily accessible during the
                shopping appointment. Our shopper will showcase carefully
                selected items based on your preferences. Clients will approve
                the chosen items before finalizing the purchase.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-bold">3. Payment and Delivery:</p>
              <p className="text-justify">
                Payment is due upon item selection. A 30% service charge will be
                applied to the total amount. Delivery will be arranged for the
                same day or the next day after shopping.
              </p>
            </div>
            <div className="sm:hidden flex flex-col gap-4 pt-4">
              <div className="w-full bg-[#cda78f] h-12 flex justify-center items-center gap-4 cursor-pointer">
                <p className="text-white font-bold text-[14px]">CONTACT US</p>
              </div>
              <div className="w-full border border-[#000] h-12 flex justify-center items-center gap-4 cursor-pointer">
                <IoMdShareAlt color="#000" />
                <p className="text-[#000] font-bold text-[14px]">SHARE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookAShopper;
