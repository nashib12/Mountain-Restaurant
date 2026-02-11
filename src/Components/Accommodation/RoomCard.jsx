import React from 'react'
import { BiBed, BiHeart } from 'react-icons/bi'
import { BsPersonPlus } from 'react-icons/bs'

import RoomImg1 from '../../../public/Images/Accommodiation/accommodation-post-1.webp'
import RoomImg2 from '../../../public/Images/Accommodiation/accommodation-post-2.webp'
import RoomImg3 from '../../../public/Images/Accommodiation/accommodation-post-3.webp'
import RoomImg4 from '../../../public/Images/Accommodiation/accommodation-post-4.webp'
import RoomImg5 from '../../../public/Images/Accommodiation/accommodation-post-5.webp'
import RoomImg6 from '../../../public/Images/Accommodiation/accommodation-post-6.webp'
import { MdArrowOutward } from 'react-icons/md'

const RoomCard = () => {
    const roomDetails = [
        {id: 1, img:RoomImg1, size:"Double", person : "2 Persons", price:"130", title:"Golden Horizon Retreat", detail:"Details Here About Our Room Experience elegance and comfort in every detail. Our rooms and suites are thoughtfully..." },
        {id: 2, img:RoomImg2, size:"Single", person : "1 Person", price:"280", title:"Serenity Grand Hotel", detail:"Details Here About Our Room Our thoughtfully designed rooms, world-class amenities, and exceptional service make" },
        {id: 3, img:RoomImg3, size:"Single", person : "1 Person", price:"150", title:"The Velvet Orchid", detail:"Details Here About Our Room Our thoughtfully designed rooms, world-class amenities, and exceptional service make" },
        {id: 4, img:RoomImg4, size:"Triple", person : "3 Persons", price:"160", title:"Royal Horizon Suites", detail:"Details Here About Our Room Our thoughtfully designed rooms, world-class amenities, and exceptional service make" },
        {id: 5, img:RoomImg5, size:"Single", person : "1 Person", price:"220", title:"The Heritage Charm", detail:"Details Here About Our Room Our thoughtfully designed rooms, world-class amenities, and exceptional service make" },
        {id: 6, img:RoomImg6, size:"Double", person : "2 Persons", price:"175", title:"Whispering Pines Resort", detail:"Details Here About Our Room Our thoughtfully designed rooms, world-class amenities, and exceptional service make" }
    ]; 

  return (
    <>
      <div className='md:max-w-8xl mx-auto px-4 py-6 md:px-24 md:py-24'>
        <span className='text-xl'>Showing 1 - 6 of 45 Results </span>
        <div className='grid md:grid-cols-3 gap-6 md:gap-10 mt-4'>
            {roomDetails.map(item => (
            <div key={item.id} className='flex flex-col gap-10 shadow-xs border border-black/20 rounded-2xl px-6 py-8 overflow-hidden group'> 
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <button className='flex gap-2'><BiBed size={24} /> {item.size}</button>
                            <button className='flex gap-2'><BsPersonPlus size={24} />{item.person}</button>
                        </div>
                        <h2 className='text-lg flex gap-2'> From <h2 className='text-2xl'>${item.price}</h2> / Per Night</h2>
                    </div>
                    <button className='cursor-pointer bg-[#FAF5F1] text-[#c97a4f] hover:bg-[#c97a4f] hover:text-white rounded-lg h-16 w-16 flex items-center justify-center'><BiHeart size={32} /></button>
                </div>
                <img src={item.img} alt="Accommodiation Post" className='group-hover:scale-105 rounded-lg h-60 w-auto object-cover' />
                <div className='bg-[#FAF4EF] rounded-lg flex flex-col gap-4 px-4 py-4'>
                    <h3 className='text-2xl hover:text-[#c97a4f] cursor-pointer'>{item.title}</h3>
                    <p className='leading-7'>{item.detail}</p>
                    <button className='flex items-center gap-2 hover:text-[#c97a4f] uppercase text-xl'>Explore Now <MdArrowOutward size={32} /></button>
                </div>
            </div>
            ))}
        </div>
        <div className='mt-8 md:mt-16 flex items-center justify-center gap-4'>
            <button className='bg-[#c97a4f] text-white cursor-pointer text-center text-xl rounded-lg h-12 w-12 md:h-16 md:w-16'>1</button>
            <button className='border border-black/60 bg-white text-black hover:bg-[#c97a4f] hover:text-white cursor-pointer text-center text-xl rounded-lg h-12 w-12 md:h-16 md:w-16'>2</button>
            <button className='border border-black/60 bg-white text-black hover:bg-[#c97a4f] hover:text-white cursor-pointer text-center text-xl rounded-lg h-12 w-12 md:h-16 md:w-16'>3</button>
            <button className='border border-black/60 bg-white text-black hover:bg-[#c97a4f] hover:text-white cursor-pointer text-center text-xl rounded-lg h-12 w-12 md:h-16 md:w-16'>...</button>
            <button className='border border-black/60 bg-white text-black hover:bg-[#c97a4f] hover:text-white cursor-pointer text-center text-lg md:text-xl rounded-lg h-12 w-12 md:h-16 md:w-16'>Next</button>
        </div>
      </div>
    </>
  )
}

export default RoomCard
