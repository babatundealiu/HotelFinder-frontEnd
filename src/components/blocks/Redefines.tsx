import React from 'react'
import pic from "../../assets/hotel25.jpeg"
import pic2 from "../../assets/hotel19.jpeg"

const Redefines = () => {
  return (
    <div className="sm:flex flex-col xl:mt-0 mt-10 sm:mt-6">
    <div className=' flex flex-row md:flex-col lg: sm:flex-col-reverse justify-between min-h-[80vh] sm:min-h-[90vh] sm:min-w-[100%] xl:min-h-[90vh] bg-slate-100 pt-28 sm:pt-6'>
    <div className= 'flex flex-col mm:ml-28 ms:ml-20 sm:mt-5 bg-white lg:w-[400px] lg:ml-14 lg:mt-10 sm:text-xs-2 h-[300px] w-[500px] sm:h-[100px] sm:w-[200px] rounded-3xl ml-16 '>
            <div className=' ml-3 mt-5 text-lg sm:text-sm   text-slate-950 font-semibold sm:flex sm:mb-5'>
                REDEFINES THE LUXURY <br />
                HOSPITALITY <br />
                EXPERIENCE
            </div>
            <div className="">
            <div className='text-black ml-3 mt-5 text-lg font-medium sm:hidden '>
                <p>Enjoy The Curating Seamless And Inspiring <br /> Experience for lodgers And Travellers <br />
                And Those Willing to Have A Stay Away From <br /> Home</p>
            </div>
            <button className=' sm:w-36 p-2 w-52 rounded-3xl text-sm mt-5 text- font-semibold bg-[rgb(0,150,255)] sm:ml-7'>Explore More</button>

            </div>

        </div>
        <div className='flex flex-col xl:flex-row xl:gap-5 mr-20 sm:justify-center xl:mb-0 sm:flex sm:gap-2 md:mt-0 md:flex md:justify-center md:ml-36 lg:gap-2 lg:flex-row ' >
            <div className='mm:ml-16  ms:ml-12 sm:ml-4 sm:pt-0 sm:pr-0 bg-cover h-[250px] sm:mt-0 mt-24 xl:mt-0 rounded-md w-[280px] sm:h-[200px] sm:w-[280px] xl:w-[300px] xl:h-[300px] lg:relative lg:mt-10  ' style={{backgroundImage: `url(${pic2})` }}></div>
            <div className='bg-cover ml-52 xl:ml-0 h-[250px] rounded-md w-[280px] sm:h-[200px] sm:w-[200px] sm:hidden sm:ml-0 sm:mb-10 lg:mr-10 xl:w-[300px] xl:h-[300px] lg:ml-0 ' style={{backgroundImage: `url(${pic})` }}></div>

        </div>
        {/* <img styles={{ backgroundImage: `url (${pic})`}} /> */}
        
    </div>
    </div>

  )
}

export default Redefines