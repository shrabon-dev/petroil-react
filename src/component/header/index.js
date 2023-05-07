import React from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';



export const Header = () =>{
      return (
        <>
        <header className='bg-[#282828] text-white py-4 tablet:px-8 sm:px-2'>

              <div className='max-w-w1144  m-auto '>
                 <div className="flex justify-between items-center">
                    <div className="email font-poppin font-normal md:text-xs sm:text-[8px] md:flex items-center">
                    <span className="flex items-center pr-4 md:border-r-[1px] border-[#5C6A92]">
                        <AiOutlineMail className="mr-2"/>
                        mail@yourcompany.com
                    </span>
                    <span className="flex items-center  text-white md:pl-4">
                        <BiPhoneCall className="mr-2"/>
                        +896 120 5889 (Toll free)
                    </span>
                    </div>
                    <div className="icon flex space-x-[18px]">
                          <a href="#"><FiFacebook /></a>
                          <a href="#"><AiOutlineTwitter /></a>
                          <a href="#"><AiFillLinkedin /></a>
                          <a href="#"><BsInstagram /></a>
                    </div>
                 </div>               
              </div>
       
        </header>
        </>
      )
}