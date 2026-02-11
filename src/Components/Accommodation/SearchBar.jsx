import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'

const SearchBar = () => {
  return (
    <div className='bg-[#F3F1EF]'>
      <div className='md:max-w-8xl mx-auto px-4 py-16 md:px-24 md:py-24'>
        <div className='grid md:grid-cols-5 gap-8 md:gap-4'>
            <div className='flex flex-col items-start gap-2'>
                <span className='uppercase'>Check-In *</span>
                <button className='bg-white flex items-center justify-between px-6 w-full rounded-full cuursor-pointer h-16'>
                    <span className='text-lg'>Check-in Date</span>
                    <BiCalendar size={26} />
                </button>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <span className='uppercase'>Check-Out *</span>
                <button className='bg-white flex items-center justify-between px-6 w-full rounded-full cursor-pointer h-16'>
                    <span className='text-lg'>Check-Out Date</span>
                    <BiCalendar size={26} />
                </button>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <span className='uppercase'>Adults</span>
                <button className='bg-white flex items-center justify-between px-6 w-full rounded-full cursor-pointer h-16'>
                    <span className='text-lg'>1</span>
                    <MdKeyboardArrowDown size={26} />
                </button>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <span className='uppercase'>Children</span>
                <button className='bg-white flex items-center justify-between px-6 w-full rounded-full cursor-pointer h-16'>
                    <span className='text-lg'>1</span>
                    <MdKeyboardArrowDown size={26} />
                </button>
            </div>
            <div className='flex flex-col items-end justify-end gap-2'>
                <button className='bg-[#c97a4f] flex items-center justify-center px-4 w-full rounded-full cursor-pointer h-16 text-white text-xl hover:bg-[#362618]'>
                    Check Availability
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
