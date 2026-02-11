import React from "react";

import BorderImg from "../../../public/Images/Services/frame.png";
import BookingImg from "../../../public/Images/Services/booking.png";
import CalendarImg from "../../../public/Images/Services/calendar.png";
import SkylineImg from "../../../public/Images/Services/skyline.png";
import SuitcaseImg from "../../../public/Images/Services/suitcase.png";
import TravelImg from "../../../public/Images/Services/travel.png";
import WebsiteImg from "../../../public/Images/Services/website.png";
import { BsArrowRightCircle } from "react-icons/bs";

const ServiceCard = () => {
  const services = [
    {
      id: 1,
      img: BookingImg,
      alt: "Booking Services",
      title: "Online Room Booking",
      content:
        "Book rooms effortlessly with real-time updates, instant confirmation, and secure pricing for a smooth travel experience.",
    },
    {
      id: 2,
      img: CalendarImg,
      alt: "Event & Conference",
      title: "Event & Conference Room",
      content:
        "Reserve professional spaces for meetings or events with instant confirmation, scheduling, and transparent cost details.",
    },
    {
      id: 3,
      img: SuitcaseImg,
      alt: "Custom Travel",
      title: "Custom Travel Planning",
      content:
        "Plan your dream trip with tailored itineraries, live updates, instant booking, and fair transparent pricing anytime.",
    },
    {
      id: 4,
      img: WebsiteImg,
      alt: "Corporate Stay",
      title: "Corporate Stay Management",
      content:
        "Simplify corporate travel with managed stays, instant confirmation, and real-time availability designed for business comfort.",
    },
    {
      id: 5,
      img: SkylineImg,
      alt: "City Tour",
      title: "City Tour Arrangements",
      content:
        "Discover top attractions with guided tours, instant booking, flexible timing, and transparent pricing for every traveler.",
    },
    {
      id: 6,
      img: TravelImg,
      alt: "Multi-destinatins",
      title: "Multi-Destinations Package",
      content:
        "Explore multiple cities seamlessly with flexible routes, instant booking, real-time updates, and transparent travel costs.",
    },
  ];

  return (
    <>
      <div className="md:max-w-8xl px-6 py-12 md:px-24 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-14">
          {services.map((item) => (
            <div key={item.id} className="relative group bg-[#F3F1EF] hover:bg-[#c97a4f] border border-[#f3f1ef]/70 shadow-sm rounded-2xl ">
              <img
                src={BorderImg}
                alt="Border Design"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-start text-black group-hover:text-white px-10 py-12 gap-2 md:gap-4">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-auto h-16 md:h-24 object-cover"
                />
                <h2 className="text-2xl text-center">{item.title}</h2>
                <p className="text-center">
                  {item.content}
                </p>
                <button className="cursor-pointer uppercase text-xl flex items-center justify-center gap-2 mt-1 md:mt-4">
                  Learn More <BsArrowRightCircle size={26} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
