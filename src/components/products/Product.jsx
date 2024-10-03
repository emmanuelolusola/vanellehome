import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CARDS } from "../../utils/constants";
import Navbar from "../home/Navbar";
import { IoAdd } from "react-icons/io5";
import { IoMdShareAlt } from "react-icons/io";
import Footer from "../home/Footer";
import { FaCheck } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [isItemAdded, setIsItemAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const res = CARDS.find((card) => card.id === id);
        if (res) {
          setProduct(res);

          const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
          const isAdded = cartItems.some((item) => item.id === res.id);
          setIsItemAdded(isAdded);
        } else {
          console.log(`Product with id ${id} not found`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.backgroundImage,
    };

    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setIsItemAdded(true);
  };

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <Navbar />
      </div>
      <hr />
      <div className="w-full px-[20px] lg:px-[10%] py-10 mt-24 flex flex-col gap-4">
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
            src={product.backgroundImage}
            alt={product.title}
            className="w-full border border-b-1"
          />
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <p className="font-bold text-[24px] lg:text-[48px]">
                {product.title}
              </p>
              <p className="text-[#cda78f] text-[24px] lg:text-[48px] font-bold">
                #{product.price}
              </p>
              <p className="text-[14px] lg:text-[18px] text-justify">
                {product.description}
              </p>
            </div>
            <div
              className={`w-full lg:w-[200px] h-12 flex justify-center items-center gap-2 cursor-pointer ${
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
            <div className="w-full lg:w-[200px] border border-[#000] h-12 flex justify-center items-center gap-2 cursor-pointer">
              <IoMdShareAlt color="#000" />
              <p className="text-[#000] font-bold text-[14px]">SHARE</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
