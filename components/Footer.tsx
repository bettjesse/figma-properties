
// import { MdMail } from 'react-icons/md';
// import { FaPhone, FaWhatsapp } from 'react-icons/fa';
// const Footer = () => {
//   return (
//     <div className=" bg-[#2C1051]  p-12">
//         <div className=' flex justify-between'>

        
// <div>
//     <p className=' text-[#FFC107] text-3xl'>LOGO</p>
// </div>
// <div>
//     <div className=' space-y-5'>
//         <div className=' flex text-sm space-x-3 items-center text-gray-200 uppercase'>
//         <MdMail size= {20} className=' text-white  '/>
//         <p>Mail</p>

//         </div>
//        <div className=' flex space-x-3 items-center text-gray-200'>
//        <FaPhone size= {20} className=' text-white  '/>
//        <p>Contact</p>
//        </div>
       
//     </div>
// </div>
// <div className='text-gray-200 flex'>
//     <div className=' flex-flex-col space-y-3 text-sm uppercase'>
//     <p>Home</p>
//        <p>About us</p>
//        <p>Properties</p>
//        <p>Contact</p>
//     </div>
      
//     </div>
//     <div>
//         <div className='uppercase text-sm'>
//             <p className=' text-gray-200 '> Directly contact us on</p>
//             <div className=' bg-[#4A386D] rounded-md p-4'>
// <div className=' flex items-center gap-2 '>
// <FaWhatsapp size={20} className=' text-green-500' />
// <p className=' text-[#89E4D6]'>Whatsapp</p>
// </div>
 
//             </div>
//         </div>
//     </div>
//     </div>
//      {/* Horizontal Line */}
//      <hr className="my-6 border-t border-gray-600" />

// {/* Copyright Notice */}
// <div className=' flex items-center justify-center uppercase'>
// <p className="text-gray-200 text-sm text-center">&copy; 2024 All rights reserved | powered by</p>
// <span className='uppercase text-[#FFC107] mx-2'>property vista</span>
// </div>

//     </div>
//   )
// }

// export default Footer

import { MdMail } from 'react-icons/md';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#2C1051] p-6 md:p-12">
      <div className='flex flex-col md:flex-row justify-between'>

        <div>
          <p className='text-[#FFC107] text-3xl'>LOGO</p>
        </div>

        <div className='mt-4 md:mt-0'>
          <div className='space-y-5'>
            <div className='flex text-sm space-x-3 items-center text-gray-200 uppercase'>
              <MdMail size={20} className='text-white' />
              <p>Mail</p>
            </div>
            <div className='flex space-x-3 items-center text-gray-200'>
              <FaPhone size={20} className='text-white' />
              <p>Contact</p>
            </div>
          </div>
        </div>

        <div className='mt-4 md:mt-0 text-gray-200'>
          <div className='flex flex-col space-y-3 text-sm uppercase'>
            <p>Home</p>
            <p>About us</p>
            <p>Properties</p>
            <p>Contact</p>
          </div>
        </div>

        <div className='mt-4 md:mt-0'>
          <div className='uppercase text-sm'>
            <p className='text-gray-200 '> Directly contact us on</p>
            <div className='bg-[#4A386D] rounded-md p-4'>
              <div className='flex items-center gap-2'>
                <FaWhatsapp size={20} className='text-green-500' />
                <p className='text-[#89E4D6]'>Whatsapp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-6 border-t border-gray-600" />

      {/* Copyright Notice */}
      <div className='flex flex-col md:flex-row items-center justify-center uppercase'>
        <p className="text-gray-200 text-sm text-center ">&copy; 2024 All rights reserved Powered by  | </p>
        

        <span className='uppercase text-[#FFC107] mx-2'>property vista</span>
      </div>
    </div>
  )
}

export default Footer;

