import Link from "next/link";
import PropertCard from "./PropertCard";

const Properties = () => {

    const propertiesInfo = [
        {
            Name: "NAME",
            invest: "20 Lakhs",
            area: "100 sq.ft",
            rental: "9%-12%",
            location:" Sector 121,Noida"
        },
        {
            Name: "NAME",
            invest: "20 Lakhs",
            area: "100 sq.ft",
            rental: "9%-12%",
            location:" Sector 121,Noida"
        },
        {
            Name: "NAME",
            invest: "20 Lakhs",
            area: "100 sq.ft",
            rental: "9%-12%",
            location:" Sector 121,Noida"
        },
    ]
  return (
    <div className="relative md:h-screen h-auto  bg-cover bg-center" style={{backgroundImage: "url('/images/properties.png')"}}>
      <div className="flex flex-col items-center justify-center h-full text-white mx-4">
        <h2 className="text-4xl text-[#FFC107] font-bold my-4">Properties</h2>
       

        <div className="flex "> 
        <div className="py-8 mx-4 grid grid-col-1 md:grid-cols-3 gap-3">
            {
                propertiesInfo.map((property,index)=> (
                    <PropertCard
                    key={index}
                    name= {property.Name}
                    invest= {property.invest}
                    area= {property.area}
                    rental = {property.rental}
                    location= {property.location}
                    
                    />

                ))
            }
      
       
        </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Properties;
