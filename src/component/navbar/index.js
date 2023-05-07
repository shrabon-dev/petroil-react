import React from "react";
import { useState } from "react";


export const Navbar = () =>{

   let [menubar, setMenubar] = useState('hidden');


   const handleMenu = () =>{
         if(menubar == 'hidden'){
               setMenubar('block')
         }else{
            setMenubar('hidden')
         }
      
   }
    return (
        <>
         <nav className="bg-petroil-bg py-5 md:px-8 sm:px-2">
            <div className="max-w-w1144 m-auto flex justify-between items-center">
               <div className="logo w-1/3">
                   <img className="w-32" src="images/logo.png" alt="petroil-logo"/>
               </div>
               <div className="menubar w-2/3 tablet:flex sm:hidden justify-between items-center">
                     <ul className="tablet:flex laptop:space-x-14 tablet2:space-x-12 tablet:space-x-6 text-white font-poppin font-normal tablet2:text-base tablet:text-sm ">
                        <li><a className="relative after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full after:w-0 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:bg-white after:text-red-500 " href="#">Home</a></li>
                        <li><a className="relative after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full after:w-0 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:bg-white after:text-red-500 " href="#">About </a></li>
                        <li><a className="relative after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full after:w-0 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:bg-white after:text-red-500 " href="#">Services</a></li>
                        <li><a className="relative after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full after:w-0 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:bg-white after:text-red-500 " href="#">Gallery</a></li>
                        <li><a className="relative after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full after:w-0 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:bg-white after:text-red-500 " href="#">Blog</a></li>
                     </ul>
                     <div className="navButton text-white hoverCommon font-poppin font-normal tablet:text-base border-2 border-white tablet2:py-3 tablet2:px-8 tablet:py-2 tablet:px-4 tablet:ml-2 ">
                        <a href="#">Contact</a>
                     </div>
               </div>
               <div className="tablet:hidden sm:block relative ">
                  <img onClick={handleMenu} className="w-6" src="./images/menu.png" alt="menu icon"/>
                  {menubar == "block" ?  
                  <ul className='text-white font-poppin mfd:space-y-3 space-y-2 font-normal text-sm absolute w-40 bg-petroil-bg p-4 md:-right-6 sm:-right-3 top-11'>
                     <li className="border-b-[1px] pb-2 border-red-900"><a  href="#">Home</a></li>
                     <li className="border-b-[1px] pb-2 border-red-900"><a  href="#">About </a></li>
                     <li className="border-b-[1px] pb-2 border-red-900"><a  href="#">Services</a></li>
                     <li className="border-b-[1px] pb-2 border-red-900"><a  href="#">Gallery</a></li>
                     <li className="border-b-[1px] pb-2 border-red-900"><a  href="#">Blog</a></li>
                    </ul>
                    : ''}
                    
                  
               </div>
            </div>
         </nav>
        </>
    )
}