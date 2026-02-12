import React from 'react'
import BgImage from '../../../public/Images/mountain-cta-bg.webp'
import { PiMountains } from 'react-icons/pi'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Booking = () => {
  return (
    <>
      <div className='md:max-w-8xl mx-auto px-4 md:px-28'>
        <div className='relative text-white'>
            <img src={BgImage} alt="Background Image" className='w-full h-80 md:h-130 object-cover' />
            <div className='absolute inset-0 bg-black/10 w-full h-full'></div>
            <div className='absolute inset-0 md:max-w-3xl mx-auto flex flex-col items-center justify-center gap-8'>
                <div className='flex items-center justify-center gap-2'>
                    <PiMountains size={26} />
                    <span className='uppercase text-lg font-semibold'>Click Book and Relax</span>
                </div>
                <h2 className='text-3xl md:text-7xl md:leading-24 text-center'>Your Dream Escape Starts Here</h2>
                <button className='relative text-black hover:text-white flex items-center justify-center gap-2 bg-white w-56 h-16 overflow-hidden transition-color duration-300 group cursor-pointer'><span className='absolute inset-0 bg-amber-950 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0'></span> <span className='text-xl relative z-10'>Book Your Stay</span> <MdKeyboardArrowRight size={28} className='relative z-10' /></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Booking
