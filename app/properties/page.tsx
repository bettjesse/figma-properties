import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PropertCard from "@/components/PropertCard"


const page = () => {
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
    <div className=" bg-[#111959] h-auto">
        <Navbar/>

       <div className=" flex justify-between mx-4 p-4">
       <h2 className="text-2xl  text-[#FFC107]">Properties </h2>
       <h2 className="text-[#FFC107]">Filter</h2>
       
       </div>
        
        <div className=" p-6 mx-4  grid grid-col-1 md:grid-cols-4 gap-4 ">
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
        <Footer/>
    </div>
  )
}

export default page