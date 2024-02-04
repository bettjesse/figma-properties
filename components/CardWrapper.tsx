import {Card,CardContent, CardFooter}from "@/components/ui/card"
import ContactButton from "./ContactButton"


interface CardWrapperProps {
    children :React.ReactNode
    
   
   }

const CardWrapper = ({children}:CardWrapperProps) => {
  return (
    <Card className=" md:w-[250px] w-[300px]  shadow-md  mx-4  bg-[#374070] ">
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>
          {/* <ContactButton
          href =  "/contact"
          label ="Contact"
          
          /> */}
        </CardFooter>

    </Card>
  )
}

export default CardWrapper