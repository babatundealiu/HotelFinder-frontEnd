import React from 'react'
import Redefines from '../components/blocks/Redefines'
import Sections from '../components/blocks/Sections'
import TopHotels from '../components/blocks/TopHotels'
import Hero from '../components/blocks/Hero'

const HomePage:React.FC = () => {
  return (
    <div>
        <Hero />
        <Redefines />
        <Sections />
        <TopHotels />
    </div>
  )
}

export default HomePage