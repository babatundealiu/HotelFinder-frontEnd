import React from 'react'

const OnboardingPage:React.FC = () => {
  return (
    <div className='h-[100vh] w-[100%]'>
        <h3 className=' h-[50px] flex justify-center items-center w-[100%] text-white bg-[#0096FF] font-bold'>ONBOARD YOUR HOTEL</h3>
        <div className=' p-[10px]'>
        <div className=' text-xs'>Upload image of your hotel</div>
        <img className=' h-[100px] w-[100%] mt-1 rounded-sm'/>
        <h3 className=' text-xs'>Upload images of  different rooms  package in the hotel</h3>
        <div className=' flex justify-between mt-1'>
            <img className=' h-[50px] w-[70px] rounded-sm md:w-[400px] lg:w-[400px]'/>
            <img  className=' h-[50px] w-[70px] rounded-sm'/>
            <img className=' h-[50px] w-[70px] rounded-sm'/>
            <img className=' h-[50px] w-[70px] rounded-sm'/>
        </div>
        <div className=' flex justify-between mt-1'>
            <div>
                <span className=' text-xs'>HotelName</span>
                <br/>
            <input className=' h-[30px] w-[145px] border rounded-md'/>
            </div>
            <div>
                <span className=' text-xs'>Email</span>
                <br/>
            <input className=' h-[30px] w-[145px] border rounded-md'/>
            </div>
        </div>
        <div className=' flex justify-between mt-1'>
        <div>
                <span className=' text-xs'>Address</span>
                <br/>
            <input className=' h-[30px] w-[145px] border rounded-md'/>
            </div> 
            <div>
                <span className=' text-xs'>Description</span>
                <br/>
            <input className=' h-[30px] w-[145px] border rounded-md'/>
            </div>
        </div>
        <h3 className='pt-2 font-semibold'>Cancellation Policy</h3>
        <div>
            <div>
                <span className=' text-xs'>Do you have any cancellation policy?</span>
                <textarea className=' h-[50px] w-[300px] border mt-1 rounded-md'/>
            </div>
            <div>
                <span className=' text-xs'>Cancellation window</span>
                <br/>
                <textarea className=' h-[50px] w-[300px] border mt-1 rounded-md'/>
            </div>
        </div>
        <h3 className='pt-2 font-semibold'>Refund Procedure</h3>
        <div>
        <div>
                <span className=' text-xs'>Do you have any refund procedure?</span>
                <textarea className=' h-[50px] w-[300px] border mt-1 rounded-md'/>
            </div>
            <div>
                <span className=' text-xs'>Duration of refund (min - max)</span>
                <textarea className=' h-[50px] w-[300px] border mt-1 rounded-md'/>
            </div>
        </div>
        <button className=' h-[30px] w-[150px] border rounded-md text-white font-semi-bold bg-[#0096FF] ml-20 mt-2'>Submit</button>
        </div>
        </div>
  )
}

export default OnboardingPage