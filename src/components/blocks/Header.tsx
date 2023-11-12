import React from 'react'
import { Link } from 'react-router-dom'
// import Register from '../../pages/Register'
// import { BiMenuAltRight } from "react-icons/bi";

const Header:React.FC = () => {
  return (
    
     <div className='z-10 bg-[rgb(0,150,255)] top-0 fixed min-h-[80px] min-w-[100%] flex justify-between sm:min-h-[40px] sm:fixed sm:m- sm:flex flex-row md:h-[60px] '>
        <h1 className='text-slate-100 text-3xl ml-16 font-bold mt-5 text-opacity-95 sm:text-xs sm:mr-72 md:text-lg md:mr-[600px]'>HotelFinder</h1>

        <div className='flex flex-row text-xl lg:text-[15px] mt-7 ml-28 mr-28  text-slate-100 sm:font-bold sm:ml-0 sm:mr-0 g sm:text-xs sm:m-1 sm:mt-3 sm:hidden md:hidden '>
          <Link to="/homepage">
          <span className=' '>Home</span>
          </Link>
          <span className='ml-3 sm:ml-2'>About Us</span>
          <Link to= "/explore">
          <span className='ml-3 sm:ml-2 hover:to-black'>Explore</span>
          </Link>
          <Link to="/contact">
          <span className='ml-3 sm:ml-2'>Contact Us</span>

          </Link>
        </div>
        <div className='flex flex-row gap-5 mr-20 sm:gap-0 sm:flex-col sm:mr-0 sm:hidden md:hidden '>
          <Link to="/register">
          <button className=' flex justify-center items-center p-4 mt-7 bg-slate-50 h-9 rounded-xl sm:p-1 sm:font-normal sm:text-xs sm:h-3'>Register</button>

          </Link>
        <button className=' flex justify-center items-center p-4 mt-7 bg-slate-50 h-9 rounded-xl sm:p-1 sm:font-normal sm:text-xs sm:h-3 '>Login</button>

        </div>

    </div>

        
  
  )
}

export default Header
