import React from 'react'
import WhatsAppImg from '../../public/Images/whatsapp.png'

const WhatsAppBtn = () => {
  return (
    <>
      <div className='fixed bottom-20 right-6 z-5'>
        <a href='tel:980-0000000' className='inline-block cursor-pointer hover:scale-105 transition-transform ease-out duration-300'>
            <img src={WhatsAppImg} alt="Whatsapp Button" className='h-12 w-12' />
        </a>
      </div>
    </>
  )
}

export default WhatsAppBtn
