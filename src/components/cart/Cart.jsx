import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";
import img from "../../assets/product.png";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedProducts = savedProducts.map((product) => ({
      ...product,
      quantity: 1,
      basePrice: parseFloat(String(product.price).replace("#", "")),
      price: parseFloat(String(product.price).replace("#", "")),
    }));
    setProducts(updatedProducts);
  }, []);

  const handleQuantityChange = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newQuantity = Math.max(1, product.quantity + change);
          return {
            ...product,
            quantity: newQuantity,
            price: product.basePrice * newQuantity,
          };
        }
        return product;
      })
    );
  };

  const handleRemove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);

    localStorage.setItem("cartItems", JSON.stringify(updatedProducts));
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="w-full lg:h-screen flex flex-col justify-between">
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <Navbar />
      </div>
      <hr />
      <div className="w-full flex flex-col lg:flex-row mt-24 lg:mt-0 pb-10 lg:justify-between lg:gap-30 lg:items-start">
        <div className="w-full px-[20px] lg:px-[10%] pt-10 flex flex-col gap-4">
          <p
            className="text-[18px] underline cursor-pointer"
            onClick={() => {
              navigate(-1);
              window.scrollTo(0, 0);
            }}
          >
            Back
          </p>
          <p className="text-[24px] lg:text-[42px] font-bold text-[#cda78f]">
            Shopping Cart
          </p>
          {products.length === 0 ? (
            <p className="text-center text-gray-500">Nothing in cart</p>
          ) : (
            products.map((product) => (
              <div key={product.id}>
                <div className="w-full flex justify-center items-center pb-4">
                  <div className="w-full flex justify-start items-start gap-2">
                    <img
                      src={product.image || img}
                      className="w-10 h-10"
                      alt={product.title}
                    />
                    <div className="w-full flex flex-col">
                      <div className="flex gap-2">
                        <p className="text-[12px]">{product.title}</p>
                        <p className="text-[12px]">({product.quantity})</p>
                      </div>
                      <p className="text-[14px] text-[#cda78f] font-bold">
                        #{product.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center gap-4">
                    <div className="flex justify-center items-center border border-[#cda78f] rounded-lg py-2 px-2 gap-3">
                      <RiSubtractFill
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className={
                          product.quantity === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "cursor-pointer"
                        }
                        style={{
                          cursor:
                            product.quantity === 1 ? "not-allowed" : "pointer",
                        }}
                      />
                      <div className="w-[1px] h-4 bg-black"></div>
                      <IoAdd
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="cursor-pointer"
                      />
                    </div>
                    <IoTrashBinSharp
                      color="red"
                      onClick={() => handleRemove(product.id)}
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
        <div className="w-full px-[20px] lg:px-[10%] py-10 flex flex-col gap-4">
          <p className="text-[24px] lg:text-[42px] font-bold text-[#cda78f]">
            Summary
          </p>
          <div className="flex flex-col gap-4">
            {products.length === 0 ? null : (
              <div className="w-full flex flex-col gap-4 justify-between">
                {products.map((product) => (
                  <div key={product.id} className="w-full flex justify-between">
                    <div className="flex gap-2">
                      <p>{product.title}</p>
                      <p>({product.quantity})</p>
                    </div>
                    <p>#{product.price}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="w-full flex justify-between">
              <p className="font-bold text-[24px]">Total</p>
              <p className="text-[24px]">#{totalPrice}</p>
            </div>
            {products.length === 0 ? (
              <button
                disabled
                className="w-full h-12 flex justify-center items-center gap-2 cursor-pointer bg-[#e1e1e1] font-bold text-[#bebebe]"
              >
                CHECKOUT
              </button>
            ) : (
              <div className="w-full h-12 flex justify-center items-center gap-2 cursor-pointer bg-[#cda78f] font-bold text-white">
                CHECKOUT
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
