import React from 'react'
import BreadCrumbBg from '../../../public/Images/Accommodiation/safar-breadcrumb-bg.webp'
import { Link } from 'react-router-dom'

const BreadCrumb = () => {
  return (
    <>
      <div className='bg-[#234C6A] h-24'></div>
      <div className='relative text-white'>
        <img src={BreadCrumbBg} alt="BreadCrumb BackGround" className='w-full h-80 object-cover' />
        <div className='absolute inset-0 bg-black/60 w-full h-full'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
            <h1 className='text-3xl md:text-6xl font-semibold text-center leading-12'>Archives: Accommodation Types</h1>
            <button className='bg-transparent rounded-full h-12 w-76 gap-2 flex items-center justify-center border border-white/50'><Link to={'/'} className='cursor-pointer'>HOME</Link>-- <span className='text-[#c97a4f] uppercase'>Accommodation Type</span></button>
        </div>
      </div>
    </>
  )
}

export default BreadCrumb
