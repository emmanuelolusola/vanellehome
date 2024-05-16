import React from "react";
import img from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="w-full h-[100vh]">
      <img src={img} alt="" className="object-cover h-full lg:w-full" />
    </div>
  );
};

export default Hero;
