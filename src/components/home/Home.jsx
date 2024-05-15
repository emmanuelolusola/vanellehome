import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div className="w-full fixed top-0">
        <Navbar />
        <div className="bg-black w-full h-10 flex justify-center items-center">
          <p className="text-[16px] lg:text-[18px] text-white">
            Announcements and promo!!!
          </p>
        </div>
      </div>
      <div className="w-full h-[100vh] flex justify-center items-center backdrop-blur-sm px-[24px]">
        <div className="flex flex-col gap-2 lg:gap-4">
          <p className="text-[42px] font-bold">Under Construction</p>
          <p className="text-[16px] lg:text-[18px] font-normal">
            come back later
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
