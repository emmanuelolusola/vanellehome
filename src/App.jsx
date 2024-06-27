import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/" element={<Navbar />} exact />
          <Route path="/product" element={<Products />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
