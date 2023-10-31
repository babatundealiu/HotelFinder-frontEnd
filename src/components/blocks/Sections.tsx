import React from 'react'
import pic1 from "../../assets/hotel19.jpeg"
import pic2 from "../../assets/hotel20.jpeg"

import pic3 from "../../assets/hotel25.jpeg"
import pic4 from "../../assets/hotel26.jpeg"
import pic5 from "../../assets/hotel27.jpeg"
import pic6 from "../../assets/hotel28.jpeg"
import pic7 from "../../assets/im.jpg"
import pic8 from "../../assets/im2.jpg"

import pic9 from "../../assets/im3.jpg"
import pic10 from "../../assets/im4.jpg"
import pic11 from "../../assets/im5.jpg"
import pic12 from "../../assets/im7.jpg"
import pic13 from "../../assets/im9.jpg"
import pic14 from "../../assets/jjh.jpg"



const Sections = () => {
  return (
    <div className='flex flex-col mm:ml-12 text-gray-800 mt-10'>
        <h1 className='mm:ml-5 ms:ml-12 font-bold text-3xl sm:text-sm sm:mt-10 sm:text-gray-800 sm:ml-8 ml-16 mb-5 md:text-gray-800 lg:text-gray-800 lg:mt-20 xl:text-gray-800 text-gray-800'>HOTELS IN SECTIONS</h1>
        <div className='ms:ml-5 flex flex-row justify-center gap-20 sm:gap-4 sm:flex-col md:gap-2 lg:gap-5 xl:gap-10'>

            <div className='bg-cover h-[280px]  rounded-md w-[350px] sm:w-[270px] sm:h-[200px] sm:ml-8 md:w-[210px] md:h-[200px] lg:w-[285px] lg:h-[250px] xl:w-[400px] xl:h-[300px]' style={{backgroundImage: `url(${pic3})` }}>
            <button className='p-3 rounded-3xl text-sm text-slate-800 font-bold bg-slate-50 mt-52 ml-5 sm:mt-28 sm:ml-10 md:mt-28 md:p-1 md:h-[45px] md:mr-4 lg:mt-40'>Hotels Around The Beach</button>
            </div>
            <div className='bg-cover   h-[280px]  rounded-md w-[350px] sm:w-[270px] sm:h-[200px] sm:ml-7 md:w-[210px] md:h-[200px] lg:w-[285px] lg:h-[250px] xl:w-[400px] xl:h-[300px]' style={{backgroundImage: `url(${pic1})` }}>
            <button className='p-3 rounded-3xl text-sm text-slate-800 font-bold bg-slate-50 mt-52 ml-5 sm:mt-28 sm:ml-10 md:mt-28 md:p-1 md:h-[45px] md:mr-4 lg:mt-40'>Hotels Around The Airport</button>

            </div>
            <div className='bg-cover  h-[280px]  rounded-md w-[350px] sm:w-[270px] sm:h-[200px] sm:ml-7 md:w-[210px] md:h-[200px] lg:w-[285px] lg:h-[250px] xl:w-[400px] xl:h-[300px]' style={{backgroundImage: `url(${pic2})` }}>
            <button className='p-3 rounded-3xl text-sm text-slate-800 font-bold bg-slate-50 mt-52 ml-5 sm:p-1 sm:w-[200px] sm:mt-28 sm:ml-10 md:mt-28 md:p-1 md:mr-4 md:h-[45px] lg:mt-40'>Hotels Around Business Districts</button>
            </div>

        </div>
        <div className='ms:ml-5 flex flex-row mt-10 gap-20 justify-center sm:flex-col sm:gap-4 sm:mt-4 md:flex-row md:gap-2 md:mt-2 lg:gap-5 lg:mt-5 xl:gap-10'>
            <div className='bg-cover   h-[280px]  rounded-md w-[500px] sm:w-[270px] sm:h-[200px] sm:ml-7 md:w-[210px] md:h-[200px] lg:w-[285px] lg:h-[250px] xl:w-[400px] xl:h-[300px]' style={{backgroundImage: `url(${pic1})` }}>
                <button className='p-3 rounded-3xl text-sm text-slate-800 font-bold bg-slate-50 mt-52 ml-5 sm:mt-28 sm:ml-10 md:mt-28 md:p-1 md:h-[45px] md:mr-4 lg:mt-40'>Hotels On The Mainland</button>
            </div>
            <div className='bg-cover  h-[280px]  rounded-md w-[500px] sm:w-[270px] sm:h-[200px] sm:ml-7 md:w-[210px] md:h-[200px] lg:w-[285px] lg:h-[250px] xl:w-[400px] xl:h-[300px]' style={{backgroundImage: `url(${pic2})` }}>
                <button className='p-3 rounded-3xl text-sm text-slate-800 font-bold bg-slate-50 mt-52 ml-5 sm:mt-28 sm:ml-10 md:mt-28 md:p-1 md:h-[45px] md:mr-4 lg:mt-40'>Hotels On The Island</button>
            </div>
        </div>

    </div>
  )
}

export default Sections