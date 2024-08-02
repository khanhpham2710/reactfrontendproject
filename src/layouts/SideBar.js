import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'


function SideBar({children}) {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default SideBar
