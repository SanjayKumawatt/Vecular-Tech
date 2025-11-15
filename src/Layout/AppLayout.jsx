import React from 'react'
import Navbar from '../Components/Header'
import { Home } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout