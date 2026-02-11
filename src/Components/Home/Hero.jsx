import React from 'react'
import HeroImg from '../../../public/Images/mountain-tour-hero-bg.webp'
import HeroImg1 from '../../../public/Images/mountain-bg-2.webp'
import { BiCalendar } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <>
      <div className='relative'>
        <img src={HeroImg} alt="Hero Main Bg" className='w-full h-screen object-cover' />
        <img src={HeroImg1} alt="Hero Main Bg" className='hidden md:block absolute -bottom-16 right-0 w-full h-116 object-cover' />
        <div className='absolute inset-0 md:max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center mt-34 md:mt-48 '>
            <h1 className='text-white text-4xl md:text-[13rem] uppercase'>Mountain</h1>
            <h2 className='text-white text-xl md:text-8xl '>Explore Destinations</h2>
            <div className='bg-white grid w-full md:grid-cols-5 gap-4 px-8 py-8 mt-6 md:mt-16'>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-lg'>Check-in *</p>
                    <button className='flex bg-gray-100 px-4 py-2 justify-between items-center h-16 '><span>Check-in Date</span><BiCalendar size={28} /></button>
                </div>
                 <div className='flex flex-col gap-2'>
                    <p className='uppercase text-lg'>Check-out *</p>
                    <button className='flex bg-gray-100 px-4 py-2 justify-between items-center h-16 '><span>Check-out Date</span><BiCalendar size={28} /></button>
                </div>
                 <div className='flex flex-col gap-2'>
                    <p className='uppercase text-lg'>Adults</p>
                    <button className='flex bg-gray-100 px-4 py-2 justify-between items-center h-16 '><span>1</span><RiArrowDropDownLine size={32} /></button>
                </div>
                 <div className='flex flex-col gap-2'>
                    <p className='uppercase text-lg'>Children</p>
                    <button className='flex bg-gray-100 px-4 py-2 justify-between items-center h-16'><span>1</span><RiArrowDropDownLine size={32} /></button>
                </div>
                <div className='flex flex-col-reverse gap-2'>
                    <button className='text-center px-4 py-2  h-16 uppercase text-white bg-[#C97A4F] hover:bg-black/90 cursor-pointer'>Check Availability</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
