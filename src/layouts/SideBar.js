import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'

function SideBar({children}) {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
      <ScrollUpButton />
    </div>
  )
}

export default SideBar
