import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { useNavigate } from "react-router-dom";

const CleaningServices = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div>
      <div className="w-full fixed top-0 bg-[#eeebe8] z-20 drop-shadow-md">
        <Navbar />
      </div>
      <hr />
      <div className="w-full px-[20px] lg:px-[10%] pt-10 pb-20 mt-24 flex flex-col gap-4">
        <p
          className="text-[18px] underline cursor-pointer"
          onClick={() => {
            navigate(-1);
            scrollToTop();
          }}
        >
          Back
        </p>
        <div className="w-full py-4 flex flex-col gap-2">
          <p className="text-[32px] lg:text-center lg:text-[48px] font-bold">
            Home Cleaning Services
          </p>
          <p className="lg:text-center italic w-full lg:text-center">
            Welcome to Vanelle Home Cleaning Services!
          </p>
        </div>
        <div className="w-full lg:w-[80%] lg:mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24 lg:p-8 lg:justify-between">
          <div className="w-full flex flex-col gap-4">
            <p className="text-justify">
              Your home is your sanctuary, and we understand the importance of
              maintaining a clean and comfortable living space. At Vanelle, we
              offer professional house cleaning services with a personal touch,
              tailored to your unique needs and preferences.
            </p>
            <p className="font-bold text-[24px] text-[#cda78f]">Our Approach</p>
            <p className="text-justify">
              We begin with a personalized consultation either in-home or over
              the phone, designed to understand your specific requirements and
              provide transparent pricing for ongoing maintenance cleanings.
              During this consultation, which typically lasts 15-20 minutes, we
              will:
            </p>
            <div className="flex flex-col gap-2">
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                Explain what to expect during our cleaning visits.
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                Provide you with a detailed cleaning checklist.
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                Offer pricing options for regular cleaning services (weekly or
                bi-weekly).
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                Discuss access instructions, ensuring a seamless cleaning
                process.
              </p>
            </div>
            <p className="text-justify">
              To schedule your consultation, please contact Vanelle Home
              Cleaning Services at{" "}
              <span className="underline font-bold">(+234) 701-889-9382</span>{" "}
              or fill out our online form for a free estimate.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-[24px] font-bold text-[#cda78f]">
              The Cleaning Process
            </p>
            <div className="flex flex-col gap-2">
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                <span className="font-bold">
                  In-Home Consultation or Phone Consultation:
                </span>{" "}
                Choose between an in-person or remote consultation. We'll
                discuss your needs, preferences, and establish a pricing plan
                for ongoing service.
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                <span className="font-bold">The First Cleaning:</span> Once
                scheduled, sit back and relax while our team handles the heavy
                lifting. Our initial deep cleaning ensures your home is brought
                to a sparkling standard. This first visit may take longer due to
                initial build-up, addressing tough areas like soap scum and
                kitchen grease.
              </p>
              <p className="py-2 px-4 border border-[#cda78f] rounded-lg text-justify transition ease-in-out hover:bg-[#cda78f] hover:text-[#ffffff] custom-hover-transition">
                <span className="font-bold">
                  Setting Up Your Maintenance Schedule:
                </span>{" "}
                Following the first cleaning, we'll follow up to confirm your
                satisfaction and arrange a recurring cleaning schedule that fits
                your lifestyle. Moving forward, you can count on us to maintain
                a clean and inviting home environment.
              </p>
            </div>
            <p className="text-justify">
              Remember, there's no need to tidy up before our visit—we're here
              to handle the cleaning. Simply relax and let our professional team
              take care of your home.
            </p>
            <p className="text-[24px] font-bold text-[#cda78f]">
              Booking and Payment
            </p>
            <p className="text-justify">
              To finalize your reservation, we offer flexible payment options,
              including bank transfer, credit/debit card, check, or cash. You'll
              also receive a service agreement outlining costs and payment
              policies for your peace of mind.
            </p>
            <p className="text-justify">
              Let Vanelle Home Cleaning Services transform your living space
              into a haven of cleanliness. Contact us today to schedule your
              consultation and discover the joy of coming home to a spotless
              sanctuary.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CleaningServices;
