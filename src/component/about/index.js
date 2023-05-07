import React from "react";

export const About = () =>{
    return (
        <>
         <div className="max-w-w1144 m-auto  laptop:py-16 py-10">
              <div className="flex tablet:h-[260px] sm:h-28">
                 <div className="text  w-1/2 h-full bg-petroil-bg flex justify-center items-center tablet:px-0 sm:px-2">
                 <h5 className="tablet:text-3xl sm:text-base font-poppin font-bold text-white leading-snug tablet:w-1/2">Learn more about our company</h5>

                 </div>
                 <div className="image w-1/2 h-full bg-cover flex justify-center items-center" style={{ background:'url(./images/about/about.png)no-repeat center' }}>
                 <a href="#" className="tablet:py-3 hoverwhiteButton tablet:px-8 sm:py-2 sm:px-4 tablet:text-base sm:text-sm bg-white text-base font-poppin font-normal text-petroil-bg mt-8 inline-block"> Learn More </a>
                    
                 </div>
              </div>
         </div>
        </>
    )
}