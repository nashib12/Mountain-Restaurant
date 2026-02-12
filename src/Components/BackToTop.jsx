import React from "react";
import { RxDoubleArrowUp } from "react-icons/rx";

const BackToTop = () => {

  return (
    <>
      <div className="fixed bottom-6 right-6 2-50">
        <button
          onClick={() => window.lenis.scrollTo(0)}
          className="flex items-center justify-center bg-[#c97a4f] text-white hover:text-[#c97a4f] hover:bg-[#f5f5f5] hover:border hover:border-[#c97a4f] rounded-lg w-12 h-12 text-sm md:text-lg cursor-pointer hover:scale-105 transition-transform ease-out duration-300"
        >
          <RxDoubleArrowUp size={26} />
        </button>
      </div>
    </>
  );
};

export default BackToTop;
