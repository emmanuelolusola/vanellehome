import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const About = () => {
  return (
    <div className="w-full lg:h-screen flex flex-col justify-between">
      <Navbar />
      <hr />
      <div className="w-full flex flex-col gap-4 px-[20px] lg:w-[600px] lg:mx-auto pt-10 pb-20">
        <p className="text-[24px] font-bold">About Us</p>
        <p className="text-justify">
          Welcome to Vanelle Home, your premier destination for high-quality
          home essentials and lifestyle products. At Vanelle Home,/We are
          committed to providing our customers with a curated selection of
          functional and stylish items that enhance your everyday living
          experience.
        </p>
        <p className="text-justify">
          Established with a passion for home comfort and convenience, our team
          at Vanelle Home handpicks each product to ensure exceptional quality,
          durability, and style. Whether you're looking for practical kitchen
          gadgets, cozy bedding, stylish decor pieces, or innovative cleaning
          solutions, we've got you covered.
        </p>
        <p className="text-justify">
          <span className="font-bold">Our mission</span> is to make shopping for
          home essentials enjoyable and hassle-free. We understand the
          importance of finding products that not only meet your needs but also
          reflect your personal style and values. That's why we strive to offer
          a diverse range of products that cater to different tastes and
          preferences.
        </p>
        <p className="text-justify">
          At Vanelle Home, customer satisfaction is our top priority. We are
          dedicated to providing excellent service, from the moment you browse
          our website to the timely delivery of your order. Our goal is to
          exceed your expectations with every interaction and ensure that you
          have a positive shopping experience.
        </p>
        <p className="text-justify">
          Thank you for choosing Vanelle Home. We invite you to explore our
          collection and discover the perfect essentials to transform your
          living space into a place you truly love coming home to.
        </p>
        <p className="text-justify">
          For any inquiries or assistance, please don't hesitate to reach out to
          our friendly customer service team at [Your Contact Information]. We
          look forward to serving you!
        </p>
        <button className="px-4 py-2 text-[#cda78f] border border-[#cda78f] text-[14px] hover:scale-105 transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition font-bold">
          CONTACT US
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
