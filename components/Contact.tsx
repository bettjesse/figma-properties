"use client"
import CardWrapper from "./CardWrapper"
import { useForm } from "react-hook-form"
import { Input } from "./ui/input"
import {
    Form,FormDescription, FormControl, FormLabel, FormField, FormItem, FormMessage
  } from "@/components/ui/form"
import { Button } from "./ui/button"
const Contact = () => {

    const form = useForm({
      
        defaultValues: {
          Name: "",
          Contact: "",
          Comment:""
        }
      })
  return (
    <div className="relative md:h-screen h-auto  bg-cover bg-center" style={{backgroundImage: "url('/images/contact.png')"}}>
        <div className="  flex justify-center items-center p-12">

       
    <CardWrapper
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => { })}
          className="space-y-6"

        >
            <div className="text-center  w-full">
                <div className="w-[95%]  gap-2 mx-auto flex items-center justify-center ">
                <h2 className=" text-center  my-2 uppercase text-[#FFC107]">Connect</h2> 
            <span className=" uppercase text-white "> with us</span>

                </div>
                <p className="text-[#FFC107] uppercase text-xs">Please fill this form</p>
           
            </div>
            
          <div className=" space-y-4">
            <FormField
            control={form.control}
            name ="Name"
            render= {({field})=> (
              <FormItem>
            
                <FormControl>
                  <Input
                  {...field}
                  placeholder="Name"
                  
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name ="Contact"
            render= {({field})=> (
              <FormItem>
                
                <FormControl>
                  <Input
                  {...field}
                  placeholder="phone number"
                  
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name ="Comment"
            render= {({field})=> (
              <FormItem>
              
                <FormControl>
                  <Input
                  {...field}
                  placeholder="Any Comments"
                 
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />

          </div>
<Button>
    Submit
</Button>
        </form>

      </Form>
    </CardWrapper>

    </div>
    </div>
  )
}

export default Contact