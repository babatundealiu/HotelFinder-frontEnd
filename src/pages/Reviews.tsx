import React from 'react'
import pic2 from "../assets/im2.jpg"


const Reviews:React.FC = () => {
  return (
    <div className=''>
        
        <div className='mm:ml-12 md:ml-0 ms:ml-8 flex flex-col ml-16 mt-20 sm:ml-0 sm:mt-5'>
        <h1 className='flex align-middle sm:justify-start justify-center font-bold text-3xl sm:text-xs sm:ml-0 mb-5'>TOP CLIENT REVIEWS</h1>
        <div className=' flex flex-col gap-5 md:justify-between sm:gap-2'>
        <div className='bg-cover ml-[100px]  h-[130px] rounded-full w-[130px] sm:h-[100px] sm:w-[100px] sm:rounded-full' style={{backgroundImage: `url(${pic2})` }}></div>
            <p className='md:mr-16 mb-10 font-medium w-[400px] sm:w-[150px] sm:text-xs'>“my first experience using HotelFinder was the best ever since i have been using  a hotel
                reservation platform, however i would reccommend it to others. kudos to the HotelFinder 
                team for the amazing work they have done.”
            </p>
        </div>
        </div>

    </div>
  )
}

export default Reviews