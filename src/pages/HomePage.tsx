import React from 'react'
import Redefines from '../components/blocks/Redefines'
import Sections from '../components/blocks/Sections'
import TopHotels from '../components/blocks/TopHotels'

const HomePage:React.FC = () => {
  return (
    <div>
        <Redefines />
        <Sections />
        <TopHotels />
    </div>
  )
}

export default HomePage