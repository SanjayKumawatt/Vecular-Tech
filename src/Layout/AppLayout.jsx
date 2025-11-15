import React from 'react'
import Navbar from '../Components/Header'
import { Home } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const AppLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout