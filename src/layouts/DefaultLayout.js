import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import SliderComponent from "../components/SliderComponent/SliderComponent"
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'


function DefaultLayout({children}) {
  return (
    <div>
        <Header/>
        <SliderComponent />
        {children}
        <Footer />
        <ScrollUpButton />
    </div>
  )
}

export default DefaultLayout
