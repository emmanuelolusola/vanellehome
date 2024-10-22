import React, { useState, useEffect, useRef } from "react";
import homedecor from "../../assets/homedecor.png";
import bathr from "../../assets/bathr.png";
import homefrag from "../../assets/homefrag.png";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const items = [
    { src: homedecor, alt: "Home Decor", text: "Home Decor" },
    { src: bathr, alt: "Bathroom Essentials", text: "Bathroom Essentials" },
    { src: bathr, alt: "Furnitures", text: "Furnitures" },
    { src: bathr, alt: "Laundry Essentials", text: "Laundry Essentials" },
    { src: homefrag, alt: "Home Fragrance", text: "Home Fragrance" },
    { src: homefrag, alt: "Kitchenwares", text: "Kitchenwares" },
  ];

  const handleScroll = (index) => {
    setCurrentIndex(index);
    carouselRef.current.scrollTo({
      left: index * (window.innerWidth * 0.8),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: carouselRef.current,
        threshold: 0.5,
      }
    );

    const cards = document.querySelectorAll(".carousel-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="w-full lg:w-[80%] lg:mx-auto px-[24px] lg:px-0 py-20">
      <div className="w-full flex justify-center">
        <p className="py-2 border-b-2 border-[#cda78f] text-[24px] font-bold">
          SHOP BY CATEGORY
        </p>
      </div>
      <div className="hidden lg:block">
        <div className="w-full flex flex-wrap gap-4 lg:justify-center mt-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => {
                navigate(`/product?category=${item.text}`);
                scrollToTop();
              }}
            >
              <img src={item.src} alt={item.alt} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[calc(100%-20px)] h-[calc(100%-20px)] bg-[#d9d9d9] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-1000 ease-in-out flex items-center justify-center">
                  <span className="text-white group-hover:text-black text-[20px] font-semibold border-t border-b py-1 px-2 group-hover:border-black">
                    {item.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <div
          id="carousel"
          ref={carouselRef}
          className="w-full overflow-x-scroll scroll-smooth whitespace-nowrap mt-6"
        >
          {items.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="carousel-card inline-block w-[80%] lg:w-[calc(100%/3)] relative group"
              style={{ marginRight: "5%" }}
              onClick={() => {
                navigate(`/product?category=${item.text}`);
                scrollToTop();
              }}
            >
              <img src={item.src} alt={item.alt} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[calc(100%-20px)] h-[calc(100%-20px)] bg-[#d9d9d9] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-1000 ease-in-out flex items-center justify-center">
                  <span className="text-white group-hover:text-black text-[20px] font-semibold border-t border-b py-1 px-2 group-hover:border-black">
                    {item.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                currentIndex === index ? "bg-[#cda78f]" : "bg-gray-400"
              }`}
              onClick={() => handleScroll(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
