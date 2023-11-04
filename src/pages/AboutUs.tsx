import React from "react";
import AboutImg from "../assets/about image.jpeg"
import sideAbout from "../assets/about1.jpeg"
import dwnAbout from "../assets/about2.jpeg"
import dwn1About from "../assets/amenities1.webp"
import dwn2About from "../assets/amenities2.jpeg"
import dwn3About from "../assets/amenties4.webp"


const AboutPage:React.FC = () => {
  return (
    <div className=" ">
        <img className=" bg-contain md:w-[100%]" src={AboutImg}/>
        <div className="">
            <div className="md:flex flex-row md:mt-5 md:ml-10 md:gap-4">
            <div className="">
            <h3 className=" text-3xl flex justify-center items-center pt-3 font-semibold mm:pr-8 md:text-5xl">About Us</h3>
            <p className=" pt-3 ml-5 w-[300px] mm:ml-10 md:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              illo saepe aperiam iure, consequuntur libero beatae laborum?
              Distinctio, sunt cum! Beatae nostrum eos, quo dolor illum omnis
              laudantium accusamus quasi.
            </p>

            </div>
            <img className=" sm:hidden lg:h-[200px] w-[350px] mt-4 md:h-[300px] md:object-cover" src={sideAbout}/>

            </div>
          <div className=" mt-5 flex justify-center">
            <img  className="sm:hidden md:w-[180px] md:h-[250px]" src={dwnAbout}/>
            <img className=" sm:hidden md:w-[180px] md:h-[250px]" src={dwn1About}/>
            <img className="  h-[250px] mm:h-[280px] md:w-[180px]" src={dwn2About}/>
            <img className=" h-[250px] mm:h-[280px] md:w-[180px]" src={dwn3About}/>
          </div>
            
        </div>
    </div>
  );
};

export default AboutPage;
