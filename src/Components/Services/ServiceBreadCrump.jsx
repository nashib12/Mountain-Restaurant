import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../../../public/Images/Services/page-circle-img-1.webp";
import Img2 from "../../../public/Images/Services/page-circle-img-2.webp";
import Img3 from "../../../public/Images/Services/package-tour-cta-bg.webp";
import { LuDot } from "react-icons/lu";

const ServiceBreadCrump = () => {
  return (
    <>
      <div className="bg-[#234C6A]">
        <div className="md:max-w-8xl mx-auto px-6 pb-8 pt-32 md:px-24 md:pt-48 md:pb-16">
          <div className="flex gap-6 items-strech">
            <div className="hidden md:flex items-end">
              <img
                src={Img1}
                alt="Circle Image"
                className="object-contain shrink-0 h-auto w-56 animate-bounce"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <button className="flex gap-1 items-center justify-center rounded-full w-56 h-10 text-white bg-[#c97a4f] ">
                <LuDot size={36} /> About Our Company
              </button>
              <h1 className="text-4xl md:text-6xl md:leading-24 text-white text-center">
                Our Exceptional Services
              </h1>
              <p className="md:text-xl md:leading-8 text-center text-white">
                Travel is the ultimate way to explore the world, embrace new
                cultures, and create unforgettable memories. Whether you’re
                wandering through ancient streets.
              </p>
              <button className="bg-white rounded-full flex items-center justify-center h-12 w-56 gap-2 text-lg">
                <Link to={"/"} className="cursor-pointer">
                  HOME
                </Link>{" "}
                -- <span className="text-[#c97a4f]">SERVICES</span>
              </button>
            </div>
           <div className="hidden md:flex items-start">
             <img
              src={Img2}
              alt="Circle Image"
              className="object-contain shrink-0 h-auto w-56 animate-bounce"
            />
          </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBreadCrump;
