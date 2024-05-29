import React from "react";

const Copyright = () => {
  return (
    <div className="w-full lg:w-[80%] px-[24px] lg:px-0 lg:mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between items-center">
        <p className="text-[16px] font-normal">© Vanellehome 2024</p>
        <div className="flex justify-end gap-8">
          <p className="text-[16px] font-normal cursor-pointer">Privacy</p>
          <p className="text-[16px] font-normal cursor-pointer">Terms</p>
          <p className="text-[16px] font-normal cursor-pointer">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
