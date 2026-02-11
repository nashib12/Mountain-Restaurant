import React from "react";

import VideoImg from "../../../public/Images/About/mountain-tour-video-popup-1.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import FoodImg from "../../../public/Images/cutlery.png";
import LocationImg from "../../../public/Images/location.png";
import BookImg from "../../../public/Images/booking.png";

const Discover = () => {

  return (
    <section id="services">
    <div className="bg-[#FAF5F1]">
      <div className="md:max-w-8xl mx-auto py-24 px-6 md:px-24 md:py-24">
        <h2
          className="text-3xl md:text-7xl md:leading-30 text-center"
        >
          Discover New Cultures
        </h2>
        <h2 className="text-center text-3xl md:text-7xl">
          Create Lasting Memories
        </h2>
        <div className="relative">
          <img
            src={VideoImg}
            alt="Video Thumbnail"
            className="w-full h-90 md:h-screen object-cover mt-8 md:mt-16"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="rounded-full bg-white text-black text-xl h-28 w-28 font-bold cursor-pointer ">
              PLAY VIDEO
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-16 grid md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex flex-col items-start justify-between gap-6">
              <h3 className="text-xl md:text-4xl md:leading-12">
                Find Peace Where Mountains Touch Clouds
              </h3>
              <p className="text-lg md:txt-xl md:leading-8">
                High-quality mattresses, plush pillows, and crisp, luxurious
                linens ensure a restful and rejuvenating sleep. Spacious
                bathrooms
              </p>
              <button className="relative bg-[#c97a4f] cursor-pointer w-48 h-14 flex items-center justify-center gap-2 uppercase text-white transition-colors overflow-hidden duration-300 group">
                <span className="absolute inset-0 bg-amber-950 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
                <span className="relative z-10">More About Us</span>
                <MdKeyboardArrowRight size={24} className="relative z-10" />
              </button>
            </div>
          </div>
          {/* card 1 start */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-[#FAF5F1] border border-black/10 flex flex-col items-start justify-center hover:bg-white px-8 py-8 gap-2 md:gap-4">
              <img
                src={FoodImg}
                alt="Food Logo"
                className="w-16 h-16 object-cover"
              />
              <h4 className="text-xl">Onsite Restaurant</h4>
              <p className="text-lg ">
                Communicating in a new language or adjusting to different
                customs
              </p>
            </div>
          </div>
          {/* card 1 end */}
          {/* card 2 start */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-[#FAF5F1] border border-black/10 flex flex-col items-start justify-center hover:bg-white px-8 py-8 gap-2 md:gap-4">
              <img
                src={LocationImg}
                alt="Location Logo"
                className="w-16 h-16 object-cover"
              />
              <h4 className="text-xl">Flexible Check-In</h4>
              <p className="text-lg ">
                Travel reminds us of the vastness of the planet, yet it also
                shows.
              </p>
            </div>
          </div>
          {/* card 2 end */}
          {/* card 3 start */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-[#FAF5F1] border border-black/10 flex flex-col items-start justify-center hover:bg-white px-8 py-8 gap-4">
              <img
                src={BookImg}
                alt="Booking Logo"
                className="w-16 h-16 object-cover"
              />
              <h4 className="text-xl">Easy Booking</h4>
              <p className="text-xl ">
                It is a celebration of life's endless possibilities, an
                invitation to explore.
              </p>
            </div>
          </div>
          {/* card 3 end */}
        </div>
      </div>
    </div></section>
  );
};

export default Discover;
