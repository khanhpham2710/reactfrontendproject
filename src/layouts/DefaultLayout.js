import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import Slider from '../components/Slider/Slider'

function DefaultLayout({children}) {
  return (
    <div>
        <Header />
        <Slider />
        {children}
        <Footer />
    </div>
  )
}

export default DefaultLayout
