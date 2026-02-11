import React, { useEffect, useRef } from 'react'
import { CiWifiOn } from 'react-icons/ci'
import { TbCompass } from 'react-icons/tb'

import AccomImg from '../../../public/Images/bungalow.png'
import WifiImg from '../../../public/Images/wifi.png'
import GuideImg from '../../../public/Images/tour-guide.png'
import FireImg from '../../../public/Images/bonfire.png'
import TentImg from '../../../public/Images/tent.png'
import MontImg1 from '../../../public/Images/About/mountain-tour-why-choose-1.webp'
import MontImg2 from '../../../public/Images/About/mountain-tour-why-choose-2.webp'


const Mission = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    
     useEffect(() => {
    const section = sectionRef.current
    const left = leftRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add('overflow-hidden')
        } else {
          document.body.classList.remove('overflow-hidden')
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(section)

    const handleScroll = () => {
      const isBottom =
        left.scrollTop + left.clientHeight >= left.scrollHeight - 5

      if (isBottom) {
        document.body.classList.remove('overflow-hidden')
      }
    }

    left.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      left.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <>
      <div ref={sectionRef} className='md:max-w-8xl mx-auto px-6 md:px-24 py-12 md:py-24'>
        <div className='grid md:grid-cols-2 gap-8'>
            <div ref={leftRef} className='flex flex-col items-start gap-2 md:gap-12 overflow-y-auto'>
               <div className='flex flex-col items-center md:items-start gap-4'>
                    <span className='uppercase flex gap-2 justify-center items-center'><TbCompass size={28} className='text-[#c97a4f]' />What Makes Us Different</span>
                    <h2 className='text-3xl md:text-6xl'>Why Choose Safar</h2>
               </div>
               <div className='md:max-w-sm mx-auto flex gap-4 flex-col items-center justify-center'>
                    <button className='rounded-full h-36 w-24 bg-white/50 text-[#c97a4f] hover:text-white hover:bg-[#c97a4f] flex items-center justify-center cursor-pointer shadow-sm'><img src={WifiImg} alt='Logo' className='w-16 h-16' /></button>
                    <div className='text-center'>
                        <h3 className='text-xl md:text-4xl md:mb-6'>Multi-Day Trekking</h3>
                        <p className='md:text-xl'>Stay fit with our state-of-the-art gym equipment & personal training sessions exclusively</p>
                    </div>
                </div>
                <div className='md:max-w-sm mx-auto flex gap-6 flex-col items-center justify-center'>
                    <button className='rounded-full h-36 w-24 bg-white/50 text-[#c97a4f] hover:text-white hover:bg-[#c97a4f] flex items-center justify-center cursor-pointer shadow-sm'><img src={AccomImg} alt='Logo' className='w-16 h-16' /></button>
                    <div className='text-center'>
                        <h3 className='text-xl md:text-4xl md:mb-6'>Accommodiation Variety</h3>
                        <p className='md:text-xl'>Travel is more than just moving from one place to another it's an opportunity</p>
                    </div>
                </div>
                <div className='md:max-w-sm mx-auto flex gap-6 flex-col items-center justify-center'>
                    <button className='rounded-full h-36 w-24 bg-white/50 text-[#c97a4f] hover:text-white hover:bg-[#c97a4f] flex items-center justify-center cursor-pointer shadow-sm'><img src={GuideImg} alt='Logo' className='w-16 h-16' /></button>
                    <div className='text-center'>
                        <h3 className='text-xl md:text-4xl md:mb-6'>Guided Support</h3>
                        <p className='md:text-xl'>Travel is more than just moving from one place to another it's an opportunity</p>
                    </div>
                </div>
                <div className='md:max-w-sm mx-auto flex gap-6 flex-col items-center justify-center'>
                    <button className='rounded-full h-36 w-24 bg-white/50 text-[#c97a4f] hover:text-white hover:bg-[#c97a4f] flex items-center justify-center cursor-pointer shadow-sm'><img src={FireImg} alt='Logo' className='w-16 h-16' /></button>
                    <div className='text-center'>
                        <h3 className='text-xl md:text-4xl md:mb-6'>Campfire</h3>
                        <p className='md:text-xl'>Travel enriches the soul and broadens perspectives it teaches us to</p>
                    </div>
                </div>
                <div className='md:max-w-sm mx-auto flex gap-6 flex-col items-center justify-center'>
                    <button className='rounded-full h-36 w-24 bg-white/50 text-[#c97a4f] hover:text-white hover:bg-[#c97a4f] flex items-center justify-center cursor-pointer shadow-sm'><img src={TentImg} alt='Logo' className='w-16 h-16' /></button>
                    <div className='text-center'>
                        <h3 className='text-xl md:text-4xl md:mb-6'>Camping</h3>
                        <p className='md:text-xl'>In every destination, there’s a story waiting to be discovered and in every</p>
                    </div>
                </div>
            </div>
            {/* right sectiion  */}
            <div className='sticky top-32 h-screen '>
                <div className='grid grid-cols-2 gap-0'>
                    <div className='col-span-2'>
                        <div className='flex flex-col-reverse md:grid grid-cols-2 gap-0 mb-14 md:mb-0'>
                            <div className='bg-[#c97a4f] text-white flex flex-col gap-4 justify-center px-4 py-8 md:w-70 h-70 md:mt-20 md:ml-12'>
                                <h3 className='text-3xl'>Our Mssion</h3>
                                <p className='text-xl leading-7'>Breathe in the mountain air feel the rush of adventure</p>
                                <button className='relative text-center w-40 h-12 rounded-full bg-white text-black hover:text-white cursor-pointer transition-durations duration-300 overflow-hidden group'>
                                    <span className='absolute inset-0 bg-amber-950 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0'></span>
                                    <span className='relative z-10 uppercase'>Know More</span>
                                </button>
                            </div>
                            <img src={MontImg2} alt="Why Choose us" className='h-90 w-full object-cover' />
                        </div>
                        </div>
                        <div className='col-span-2'>
                        <div className='grid md:grid-cols-2 gap-0'>
                            <img src={MontImg1} alt="Why Choose us" className='h-90 w-full object-cover' />
                            <div className='bg-amber-950 text-white flex flex-col gap-4 justify-center px-4 py-8 md:w-70 h-70'>
                                <h3 className='text-3xl'>Our Vision</h3>
                                <p className='text-xl leading-7'>Traveling allows you connect with diverse people</p>
                                <button className='relative text-center w-40 h-12 rounded-full bg-white text-black hover:text-white cursor-pointer transition-durations duration-300 overflow-hidden group'>
                                    <span className='absolute inset-0 bg-[#c97a4f] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0'></span>
                                    <span className='relative z-10 uppercase'>Know More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Mission
