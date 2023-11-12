import React from 'react'
import pics from "../../assets/hotel28.jpeg"
import pic1 from "../../assets/hotel26.jpeg"
import {RiArrowDropDownLine} from 'react-icons/ri'

const Hero = () => {
  return (
    <div className=' min-h-[80vh] sm:h-[300px] w-[100%] bg-cover sm:bg-cover sm:w-[100%]  mt-20 sm:mt-0 lg:bg-cover lg:h-96 md:bg-cover md:min-h-fit md:h-[300px] xl:min-h-screen' style={{backgroundImage: `url(${pic1})` }}>
      <div className='h-[100%] w-[100%] bg bg-opacity-0 bg-slate-900 absolute  '></div>

      <div className='flex sm:mt-10 flex-col justify-center align-middle '>
      <h1 className=' flex mt-64 justify-center text-black text-4xl font-bold sm:text-xs sm:w-72 sm:mt-20 sm:ml-7 sm:justify-center md:text-2xl md:mt-28 lg:text-2xl lg:mt-28 xl:text-3xl xl:mt-24  '>Find Your Perfect Hotel Accommodation with the <br /> Best Reservation Experience And Lots more... </h1>
      <br />
      <div className='flex  justify-center'>
      <button className='flex justify-center items-center text-slate-50 p-3 w-52 rounded-3xl sm:w-20 sm:h-5 bg-[#0096FF] font-semibold text-sm'>Explore</button>

      </div>
      </div>
    
    <div className='flex lg:mt-20 flex-row justify-center mt-[200px] sm:mt-[128px] md:mt-[30px] xl:mt-[10px]'>
      <div className='flex justify-center gap-0 shadow-2xl sm:gap-1 lg:gap-0 md:gap-2 bg-white w-[89%] h-[130px] sm:h-[50px] sm:border sm:w-[314px] md:w-[95%] md:h-[110px] md: rounded-md border-2 border-blue-500 lg:w-[90%] sm:mt-2 xl:mt-28 mt-[70px]'>
        <div className='flex flex-col align-middle'>
          <h2 className='text-[#0096FF] mt-10 ml-16 sm:mt-2 sm:font-semibold  sm:text-xs md:mt-2 md:ml-7 lg:ml-14 sm:ml-1'>Check-In</h2>
            <input type="text" placeholder='' className='flex shadow-sm border-black h-[50px] w-[160px] md:w-[100px] md:h-[40px] md:mt-0 md:ml-4 sm:ml-1 border border-b-2 bg-gray-50 rounded-md ml-16 sm:h-5 sm:w-12 sm:mt-0 lg:w-[150px] lg:h-[40px] lg:ml-5 ' data-mdb-format='ddd, dd, mmm, yyyy' />
        </div>
        <div className='flex flex-col align-middle'>
          <h2 className='text-[#0096FF] mt-10 ml-16 sm:mt-2 sm:ml-0 sm:font-semibold sm:text-xs md:mt-2 md:ml-7'>CheckOut</h2>
        <input type="text" placeholder='' className='flex shadow-sm md:w-[100px] md:h-[40px] border-black h-[50px] w-[160px] md:mt-0 md:ml-4 border border-b-2 bg-gray-50 rounded-md ml-16 sm:h-5 sm:w-12 sm:mt-0 sm:mr-0 sm:ml-1 lg:w-[150px] lg:h-[40px] lg:ml-5' />
        </div>        
        <div className='flex flex-col'>
          <h2 className='text-[#0096FF] mt-10 ml-16 sm:mt-2 sm:ml-3 sm:font-semibold sm:text-xs md:mt-2 md:ml-7'>Guests</h2>
          <div className="flex justify-around shadow-sm border-black h-[50px] w-[160px] md:w-[100px] md:h-[40px]  md:mt-0 md:ml-2 border border-b-2 bg-gray-50 rounded-md ml-16 sm:h-5 sm:w-12 sm:mt-0 sm:ml-0 lg:w-[150px] lg:h-[40px] lg:ml-5" data-mdb-format='ddd, dd, mmm, yyyy'>
            <div className=" font-normal text-slate-800  text-medium sm:m-0 mt-2">0</div>

                <div className=" mt-[5px] sm:m-0 ">
                  {<RiArrowDropDownLine size='30' color='black'/>}
                </div>
          </div>
        {/* <input type="text" placeholder='' className='flex shadow-sm border-black h-[50px] w-[160px] md:mt-0 md:ml-4 border border-b-2  bg-gray-50 rounded-md ml-16 sm:h-5 sm:w-12 sm:mt-0 sm:ml-1 lg:w-[150px] lg:h-[40px] lg:ml-5' /> */}
        </div>
        <div className='flex flex-col'>
          <h2 className='text-[#0096FF] mt-10 ml-16 sm:mt-2 sm:ml-3 sm:font-semibold sm:text-xs md:mt-2 md:ml-7'>Nights</h2>
          <div className="flex justify-around shadow-sm border-black  h-[50px] w-[160px] md:w-[100px] md:h-[40px]  md:mt-0 md:ml-4 border border-b-2 bg-gray-50 rounded-md ml-16 sm:h-5 sm:w-12 sm:mt-0 sm:ml-1 sm:mr- lg:w-[150px] lg:h-[40px] lg:ml-5" data-mdb-format='ddd, dd, mmm, yyyy'>
            <div className=" font-normal text-slate-800 sm:m-0 text-medium mt-2">0</div>

                <div className=" mt-1 sm:m-0">
                  {<RiArrowDropDownLine size='30' color='black'/>}
                </div>
          </div>
        {/* <input type="text" placeholder='' className='flex shadow-sm border-black h-[50px] w-[160px] md:mt-0 md:ml-4 border border-b-2  bg-gray-50 rounded-md ml-16 sm:h-5 sm:w-12 sm:mt-0 sm:ml-1 lg:w-[150px] lg:h-[40px] lg:ml-5' /> */}
        </div>
        <div className="">
        <button className='flex items-center p-4 h-12 rounded-xl sm:ml-0 bg-[#0096FF] md mt-16 ml-24 text-xl font-semibold text-white sm:px-1 sm:h-2 sm:mt-3 sm:text-xs sm:mr-0 md:mt-7 md:ml-1 lg:ml-5 lg:mt-[57px] '>Check Availability</button>

        </div>



      </div>

    </div>

        
    </div>
  )
}

export default Hero