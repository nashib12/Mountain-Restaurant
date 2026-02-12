import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PiMountains } from "react-icons/pi";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import StarImg from "../../../public/Images/star.png";
import AvatarImg from "../../../public/Images/avatar-1.webp";

const FeedBack = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const goPrev = () => emblaApi?.scrollPrev();
  const goNext = () => emblaApi?.scrollNext();

  const slides = [1, 2, 3, 4];

  return (
    <div className="bg-[#FAF5F1]">
      <div className="md:max-w-8xl mx-auto px-4 md:px-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:items-end">
          <div>
            <span className="flex items-center justify-center md:justify-start gap-2 uppercase">
              <PiMountains size={22} className="text-amber-950" />
              100% Satisfaction Guarantee
            </span>
            <h2 className="text-3xl md:text-7xl mt-4 mb-10">
              Read Client's Feedback
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={goPrev}
              className="h-8 w-8 md:h-16 md:w-16 bg-[#c97a4f] hover:bg-amber-950 text-white flex items-center justify-center"
            >
              <GoArrowUpLeft size={36} />
            </button>
            <button
              onClick={goNext}
              className="h-8 w-8 md:h-16 md:w-16 bg-[#c97a4f] hover:bg-amber-950 text-white flex items-center justify-center"
            >
              <GoArrowUpRight size={36} />
            </button>
          </div>
        </div>

        {/* Embla */}
        <div className="overflow-hidden py-12 md:mt-12 md:border-t border-t-black/20" ref={emblaRef}>
          <div className="flex">
            {slides.map((_, index) => {
              const isActive = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="
                    min-w-0
                    flex-[0_0_100%] 
                    md:flex-[0_0_33.333%]
                    px-3
                  "
                >
                  <div
                    className={`
                      overflow-hidden
                      transition-all duration-700 ease-out
                      will-change-transform
                      ${
                        isActive
                          ? "scale-100 opacity-100 "
                          : "scale-90 opacity-50 "
                      }
                    `}
                  >
                    <div className="flex flex-col items-center text-center gap-6 p-8 rounded-xl shadow-md">

                      {/* Stars */}
                      <div className="flex gap-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <img
                              key={i}
                              src={StarImg}
                              alt="Star"
                              className="w-6 h-6"
                            />
                          ))}
                      </div>

                      {/* Text */}
                      <p className="text-xl leading-8">
                        “An amazing journey filled with breathtaking sights and
                        cultural experiences. Every detail was handled perfectly.”
                      </p>

                      {/* Avatar */}
                      <img
                        src={AvatarImg}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full"
                      />

                      <div>
                        <h3 className="font-semibold">Amber Page</h3>
                        <p className="text-sm opacity-70">
                          Heritage Hunter
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeedBack;
