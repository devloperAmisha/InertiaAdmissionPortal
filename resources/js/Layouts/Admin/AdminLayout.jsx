import React from 'react'
import Navbar from '../../Components/Admin/Navbar'
import Footer from '../../Components/Admin/Footer'

export default function AdminLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
