import React from "react";

import Img1 from "../../../public/Images/About/accommodation-post-24.webp";
import Img2 from "../../../public/Images/About/accommodation-post-25.webp";
import Img3 from "../../../public/Images/About/accommodation-post-26.webp";
import Img4 from "../../../public/Images/About/accommodation-post-27.webp";

import { PiMountains } from "react-icons/pi";
import { TbUserPlus } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const AboutUs = () => {
  return (
    <section id="rooms">
    <div className="bg-[#FAF5F1]">
      <div className="md:max-w-8xl mx-auto px-6 md:px-24 md:py-24 relative overflow-hidden z-10">
          <h2 className="absolute inset-0 hidden md:flex items-center justify-center whitespace-nowrap uppercase text-9xl opacity-5 top-10 z-0">
            Accommodation Near You
          </h2>
        
        <div className="grid md:grid-cols-2 gap-6 z-10">
          {/* about item 1 start */}
          <div className="md:max-w-3xl flex flex-col items-start justify-between">
            <div>
              <p className="flex gap-2 uppercase">
                <PiMountains size={16} /> Accommodation
              </p>
              <div className="md:max-w-md mx-auto">
                <h2 className="text-2xl md:text-6xl leading-10 md:leading-16">
                  Places To Stay Near Your Destinations
                </h2>
              </div>
            </div>
            <div className="relative group overflow-hidden mt-6 md:mt-18">
              <img
                src={Img1}
                alt="Accommodation Post"
                className="w-96 h-110 md:h-140 object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <button className="hidden absolute z-20 top-8 right-6 h-14 w-14 rounded-xl group-hover:flex items-center justify-center bg-white text-[#c97a4f] hover:bg-[#c97a4f] hover:text-white cursor-pointer">
                <BsArrowUpRight size={28} />
              </button>
              <div className="absolute inset-0 w-full h-full bg-black/20"></div>
              <div className="absolute inset-0 w-full h-full flex justify-end flex-col gap-4 text-white px-2 md:px-4 py-12">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <p className="flex items-center justify-center gap-2 text-lg">
                      <TbUserPlus size={22} />
                      <span>6 Guests</span>
                    </p>
                    <p className="flex text-xl">
                      From &nbsp;<h6 className="text-2xl">$300</h6>/Per Night
                    </p>
                  </div>
                  <button className="bg-transparent text-white rounded-md hover:bg-[#c97a4f] cursor-pointer flex items-center justify-center w-12 h-12">
                    <CiHeart size={36} />{" "}
                  </button>
                </div>
                <p className="flex items-start justify-center gap-2 mt-2 md:mt-8 text-lg md:text-xl">
                  <IoLocationOutline size={32} />
                  Cedar Boulevard, New York, NY 10001
                </p>
              </div>
            </div>
            <h6 className="mt-6 cursor-pointer hover:text-[#c97a4f] text-2xl">
              Savannah Trails Safari Lodge
            </h6>
          </div>
          {/* about item 1 end  */}

          {/* about item 2 start */}
          <div className="mt-6">
            <div className="relative group overflow-hidden">
              <img
                src={Img2}
                alt="Accommodation Post"
                className="w-full h-110 md:h-screen transform transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <button className="hidden absolute cursor-pointer top-8 right-8 h-14 w-14 rounded-xl z-20 group-hover:flex items-center justify-center bg-white text-[#c97a4f] hover:bg-[#c97a4f] hover:text-white transition-colors duration-300">
                <BsArrowUpRight size={28} />
              </button>
              <div className="absolute inset-0 w-full h-full bg-black/20"></div>
              <div className="absolute inset-0 w-full h-full flex justify-end flex-col gap-4 text-white px-2 md:px-8 py-12">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <p className="flex items-center justify-center gap-2 text-lg">
                      <TbUserPlus size={22} />
                      <span>4 Guests</span>
                    </p>
                    <p className="flex text-xl">
                      From &nbsp;<h6 className="text-2xl">$150</h6>/Per Night
                    </p>
                  </div>
                  <button className="bg-transparent text-white rounded-md hover:bg-[#c97a4f] cursor-pointer flex items-center justify-center w-12 h-12">
                    <CiHeart size={36} />{" "}
                  </button>
                </div>
                <p className="flex items-start gap-2 mt-2 md:mt-8 text-lg md:text-xl">
                  <IoLocationOutline size={32} /> Maple Avenue, New York, NY
                  10001
                </p>
              </div>
            </div>
            <h6 className="mt-6 cursor-pointer hover:text-[#c97a4f] text-2xl">
              Jungle Spirit Wildlife Retreat
            </h6>
          </div>
          {/* about item 2 end */}

          {/* about item 3 start */}
          <div className="md:max-w-xl mt-6 md:mt-24">
            <div className="relative group overflow-hidden ">
              <img
                src={Img3}
                alt="Accommodation Post"
                className="w-full h-110 md:h-screen otransform transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <button className="hidden absolute cursor-pointer top-8 right-8 h-14 w-14 rounded-xl z-20 group-hover:flex items-center justify-center bg-white text-[#c97a4f] hover:bg-[#c97a4f] hover:text-white transition-colors duration-300">
                <BsArrowUpRight size={28} />
              </button>
              <div className="absolute inset-0 w-full h-full bg-black/20"></div>
              <div className="absolute inset-0 w-full h-full flex justify-end flex-col gap-4 text-white px-2 md:px-8 py-12">
                <div className="flex w-full justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <p className="flex items-center justify-center gap-2 text-lg">
                      <TbUserPlus size={22} />
                      <span>6 Guests</span>
                    </p>
                    <p className="flex text-xl">
                      From &nbsp;<h6 className="text-2xl">$220</h6>/Per Night
                    </p>
                  </div>
                  <button className="bg-transparent text-white rounded-md hover:bg-[#c97a4f] cursor-pointer flex items-center justify-center w-12 h-12">
                    <CiHeart size={36} />{" "}
                  </button>
                </div>
                <p className="flex items-start gap-2 mt-2 md:mt-8 text-lg md:text-xl">
                  <IoLocationOutline size={32} /> Oak Parkway, New York, NY
                  10001
                </p>
              </div>
            </div>
            <h6 className="mt-6 cursor-pointer hover:text-[#c97a4f] text-2xl">
              Wild Horizon Nature Resort
            </h6>
            <div className="hidden md:flex items-center justify-center mt-16">
              <button className="relative bg-[#c97a4f] text-white flex items-center justify-center gap-2 h-16 w-56 text-xl cursor-pointer overflow-hidden transition-durations duration-300 group ">
                <span className="absolute inset-0 bg-amber-950 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
                <span className="relative z-10">Explore More</span>{" "}
                <MdKeyboardArrowRight size={26} className="relative z-10" />
              </button>
            </div>
          </div>
          {/* about item 3 end */}

          {/* about item 4 start */}
          <div className="md:max-w-xl md:relative mt-6">
            <div className="md:absolute bottom-0 left-10">
              <div className="relative group overflow-hidden">
                <img
                  src={Img4}
                  alt="Accommodation Post"
                  className="w-full h-110 md:h-screen transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <button className="hidden absolute cursor-pointer top-8 right-8 h-14 w-14 rounded-xl z-20 group-hover:flex items-center justify-center bg-white text-[#c97a4f] hover:bg-[#c97a4f] hover:text-white transition-colors duration-300">
                  <BsArrowUpRight size={28} />
                </button>
                <div className="absolute inset-0 w-full h-full bg-black/20"></div>
                <div className="absolute inset-0 w-full h-full flex justify-end flex-col gap-4 text-white px-2 md:px-8 py-12">
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col items-start gap-1">
                      <p className="flex items-center justify-center gap-2 text-lg">
                        <TbUserPlus size={22} />
                        <span>4 Guests</span>
                      </p>
                      <p className="flex text-xl">
                        From &nbsp;<h6 className="text-2xl">$300</h6>/Per Night
                      </p>
                    </div>
                    <button className="bg-transparent text-white rounded-md hover:bg-[#c97a4f] cursor-pointer flex items-center justify-center w-12 h-12">
                      <CiHeart size={36} />{" "}
                    </button>
                  </div>
                  <p className="flex items-start gap-2 mt-2 md:mt-8 text-lg md:text-xl">
                    <IoLocationOutline size={32} /> Ash Parkway, New York, NY
                    10001
                  </p>
                </div>
              </div>
              <h6 className="mt-6 cursor-pointer hover:text-[#c97a4f] text-2xl">
                Safari Lodge and Wildlife
              </h6>
            </div>
          </div>
          {/* about item 4 end */}

          <div className="flex md:hidden items-center justify-center mt-10 md:mt-16">
            <button className="bg-[#c97a4f] text-white flex items-center justify-center gap-2 h-16 w-56 text-xl">
              <span>Explore More</span>
              <MdKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
