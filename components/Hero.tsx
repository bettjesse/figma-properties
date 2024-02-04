import { FaArrowCircleUp, FaMoneyBillAlt } from 'react-icons/fa';
import { GiGrowth } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import Navbar from './Navbar';

const Hero = () => {


    const iconMap =[
        {
            name: "Growth",
            Icon : GiGrowth 
        },
        {
            name: "Investment",
            Icon : FaHandHoldingUsd
        },
        {
            name: "Property",
            Icon : GiSpookyHouse
        },
        {
            name: "Assistance",
            Icon : FaHandshake 
        }
    ]

    
  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/background.png')"}}>
     <Navbar/>
      {/* Content */}
      <div className="w-full flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
        <div className="flex flex-col md:flex-row gap-7 md:py-6 text-center md:ml-5 md:w-[95%] mx-auto">
          {/* Left Div */}
          <div className="flex flex-col md:gap-8 md:py-8  md:mt-2 md:w-[50%]">
          <div className="md:w-2/3 md:ml-8 mx-4 md:mx-0">
            <div className="shadow-md bg-[#969696] p-4 rounded-lg ">
              {/* Content for left div */}
              <p className="text-2xl m-2">DISCOVER</p>
              <p className="m-2">Investment Opportunities</p>
              <button className="md:px-12 px-10 md:py-1 m-2 bg-[#FFC107] rounded-lg">CLICK HERE</button>
            </div>
            <div className="shadow-md bg-[#969696] p-6 rounded-lg mt-8 flex gap-4">
              {/* Content for left div */}
              {
                iconMap.map((icon)=> (
                    <Icon
                    key= {icon.name}
                    name= {icon.name}
                    icon= {icon.Icon}
                    
                    />
                      

                ))
          }
            
            </div>
          </div>
          </div>

          {/* Right Div with Image */}
          <div className="overflow-hidden rounded-lg p-8 md:w-[50%]">
            <div className="w-full rounded-md overflow-hidden">
              {/* Image goes here */}
              <Image 
                src="/images/hero.jpg" 
                alt="Image"
                className=""
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
