import React from 'react'
import Header from '../components/blocks/Header'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Hero from '../components/blocks/Hero'
import Redefines from '../pages/Redefines'
import Sections from '../pages/Sections'
import TopHotels from '../pages/TopHotels'
import Footer from '../components/blocks/Footer'

const WebLayout:React.FC = () => {
  return (
    <div>
        <Header />
        {/* <Hero /> */}
        <Outlet />
        <Footer />


    </div>
  )
}

export default WebLayout
