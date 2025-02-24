import React from 'react'
import Navbar from '../../Components/Client/Navbar'
import Footer from '../../Components/Client/Footer'
import { usePage } from '@inertiajs/react'

function Layout({children}) {
    const { flash } = usePage().props
  return (
    <>
          <Navbar/>
          {flash.success && (
              <div class="alert alert-success" role="alert">
                  {flash.success}
              </div>
          )}

          {flash.error && (
              <div class="alert alert-error" role="alert">
                  {flash.error}
              </div>
          )}
          <div style={{ minHeight: '50vh' }}>
              {children}
          </div>
          <Footer/>
     </>
  )
}

export default Layout

