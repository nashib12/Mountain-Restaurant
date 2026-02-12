import React from "react";
import { PiMountains } from "react-icons/pi";

import Img1 from "../../../public/Images/About/mt-about-1.webp";
import Img2 from "../../../public/Images/About/mt-about-2.webp";
import Img3 from "../../../public/Images/About/mt-about-3.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <>

    <section id="about" >
      <div className="md:max-w-8xl mx-auto px-4 md:px-24 py-12 md:pt-36 flex flex-col items-center gap-2 text-center ">
        <div className="md:max-w-7xl mx-auto md:px-28 flex flex-col items-center gap-2">
          <p className="flex gap-2 uppercase">
            <PiMountains size={16} /> About Us
          </p>
          <h2 className="leading-10 md:leading-20 text-4xl md:text-7xl mt-1 ">
            Discover Hidden Mountains Whispers Of The Peak
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <img
            src={Img1}
            alt="Mountain Image"
            className="h-110 md:h-160 w-full shaddow-sm object-cover"
          />
          <img
            src={Img2}
            alt="Mountain Image"
            className="h-110 md:h-160 w-full shaddow-sm object-cover"
          />
          <img
            src={Img3}
            alt="Mountain Image"
            className="110 md:h-160 w-full shaddow-sm object-cover"
          />
        </div>
        <div className="grid md:grid-cols-5 gap-4 px-4 mt-12">
          <div className="col-span-2">
            <h3 className="text-2xl md:text-4xl leading-8 md:leading-12 text-justify mb-6">
              Adventure Begins Where The Mountains Touch Sky
            </h3>
            <button className="relative flex items-center justify-center gap-2 cursor-pointer text-white bg-[#C97A4F] text-xl w-48 h-12 overflow-hidden transition-colors duration-300 group">
              {" "}
              <span class="absolute inset-0 bg-amber-950 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
              <span className="relative z-10">More About Us</span>{" "}
              <MdKeyboardArrowRight size={26} className="relative z-10" />
            </button>
          </div>
          <div></div>
          <div className="col-span-2 text-justify">
            <p className="text-xl">
              Whether it’s a solo backpacking trip, a family vacation, a
              corporate event, or an elaborate destination wedding, a travel
              agency combines expertise, efficiency, and a passion for travel to
              create seamless
            </p>
            <div className="flex gap-6">
              <div className="mt-6">
                <h3 className="text-[#C97A4F] text-5xl mb-1">135+</h3>
                <p>Hotel and Resorts</p>
              </div>
              <div className="mt-6">
                <h3 className="text-[#C97A4F] text-5xl mb-1">14K+</h3>
                <p>Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default About;
