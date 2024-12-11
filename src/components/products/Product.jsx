import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../home/Navbar";
import { IoAdd } from "react-icons/io5";
import { IoMdShareAlt } from "react-icons/io";
import Footer from "../home/Footer";
import { FaCheck } from "react-icons/fa";

const Product = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product; // Access the passed product data
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isWishAdded, setIsWishAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const isAdded = cartItems.some((item) => item.id === product.id);
      setIsItemAdded(isAdded);
    }
  }, [product]);

  const handleAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const item = {
      id: product.id,
      title: product.Name,
      price: product.Price,
      image: product.Image[0].url,
    };

    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setIsItemAdded(true);
  };

  const handleAddWishlist = () => {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    const item = {
      id: product.id,
      title: product.Name,
      price: product.Price,
      image: product.Image[0].url,
    };

    wishlistItems.push(item);
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));

    setIsWishAdded(true);
  };

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  if (!product) {
    return <div>Error: Product data is missing.</div>;
  }

  return (
    <div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <Navbar />
      </div>
      <hr />
      <div className="w-full px-[20px] lg:px-[10%] py-10 mt-10 lg:mt-24 flex flex-col gap-4">
        <p
          className="text-[18px] underline cursor-pointer"
          onClick={() => {
            navigate(-1);
            scrollToTop();
          }}
        >
          Back
        </p>
        <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col lg:flex-row gap-4 lg:gap-20 lg:justify-between lg:items-center">
          <img
            src={product.Image[0].url}
            alt={product.Name}
            className="w-full lg:w-auto lg:h-[600px] border border-b-1"
          />
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <p className="font-bold text-[24px] lg:text-[36px]">
                {product.Name}
              </p>
              <p
                className="text-[#cda78f] text-[21px] lg:text-[32px] font-bold"
                style={{ fontFamily: '"Host Grotesk", sans-serif' }}
              >
                ₦{new Intl.NumberFormat("en-US").format(product.Price)}
              </p>

              <p className="text-[14px] lg:text-[16px] text-justify">
                {product.Description}
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-2 justify-between">
              <div
                className={`w-full /lg:w-[200px] h-12 flex justify-center items-center gap-2 cursor-pointer ${
                  isItemAdded ? "bg-[#cda78f]" : "bg-[#cda78f]"
                }`}
                onClick={!isItemAdded ? handleAddToCart : null}
              >
                {isItemAdded ? (
                  <>
                    <FaCheck color="white" />
                    <p className="text-white font-bold text-[14px]">
                      ADDED TO CART
                    </p>
                  </>
                ) : (
                  <>
                    <IoAdd color="white" size={20} />
                    <p className="text-white font-bold text-[14px]">
                      ADD TO CART
                    </p>
                  </>
                )}
              </div>
              <div
                className={`w-full /lg:w-[200px] h-12 flex justify-center items-center gap-2 cursor-pointer ${
                  isWishAdded ? "bg-[#cda78f]" : "bg-[#cda78f]"
                }`}
                onClick={!isWishAdded ? handleAddWishlist : null}
              >
                {isWishAdded ? (
                  <>
                    <FaCheck color="white" />
                    <p className="text-white font-bold text-[14px]">
                      ADDED TO WISHLIST
                    </p>
                  </>
                ) : (
                  <>
                    <IoAdd color="white" size={20} />
                    <p className="text-white font-bold text-[14px]">
                      ADD TO WISHLIST
                    </p>
                  </>
                )}
              </div>
              <div className="w-full /lg:w-[200px] border border-[#000] h-12 flex justify-center items-center gap-2 cursor-pointer">
                <IoMdShareAlt color="#000" />
                <p className="text-[#000] font-bold text-[14px]">SHARE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
