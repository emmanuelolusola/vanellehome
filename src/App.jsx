import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Product from "./components/products/Product";
import CleaningServices from "./components/cleaning/CleaningServices";
import Cart from "./components/cart/Cart";
import BookAShopper from "./components/shopper/BookAShopper";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import Wishlist from "./components/wishlist/Wishlist";

function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/" element={<Navbar />} exact />
          <Route path="/product" element={<Products />} exact />
          <Route path="/product/:id" element={<Product />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/wishlist" element={<Wishlist />} exact />
          <Route path="/about" element={<About />} exact />
          <Route
            path="/cleaning-services"
            element={<CleaningServices />}
            exact
          />
          <Route path="/book-a-shopper" element={<BookAShopper />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
