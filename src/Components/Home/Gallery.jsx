import React from 'react'
import GalleryImg1 from '../../../public/Images/Gallery/mountain-tour-gallary-5.webp'
import GalleryImg2 from '../../../public/Images/Gallery/mountain-tour-gallary-6.webp'
import GalleryImg3 from '../../../public/Images/Gallery/mountain-tour-gallary-7.webp'
import GalleryImg4 from '../../../public/Images/Gallery/mountain-tour-gallary-8.webp'
import GalleryImg5 from '../../../public/Images/Gallery/mountain-tour-gallary-1.webp'
import GalleryImg6 from '../../../public/Images/Gallery/mountain-tour-gallary-2.webp'
import GalleryImg7 from '../../../public/Images/Gallery/mountain-tour-gallary-3.webp'
import GalleryImg8 from '../../../public/Images/Gallery/mountain-tour-gallary-4.webp'

const Gallery = () => {
  return (
    <>
    <section id='gallery'>
    <div className=' px-4 overflow-hidden md:z-10 py-12 md:py-24'>
        <div className='flex items-center justify-center whitespace-nowrap opacity-15'>
            <h2 className='text-3xl md:text-[7.5rem] uppercase mb-6'>Gallery</h2>
        </div>
        <div className='grid gap-6'>
            <div className='flex gap-4 items-end'>
                <img src={GalleryImg2} alt="Gallery Image" className='w-60 md:w-full object-contain' />
                <img src={GalleryImg1} alt="Gallery Image" className='w-60 md:w-full object-contain' />
                <img src={GalleryImg4} alt="Gallery Image" className='w-60 md:w-full object-contain' />
                <img src={GalleryImg3} alt="Gallery Image" className='w-60 md:w-full object-contain' />
            </div>
              <div className='flex gap-4 items-start'>
                <img src={GalleryImg7} alt="Gallery Image" className='w-60 md:w-full object-contain' />
                <img src={GalleryImg8} alt="Gallery Image" className='w-60 md:w-full object-contain' />
                <img src={GalleryImg5} alt="Gallery Image" className='w-60 md:w-full object-contain' />
                <img src={GalleryImg6} alt="Gallery Image" className='w-60 md:w-full object-contain' />
            </div>
        </div>

    </div></section>
    </>
  )
}

export default Gallery
