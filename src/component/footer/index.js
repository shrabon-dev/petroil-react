import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { RiRoadMapLine } from "react-icons/ri"


export const Footer = () => {
    return (
        <>
            <footer className="bg-footerbg tablet:py-32 sm:py-20">
                  <div className="max-w-w1144 m-auto tablet:flex tablet:px-8 sm:px-2">
                      <div className="logo tablet:w-2/5 ">
                        <img className="tablet:w-auto sm:w-2/5" src="./images/LogoLight.png" alt="petroil"/>
                        
                        <ul className="text-white font-poppin font-normal tablet2:text-sm sm:text-xs space-y-4 mt-8 pl-4">
                            <li><AiOutlineMail className="inline-block text-sm mr-[6px]"/><span>mail@yourcompany.com</span></li>
                            <li><BiPhoneCall className="inline-block text-sm mr-[6px]"/><span>+896 120 5889 (Toll free)</span></li>
                            <li><RiRoadMapLine className="inline-block text-sm mr-[6px]"/><span>101 Baker Street, New York, USA, 12345</span></li>
                        </ul>
                        <div className="icon mt-6 pl-4 flex space-x-[18px]">
                          <a className="w-10 h-10 bg-petroil-bg text-white text-lg flex justify-center items-center rounded-full" href="#"><FiFacebook /></a>
                          <a className="w-10 h-10 bg-petroil-bg text-white text-lg flex justify-center items-center rounded-full" href="#"><AiOutlineTwitter /></a>
                          <a className="w-10 h-10 bg-petroil-bg text-white text-lg flex justify-center items-center rounded-full" href="#"><AiFillLinkedin /></a>
                          <a className="w-10 h-10 bg-petroil-bg text-white text-lg flex justify-center items-center rounded-full" href="#"><BsInstagram /></a>
                        </div>

                      </div>
                      <div className="menu w-1/5 mt-5 tablet:float-none sm:float-left">
                        <h6 className="text-white font-poppin font-bold tablet2:text-base sm:text-sm">Company</h6>
                        <ul className="space-y-4 mt-5 text-white font-poppin font-normal tablet2:text-base sm:text-sm">
                           <li><a href="#">Home</a></li>
                           <li><a href="#">About </a></li>
                           <li><a href="#">Services</a></li>
                           <li><a href="#">Gallery</a></li>
                        </ul>
                      </div>
                      <div className="menu w-1/5 mt-5 tablet:float-none sm:float-right tablet:pr-0 sm:pr-24">
                        <h6 className="text-white font-poppin font-bold tablet2:text-base sm:text-sm">Others</h6>
                        <ul className="space-y-4 mt-5 text-white font-poppin font-normal tablet2:text-base sm:text-xs">
                           <li><a href="#">Blog </a></li>
                           <li><a href="#">Contact</a></li>
                           <li><a href="#">Terms & Conditions</a></li>
                           <li><a href="#">Privacy Policy</a></li>
                        </ul>
                      </div>
                      <div className="certifiacte w-1/4 tablet:mt-5 sm:mt-56">
                        <h6 className="text-white font-poppin font-bold tablet2:text-base sm:text-sm">Certificate</h6>
                        <div className="laptop:flex tablet:block sm:flex laptop:space-y-0 tablet:space-y-2 space-x-1 mt-5">
                            <img src="./images/certificate/cert1.png" />
                            <img src="./images/certificate/cert2.png" />
                        </div>
                      </div>

                  </div>
            </footer>
        </>
    )
}