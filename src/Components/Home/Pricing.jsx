import React from "react";
import { PiArrowSquareOutLight, PiMountains } from "react-icons/pi";

import SportImg1 from '../../../public/Images/Sports/kayaking.jpg'
import SportImg2 from '../../../public/Images/Sports/paraglading.jpg'
import SportImg3 from '../../../public/Images/Sports/rock.jpg'
import SportImg4 from '../../../public/Images/Sports/sycling.avif'
import { TbUserPlus } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";

const Pricing = () => {
  const sportImg = [
    {id : 1, img: SportImg1, title : "Kayaking" },
    {id : 2, img: SportImg2, title : "Paraglading" },
    {id : 3, img: SportImg3, title : "Rock Climbing" },
    {id : 4, img: SportImg4, title : "Cycling" },
  ]
  return (
    <>
    <section id="">
      <div className="md:max-w-8xl mx-auto px-4 md:px-24 py-12 md:py-24 text-center">
        <span className="flex items-center justify-center gap-2 uppercase">
          <PiMountains size={22} className="text-amber-950" /> Neaarby Adventures
        </span>
        <h2 className="text-3xl md:text-7xl mt-2">Choose Adventure Location</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 md:mt-16">
        {sportImg.map(items => (
          <div key={items.id} className="relative">
          <img src= {items.img} alt="Kayaking" className="w-full h-110 object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/20 w-full h-110 rounded-2xl"></div>
          <div className="absolute inset-0 text-white flex items-end pb-4 ml-4 ">
            <h6 className="text-3xl">{items.title}</h6>
          </div>
        </div>
        ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Pricing;
