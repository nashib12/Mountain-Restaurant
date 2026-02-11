import React from "react";
import { Link } from "react-router-dom";
import BgImage from "../../public/Images/404.webp";
import { BsArrowUpRightCircle } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <>
      <div className="relative z-100">
        <img
          src={BgImage}
          alt="Background Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 w-full h-full"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
          <h1 className="text-4xl md:text-[24rem] md:mb-2">404</h1>
          <h2 className="text-xl md:text-7xl md:mb-1">
            Oops... Page Not Found!
          </h2>
          <p className="text-lg md:text-xl">
            Please return to the homepage, It seems there has been some error!
          </p>
          <Link to={'/'}
            className="bg-[#c97a4f] group flex items-center cursor-pointer justify-center gap-2 text-2xl hover:flex-row-reverse rounded-full w-56 h-16 "
          >
            <BsArrowUpRightCircle
              size={36}
              className="transition-transform duration-700 ease-in-out group-hover:rotate-360 group-hover:translate-x-1"
            />
            <span className="transition-all duration-700 ease-in-out">
              Book now
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
