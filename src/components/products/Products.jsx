import React, { useState, useEffect } from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://vanellehomebackendservices.onrender.com/product"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return product.Post;
    }
    return product.Post && product.Category === selectedCategory;
  });

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <Navbar />
      </div>
      <hr />
      {loading ? (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div
            className="w-8 h-8 border-4 border-t-4 border-[#cda78f] rounded-full animate-spin"
            style={{
              borderTopColor: "transparent",
            }}
          ></div>
        </div>
      ) : (
        <div>
          <div className="w-full px-[20px] lg:px-[10%] py-10 flex flex-col lg:flex-row justify-between lg:justify-center gap-8 lg:items-center mt-24">
            <div className="flex lg:justify-center items-center gap-2 flex-wrap">
              {[
                "All",
                "Bathroom Essentials",
                "Home Fragrance",
                "Kitchenwares",
                "Furnitures",
                "Home Decor",
                "Cleaning Essentials",
                "Laundry Essentials",
              ].map((category) => (
                <p
                  key={category}
                  className={`text-[12px] lg:text-[14px] px-4 py-2 ${
                    selectedCategory === category
                      ? "bg-[#CDA78F] text-white"
                      : "border border-[#CDA78F]"
                  } rounded-full cursor-pointer hover:bg-[#CDA78F] hover:text-white transition ease-in-out`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="w-full h-[50vh] flex justify-center items-center">
              No items found
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 lg:px-[10%] pb-10 lg:pb-20">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-4 mt-4 items-center"
                >
                  {product.Image && (
                    <div
                      className="relative w-[38vw] lg:w-[16vw] h-[25vh] lg:h-[38vh] bg-center bg-cover flex justify-center items-center hover:scale-105 transition ease-in-out border border-[#00000010] cursor-pointer"
                      style={{
                        backgroundImage: `url(${product.Image[0].url})`,
                      }}
                      onClick={() => {
                        navigate(`/product/${product.id}`);
                        scrollToTop();
                      }}
                    >
                      <div className="absolute bottom-4 flex gap-2">
                        <div className="backdrop-blur-md border border-[#1d1d1f] rounded-full flex justify-center items-center p-2 cursor-pointer hover:scale-125 transition ease-in-out">
                          <FiHeart />
                        </div>
                        <div className="backdrop-blur-md border border-[#1d1d1f] rounded-full flex justify-center items-center p-2 cursor-pointer hover:scale-125 transition ease-in-out">
                          <IoCartOutline />
                        </div>
                        <div className="backdrop-blur-md border border-[#1d1d1f] rounded-full flex justify-center items-center p-2 cursor-pointer hover:scale-125 transition ease-in-out">
                          <FaEye />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col w-[38vw] lg:w-[18vw] lg:items-center lg:px-4">
                    <p className="lg:text-[16px] lg:text-center font-normal">
                      {product.Name}
                    </p>
                    {product.Price && (
                      <p className="font-bold text-[#cda78f] lg:text-[18px]">
                        #{product.Price}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Products;
