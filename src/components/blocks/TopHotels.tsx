import React from 'react'
import pic1 from "../../assets/hotel26.jpeg"
import pic2 from "../../assets/hotel27.jpeg"
import pic3 from "../../assets/hotel28.jpeg"

const TopHotels:React.FC = () => {
  return (
    <div className='flex flex-col mb-10 mt-20 ml-16 sm:mt-10 sm:ml-7 text-gray-800'>
        <div className='flex flex-row justify-between '>
        <h1 className='mm:ml-10 font-bold ms:ml-5  text-3xl mb-5 sm:text-sm '>TOP HOTELS</h1>
        <button className='ms:mr-16 h-10 mr-20 w-48 sm:h-7 sm:w-36 sm:justify-center ms:h-10 ms:mb-5 rounded-3xl text-sm text-slate-50 font-semibold bg-[rgb(0,150,255)]'>Explore More</button>

        </div>
        <div>
        <p className='mm:ml-10 ms:ml-5 w-[420px] font-semibold text-lg sm:w-[200px] sm:text-xs '>exquisitely top hotels across the nation with touch of class at a relatively affordable cost whilst meeting your taste</p>
        </div>
        <div className='xl:gap-12 mm:ml-12 md:gap-5 ms:ml-8 flex flex-row justify-center mr-20 mt-5 gap-20 lg:gap-5 sm:mr-0 sm:gap-3 sm:flex-col'>

            <div className='xl:h-[320px] xl:w-[400px] md:h-[200px] bg-cover h-[280px]  rounded-md w-[350px] sm:h-[220px] sm:w-[260px]' style={{backgroundImage: `url(${pic3})` }}>
            </div>
            <div className='xl:h-[320px] xl:w-[400px] bg-cover md:h-[200px]  h-[280px]  rounded-md w-[350px] sm:h-[220px] sm:w-[260px]' style={{backgroundImage: `url(${pic1})` }}>
            </div>
            <div className='xl:h-[320px] xl:w-[400px] bg-cover md:h-[200px] h-[280px]  rounded-md w-[350px] sm:hidden' style={{backgroundImage: `url(${pic2})` }}>
            </div>
        </div>
        <div className='mm:ml-12 md:ml-0 ms:ml-8 flex flex-col ml-16 mt-20 sm:ml-0 sm:mt-5'>
        <h1 className='flex align-middle sm:justify-start justify-center font-bold text-3xl sm:text-xs sm:ml-0 mb-5'>TOP CLIENT REVIEWS</h1>
        <div className=' flex flex-row gap-5 md:justify-between sm:gap-2'>
        <div className='bg-cover  h-[130px] rounded-full w-[130px] sm:h-[100px] sm:w-[100px] sm:rounded-full' style={{backgroundImage: `url(${pic2})` }}></div>
        <p className='md:mr-16 font-medium w-[400px] sm:w-[150px] sm:text-xs'>“my first experience using HotelFinder was the best ever since i have been using  a hotel
reservation platform, however i would reccommend it to others. kudos to the HotelFinder 
team for the amazing work they have done.”</p>
        </div>
        </div>

    </div>
  )
}

export default TopHotels