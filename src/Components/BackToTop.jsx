import React from 'react'
import { RxDoubleArrowUp } from 'react-icons/rx'

const BackToTop = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute bottom-4 right-26 md:right-24 '>
          <button onClick={() => window.scrollTo({top : 0, left:0, behavior : "smooth"})} className='flex items-center justify-center gap-2 bg-[#c97a4f] text-white hover:text-[#c97a4f] hover:bg-white cursor-pointer rounded-full w-44 md:w-48 h-12 text-sm md:text-lg'>Top of The Page <RxDoubleArrowUp size={20} /></button>
        </div>
      </div>
    </>
  )
}

export default BackToTop
