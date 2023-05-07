import React from "react";
import { HiChevronRight } from "react-icons/hi"


export const Blogs = () =>{
    return (
        <>
           <div className="max-w-w1144 m-auto pb-32">
              <div className=" tablet:flex flex-wrap tablet:space-x-2">
                 <div className="serviceImage tablet:w-[32%]" style={{ background:"url(./images/blog/blog1.png) no-repeat center center",backgroundSize:"cover",backgroundPosition: "center"}}>
                    <div className="w-full bg-black/50 px-8 py-14">
                        <h5 className="tablet:text-2xl  sm:text-lg  font-poppin laptop:font-bold tablet:font-medium sm:font-medium text-white leading-normal">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h5>
                         <a href="#" className="tablet:py-3 tablet:px-8 sm:py-2 sm:px-4 bg-white/50 hoverwhiteButton tablet:text-base sm:text-sm font-poppin font-normal text-white mt-8 inline-block"> Learn More </a>
                    </div>
                 </div>
                 <div className="serviceImage tablet:w-[32%] " style={{ background:"url(./images/blog/blog2.png) no-repeat center center",backgroundSize:"cover",backgroundPosition: "center"}}>
                    <div className="w-full bg-black/50 px-8 py-14">
                        <h5 className="laptop:text-2xl tablet:text-2xl  sm:text-lg  font-poppin laptop:font-bold tablet:font-medium sm:font-medium text-white leading-normal">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h5>
                         <a href="#" className="tablet:py-3 tablet:px-8 sm:py-2 sm:px-4 bg-white/50 hoverwhiteButton tablet:text-base sm:text-sm font-poppin font-normal text-white mt-8 inline-block"> Learn More </a>
                    </div>
                 </div>
                 <div className="serviceImage tablet:w-[32%]" style={{ background:"url(./images/blog/blog3.png) no-repeat center center",backgroundSize:"cover",backgroundPosition: "center"}}>
                    <div className="w-full bg-black/50 px-8 py-14">
                        <h5 className="tablet:text-2xl  sm:text-lg  font-poppin laptop:font-bold tablet:font-medium sm:font-medium text-white leading-normal">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h5>
                         <a href="#" className="tablet:py-3 tablet:px-8 sm:py-2 sm:px-4 bg-white/50 hoverwhiteButton tablet:text-base sm:text-sm font-poppin font-normal text-white mt-8 inline-block"> Learn More </a>
                    </div>
                 </div>
                </div>
                 
                 <div className="text-right">
                 <a href="#" className=" text-base font-poppin font-bold inline-block pr-10 mt-2"> More From The Blog <HiChevronRight className="inline-block text-lg font-bold" /> </a>
                 </div>
              
            </div> 
        </>
    )
}
