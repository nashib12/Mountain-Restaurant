import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import './App.css'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BackToTop from './Components/BackToTop'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import RoomPage from './Pages/RoomPage'
import Services from './Pages/Services'
import WhatsAppBtn from './Components/WhatsAppBtn'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    window.lenis = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room' element={<RoomPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
      <WhatsAppBtn />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
