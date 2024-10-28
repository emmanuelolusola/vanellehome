import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import img from "../../assets/product.png";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const Wishlist = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [addedItemId, setAddedItemId] = useState(null);
  const [bannerMessage, setBannerMessage] = useState("");

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const updatedProducts = savedProducts.map((product) => ({
      ...product,
      quantity: 1,
      basePrice: parseFloat(String(product.price).replace("#", "")),
      price: parseFloat(String(product.price).replace("#", "")),
    }));
    setProducts(updatedProducts);
  }, []);

  const handleAddToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image || img,
    };

    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setBannerMessage(`${product.title} added to cart`);
    setAddedItemId(product.id);

    setTimeout(() => {
      setBannerMessage("");
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.id !== product.id)
      );
      setAddedItemId(null);
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(products.filter((p) => p.id !== product.id))
      );
    }, 3000);
  };

  return (
    <div className="w-full lg:h-screen lg:mt-24 flex flex-col justify-between">
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <Navbar />
      </div>

      {bannerMessage && (
        <div className="fixed top-2 left-0 lg:left-[20%] w-full lg:w-[60%] bg-[#cda78f] text-white text-center py-4 animate-dropDown z-30">
          {bannerMessage}
        </div>
      )}

      <hr />
      <div className="w-full h-full flex flex-col lg:flex-row mt-24 lg:mt-0 pb-10 lg:justify-between lg:gap-30 lg:items-start">
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
            Wishlist
          </p>
          {products.length === 0 ? (
            <p className="text-center text-gray-500">Wishlist Empty</p>
          ) : (
            products.map((product) => (
              <div key={product.id}>
                <div className="w-full flex justify-between mb-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={product.image || img}
                      alt=""
                      className="w-[50px] h-[50px]"
                    />
                    <p>{product.title}</p>
                    <p className="text-[#cda78f] font-bold">#{product.price}</p>
                  </div>
                  <div
                    className={`w-[200px] h-12 flex justify-center items-center gap-2 cursor-pointer ${
                      addedItemId === product.id
                        ? "bg-[#cda78f]"
                        : "bg-[#cda78f]"
                    }`}
                    onClick={
                      addedItemId !== product.id
                        ? () => handleAddToCart(product)
                        : null
                    }
                  >
                    {addedItemId === product.id ? (
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
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
