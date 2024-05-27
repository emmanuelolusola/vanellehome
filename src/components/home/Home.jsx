import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Collection from "./Collection";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <div className="hidden fixed w-full h-[100vh] flex justify-center items-center backdrop-blur-sm px-[24px] z-20">
        <div className="flex flex-col gap-2 lg:gap-4 text-white">
          <p className="text-[42px] font-bold">Under Construction</p>
          <p className="text-[16px] lg:text-[18px] font-normal">
            come back later...
          </p>
        </div>
      </div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-10 drop-shadow-md">
        <div className="bg-[#CDA78F] w-full h-8 lg:h-10 flex justify-center items-center overflow-hidden">
          <p className="scrolling-text text-[16px] lg:text-[16px] text-[#1d1d1f]">
            Announcements and promo!!! ==={">"} Figma ipsum component variant
            main layer. Component bold team device group figma draft frame
            hand.Figma ipsum component variant main layer. Component bold team
            device group figma draft frame hand.
          </p>
        </div>
        <Navbar />
      </div>
      <Hero />
      <Collection />
      <Category />
    </div>
  );
};

export default Home;
