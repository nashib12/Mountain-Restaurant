import React from 'react'

import BgImage from '../../../public/Images/Services/package-tour-cta-bg.webp'

const Tour = () => {
  return (
    <>
      <div className='px-4 relative '>
        <img src={BgImage} alt="Planning Background" className='w-full h-80 object-cover rounded-xl' />
        <div className='absolute inset-0 bg-black/30 w-full h-80 rounded-xl'></div>
        <div className='absolute inset-0 '>

        </div>

      </div>
    </>
  )
}

export default Tour
