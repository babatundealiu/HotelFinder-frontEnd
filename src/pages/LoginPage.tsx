import React from 'react'
import hero from "../assets/islandHotel.jpeg"

const Login:React.FC = () => {
  return (
    <div className="  w-[100%]  h-[100vh] bg-cover sm:h-[100vh] bg-no-repeat" style={{backgroundImage: `url(${hero})`}}>
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <form >
        <h3 className=" text-2xl font-bold pl-32 pt-10 text-white pb-10 sm:pl-6">Welcome back to<br/> HotelFinder</h3>
        <input className=" h-[40px] w-[300px] rounded-md ml-6 p-3 sm:w-[250px]" placeholder="Email"/>
        <br/>
        <br/>
        <input className=" h-[40px] w-[300px] rounded-md ml-6 p-3 sm:w-[250px]" placeholder="Password"/>
        <br/>
        <br/>
        <button className=" h-[40px] w-[300px] rounded-md ml-6 bg-[#0096FF] text-white font-semibold sm:w-[250px] sm:ml-10" placeholder="Full-Name">Login</button>
        <div className=' text-white pt-2 flex justify-end'><u>Forgot Password</u></div>
        </form>
        </div>
    </div>
  )
}

export default Login