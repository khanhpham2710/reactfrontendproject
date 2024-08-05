import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import SliderComponent from "../components/SliderComponent/SliderComponent"


function DefaultLayout({children}) {
  return (
    <div>
        <Header />
        <SliderComponent />
        {children}
        <Footer />
    </div>
  )
}

export default DefaultLayout
