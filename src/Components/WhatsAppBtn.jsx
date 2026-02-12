import React from 'react'
import WhatsAppImg from '../../public/Images/whatsapp.png'

const WhatsAppBtn = () => {
  return (
    <>
      <div className='fixed bottom-18 right-6 z-50'>
        <a href="https://wa.me/980-000000" target='blank' className='inline-block cursor-pointer hover:scale-105 transition-transform ease-out duration-300'>
            <img src={WhatsAppImg} alt="Whatsapp Button" className='h-11 w-11' />
        </a>
      </div>
    </>
  )
}

export default WhatsAppBtn
