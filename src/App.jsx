import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Product from "./components/products/Product";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/" element={<Navbar />} exact />
          <Route path="/product" element={<Products />} exact />
          <Route path="/product/:id" element={<Product />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
