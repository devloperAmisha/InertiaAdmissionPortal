import React from 'react'
import Navbar from '../../Components/Client/Navbar'
import Footer from '../../Components/Client/Footer'

function Layout({children}) {
  return (
    <>
          <Navbar/>
             {children}
          <Footer/>
     </>
  )
}

export default Layout

