import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const About = () => {
  return (
    <div className="w-full lg:h-screen flex flex-col justify-between">
      <Navbar />
      <hr />
      <div className="w-full flex flex-col gap-4 px-[20px] lg:w-[600px] lg:mx-auto pt-10 pb-20">
        <p className="text-[24px] font-bold">About Us</p>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nisi
          consequatur assumenda. Reiciendis dolorum eum necessitatibus pariatur
          velit modi, minus expedita omnis magnam nulla tempore, animi nisi
          quasi quibusdam dolor?
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nisi
          consequatur assumenda. Reiciendis dolorum eum necessitatibus pariatur
          velit modi, minus expedita omnis magnam nulla tempore, animi nisi
          quasi quibusdam dolor?
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nisi
          consequatur assumenda. Reiciendis dolorum eum necessitatibus pariatur
          velit modi, minus expedita omnis magnam nulla tempore, animi nisi
          quasi quibusdam dolor?
        </p>
        <button className="px-4 py-2 text-[#cda78f] border border-[#cda78f] text-[14px] hover:scale-105 transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition font-bold">
          CONTACT US
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
