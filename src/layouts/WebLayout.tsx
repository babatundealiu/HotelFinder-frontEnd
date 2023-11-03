import React from 'react'
import Header from '../components/blocks/Header'
import { Outlet } from 'react-router-dom'
import Hero from '../components/blocks/Hero'
import Redefines from '../components/blocks/Redefines'
import Sections from '../components/blocks/Sections'
import TopHotels from '../components/blocks/TopHotels'
import Footer from '../components/blocks/Footer'

const WebLayout:React.FC = () => {
  return (
    <div>
        <Header />
        <Hero />
        {/* <Hero /> */}

        <Outlet />
        <Redefines />
        <Sections />
        <TopHotels />
        <Footer />


    </div>
  )
}

export default WebLayout
