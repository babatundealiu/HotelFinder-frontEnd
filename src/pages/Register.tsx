import React from "react";
import hero from "../assets/islandHotel.jpeg";

const Register: React.FC = () => {
  return (
    <div
      className=" w-[100%] flex justify-center items-center h-[100vh] bg-cover mt-5 relative sm:mt-0"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <form>
          <h3 className=" text-2xl font-bold pl-32 sm:pl-1 pt-10 text-white sm:flex justify-center">
            Welcome to HotelFinder
          </h3>
          <h3 className=" text-lg font-bold pl-40 text-white sm:flex sm:justify-center sm:pl-5">
            Register to Get Started
          </h3>
          <br />
          <input
            className=" h-[40px] w-[300px] rounded-md ml-32 p-3 sm: mr-32"
            placeholder="Full-Name"
          />
          <br />
          <br />
          <input
            className=" h-[40px] w-[300px] rounded-md ml-32 p-3"
            placeholder="Email"
          />
          <br />
          <br />
          <input
            className=" h-[40px] w-[300px] rounded-md ml-32 p-3"
            placeholder="Password"
          />
          <br />
          <br />
          <input
            className=" h-[40px] w-[300px] rounded-md ml-32 p-3"
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <button
            className=" h-[40px] w-[300px] rounded-md ml-32 bg-[#0096FF] text-white font-semibold"
            placeholder="Full-Name"
          >
            Register
          </button>
          <p className=" text-white pt-5 pl-40">
            Already have an account?<u>Login</u>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
