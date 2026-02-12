import React from "react";
import LogoImg from "../../public/Images/logo-scroll.svg";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="md:max-w-8xl mx-auto px-4 md:px-24 pt-12 md:pt-24">
        <div className="grid md:grid-cols-5 gap-6 mb-12 md:mb-24">
          <div className="flex items-start justify-center flex-col gap-6">
            <img src={LogoImg} alt="Logo Image" className="w-auto h-14" />
            <p className="leading-7">
              Embark on an unforgettable journey with Saafar. Our expert team
              curates personalized travel experiences
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-xl">Follow Us On:</span>
              <div className="flex items-start gap-4">
                <button className="bg-white shadow-sm hover:bg-[#C97A4F] cursor-pointer h-12 w-12 p-2">
                  <FaFacebookF size={30} />
                </button>
                <button className="bg-white shadow-sm hover:bg-[#C97A4F] cursor-pointer h-12 w-12 p-2">
                  <FaXTwitter size={30} />
                </button>
                <button className="bg-white shadow-sm hover:bg-[#C97A4F] cursor-pointer h-12 w-12 p-2">
                  <FaInstagram size={30} />
                </button>
                <button className="bg-white shadow-sm hover:bg-[#C97A4F] cursor-pointer h-12 w-12 p-2">
                  <FaLinkedinIn size={30} />
                </button>
              </div>
            </div>
          </div>
          <div></div>
          <div className="col-span-3">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="uppercase text-2xl mb-3 md:mb-6">About Us</h2>
                <ul className="flex flex-col gap-4 md:gap-6">
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    About US
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Top Destinations
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Featured Tips
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Why Choose Us
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    FAQ Questions
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="uppercase text-2xl mb-3 md:mb-6">Support</h2>
                <ul className="flex flex-col gap-4 md:gap-6">
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Get in Touch
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Offers & Promotions
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Terms & Conditions
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    View Sitemap
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="uppercase text-2xl mb-3 md:mb-6">Contact Info</h2>
                <ul className="flex flex-col gap-4 md:gap-6">
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    <a href="mailto:example@gmail.com">
                    example@example.com</a>
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    <a href="tel:980-000000">
                    (+977) 980-0000000</a>
                  </li>
                  <li className="cursor-pointer hover:text-[#c97a4f]">
                    Pokhara. Nepal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 pb-18 md:py-6">
          <p className="text-md text-center md:text-start"> &copy; {new Date().getFullYear()} New Hotel Website | Crafted by <a href="https://sait.com.np/" target="_blank">S.A I.T Solution Nepal</a> </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
