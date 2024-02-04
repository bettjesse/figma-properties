import { IconType } from "react-icons"
interface IconProps  {
    icon:IconType
    name : string
}
const Icon = ({ 
    icon : Icon
    
,name}: IconProps) => {
  return (
    <div className=" flex gap-3  ">
        <div className="">
        <Icon className="m-2 text-[#FFC107]" size= {30}/>
<p className="text-xs">{name}</p>
        </div>
       
    </div>
  )
}

export default Icon