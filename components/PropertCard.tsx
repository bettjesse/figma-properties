import CardWrapper from "./CardWrapper"
import Image from "next/image"

interface  PropertCardProps {
    name: string
    invest: string
    area: string
    rental : string
    location: string
}

const PropertCard = ({ name,invest,area,rental,location}:PropertCardProps) => {
  return (
    <CardWrapper>
    <div className=" p-2">
      <div className="mb-2">
        <Image
          src="/images/hero.jpg"
          alt="Property Image"
          className="object-cover rounded w-full "
          layout="responsive"
          width={800}
          height={600}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="text-xs flex flex-col text-white">
        <div className=" flex  mb-4 ">
            <div>
            <p className="text-[#7ACBC8]">{invest}</p>
        <p>MIN INVESTMENT</p>
            </div>
            <div>
            <p className="text-[#7ACBC8]">{area}</p>
        <p>MIN AREA</p>
            </div>
      
        </div>
        <div className=" flex  gap-3">
        <div  className=" ">
        <p className="text-[#7ACBC8]">{rental}</p>
        <p>RENTAL YIELD</p>
        </div>
        <div>
        <p className="text-[#7ACBC8]">{location}</p>
        <p>LOCATION</p>
        </div>
        </div>
        
        
      </div>
    </div>
  </CardWrapper>
  )
}

export default PropertCard