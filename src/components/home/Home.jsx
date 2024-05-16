import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <div className="fixed w-full h-[100vh] flex justify-center items-center backdrop-blur-sm px-[24px] z-20">
        <div className="flex flex-col gap-2 lg:gap-4 text-white">
          <p className="text-[42px] font-bold">Under Construction</p>
          <p className="text-[16px] lg:text-[18px] font-normal">
            come back later...
          </p>
        </div>
      </div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-10">
        <Navbar />
        <div className="bg-black w-full h-8 lg:h-10 flex justify-center items-center">
          <p className="text-[16px] lg:text-[18px] text-white">
            Announcements and promo!!!
          </p>
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default Home;
