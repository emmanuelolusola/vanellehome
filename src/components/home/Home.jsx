import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Collection from "./Collection";
import Category from "./Category";
import Features from "./Features";
import BookShopper from "./BookShopper";
import CleaningService from "./CleaningService";
import Footer from "./Footer";
import Copyright from "./Copyright";
import ForKitchen from "./ForKitchen";
import Recommended from "./Recommended";

const Home = () => {
  return (
    <div>
      <div className="fixed w-full h-[100vh] flex justify-center items-center backdrop-blur-md px-[24px] z-30">
        <div className="flex flex-col gap-2 lg:gap-4 text-white py-4 px-8 lg:py-10 lg:px-20 backdrop-blur-lg rounded-xl shadow-lg border border-[#CDA78F]">
          <p className="text-[28px] lg:text-[42px] font-bold text-center">
            Under Construction
          </p>
          <p className="text-[18px] lg:text-[18px] font-normal text-center">
            come back later...
          </p>
        </div>
      </div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <div className="bg-[#CDA78F] w-full h-6 lg:h-10 flex justify-center items-center overflow-hidden">
          <p className="scrolling-text text-[14px] lg:text-[16px] text-[#1d1d1f]">
            Exciting things are on the way! This website is currently under
            construction. In the meantime, feel free to follow us on our social
            channels for the latest news and updates. Thank you for your
            patience!
          </p>
        </div>
        <Navbar />
      </div>
      <Hero />
      <Category />
      <Features />
      <CleaningService />
      <Collection />
      <ForKitchen />
      <Recommended />
      {/* <BookShopper /> */}
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
