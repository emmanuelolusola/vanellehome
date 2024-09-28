import React from "react";
import cleaning from "../../assets/cleaning.jpg";
import shopping from "../../assets/shopping.jpg";
import gifts from "../../assets/customize_gift.jpg";

const slides = [
  {
    backgroundImage: cleaning,
    title: "Home Cleaning Services",
    description:
      "We offer professional house cleaning services with a personal touch, tailored to your unique needs and preferences.",
    buttonText: "Contact Us",
  },
  {
    backgroundImage: shopping,
    title: "Book a Shopper",
    description:
      "Keep your workplace spotless with our reliable and thorough office cleaning services.",
    buttonText: "Learn More",
  },
  {
    backgroundImage: gifts,
    title: "Customize Gifts",
    description:
      "Our deep cleaning services ensure every corner of your home is immaculate.",
    buttonText: "Book Now",
  },
];

const CleaningService = () => {
  return (
    <div className="flex flex-col gap-8 py-20">
      <div className="w-full flex justify-center">
        <p className="py-2 border-b-2 border-[#cda78f] text-[24px] font-bold">
          OUR SERVICES
        </p>
      </div>
      <div className="w-full relative flex gap-4 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[350px] lg:h-[500px] bg-cover bg-center relative py-10"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="w-[90vw] h-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto flex justify-start items-end relative">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <p className=" w-[80%] font-bold text-[32px] lg:text-[48px] text-[#f5f5f7] leading-tight">
                    {slide.title}
                  </p>
                  <p className="w-full lg:w-[450px] font-normal text-[15px] text-[#f5f5f7] lg:leading-loose">
                    {slide.description}
                  </p>
                </div>
                <div className="flex justify-start">
                  <button className="px-4 py-2 text-[#f5f5f7] border border-[#f5f5f7] text-[15px] hover:scale-105 transition ease-in-out hover:bg-[#f5f5f7] hover:text-[#1d1d1f] custom-hover-transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningService;
