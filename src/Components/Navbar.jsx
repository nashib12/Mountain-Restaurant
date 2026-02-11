import React, { useEffect, useState } from "react";
import LogoImg from "../../public/Images/logo.svg";
import LogoScrollImg from "../../public/Images/logo-scroll.svg";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { TbMenu4 } from "react-icons/tb";
import { FiX } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Detect scroll position for navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 20 ? setIsAtTop(false) : setIsAtTop(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  // Smooth scroll with easing animation
  const smoothScrollTo = (targetPosition, duration = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    // Easing function for smooth animation
    const easeInOutCubic = (t) => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    };

    setIsScrolling(true);
    requestAnimationFrame(animation);
  };

  // Handle scroll to section with smooth animation
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = sectionTop - navbarHeight;

      smoothScrollTo(targetPosition, 1200); // 1.2 seconds duration
    }

    setMobileOpen(false);
  };

  // Handle scroll to top
  const handleScrollToTop = () => {
    smoothScrollTo(0, 1000);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-screen z-50 transition-all duration-500 ease-in-out py-4 ${
          isAtTop
            ? "bg-transparent text-white border-b border-b-white"
            : "text-black bg-white shadow-xl"
        }`}
      >
        <div className="md:max-w-8xl md:px-24 mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <img
            src={isAtTop ? LogoImg : LogoScrollImg}
            alt="Logo"
            className="w-auto h-16 transition-opacity duration-300"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-24 text-xl">
            <li>
              <button
                onClick={handleScrollToTop}
                className="relative group transition-colors duration-300 hover:text-[#C97A4F] cursor-pointer"
                disabled={isScrolling}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97A4F] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollTo("about")}
                className="relative group transition-colors duration-300 hover:text-[#C97A4F] cursor-pointer"
                disabled={isScrolling}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97A4F] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollTo("rooms")}
                className="relative group transition-colors duration-300 hover:text-[#C97A4F] cursor-pointer"
                disabled={isScrolling}
              >
                Accommodation
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97A4F] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollTo("services")}
                className="relative group transition-colors duration-300 hover:text-[#C97A4F] cursor-pointer"
                disabled={isScrolling}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97A4F] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScrollTo("gallery")}
                className="relative group transition-colors duration-300 hover:text-[#C97A4F] cursor-pointer"
                disabled={isScrolling}
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97A4F] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          </ul>

          {/* Desktop Button */}
          <button
            className={`hidden group md:flex items-center cursor-pointer justify-center gap-2 text-xl hover:flex-row-reverse rounded-full w-48 h-14 transition-all duration-300 ${
              isAtTop ? "text-[#C97A4F] bg-white" : "bg-[#C97A4F] text-white"
            } uppercase hover:scale-105 hover:shadow-lg`}
          >
            <BsArrowUpRightCircle
              size={32}
              className="transition-transform duration-700 ease-in-out group-hover:rotate-360 group-hover:translate-x-1"
            />
            <span className="transition-all duration-700 ease-in-out">
              Book now
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden rounded-full p-1 transition-all duration-300 ${
              isAtTop
                ? "bg-transparent border border-white text-white"
                : "bg-[#362618] text-white"
            }`}
            onClick={() => setMobileOpen(true)}
          >
            <TbMenu4 size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/90 animate-fadeIn"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="fixed top-0 left-0 h-full w-80 bg-white z-50 animate-slideInLeft">
            <div className="border-b">
              <div className="flex items-center justify-between px-6 py-4">
                <img src={LogoScrollImg} alt="Logo" className="h-14 w-auto" />
                <button
                  className="rounded-full p-1 shadow-lg transition-transform duration-200 hover:rotate-90"
                  onClick={() => setMobileOpen(false)}
                >
                  <FiX size={36} />
                </button>
              </div>
            </div>

            <div className="px-6 py-4">
              <ul className="text-xl flex flex-col gap-2">
                <li className="border-b py-2 flex justify-between transition-all duration-300 hover:pl-2 hover:text-[#C97A4F]">
                  <button onClick={handleScrollToTop} disabled={isScrolling}>
                    Home
                  </button>
                  <GoPlus size={24} className="transition-transform duration-300 hover:rotate-90" />
                </li>

                <li className="border-b py-2 flex justify-between transition-all duration-300 hover:pl-2 hover:text-[#C97A4F]">
                  <button
                    onClick={() => handleScrollTo("services")}
                    disabled={isScrolling}
                  >
                    Services
                  </button>
                  <GoPlus size={24} className="transition-transform duration-300 hover:rotate-90" />
                </li>

                <li className="border-b py-2 flex justify-between transition-all duration-300 hover:pl-2 hover:text-[#C97A4F]">
                  <button
                    onClick={() => handleScrollTo("about")}
                    disabled={isScrolling}
                  >
                    About
                  </button>
                  <GoPlus size={24} className="transition-transform duration-300 hover:rotate-90" />
                </li>

                <li className="py-2 flex justify-between transition-all duration-300 hover:pl-2 hover:text-[#C97A4F]">
                  <button
                    onClick={() => handleScrollTo("contact")}
                    disabled={isScrolling}
                  >
                    Contact
                  </button>
                  <GoPlus size={24} className="transition-transform duration-300 hover:rotate-90" />
                </li>
              </ul>
            </div>
          </aside>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;