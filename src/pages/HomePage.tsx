import React from 'react'
import Redefines from '../pages/Redefines'
import Sections from '../pages/Sections'
import TopHotels from '../pages/TopHotels'
import Hero from '../components/blocks/Hero'
import Reviews from "../pages/Reviews"

const HomePage:React.FC = () => {
  return (
    <div>
        <Hero />
        <Redefines />
        <Sections />
        <TopHotels />
        <Reviews />
    </div>
  )
}

export default HomePage