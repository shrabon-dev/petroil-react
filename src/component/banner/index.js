import React from "react";

export const Banner = () =>{
  
    return (
         <>
            <div className="bannerSection">
                <div className="bannerOverLay w-full h-full block" style={{ background:"url(images/banner/banner.png)no-repeat center center",backgroundSize:"cover",backgroundPosition: "center"}}>
                    <div className="max-w-w1144 m-auto laptop:pb-[115px] laptop:pt-[116px]  md:pb-[112px] md:pt-[113px] sm:py-12 md:px-8 sm:px-2">
                    <h5 className="laptop:text-[62px] md:text-5xl sm:text-2xl font-poppin font-bold text-white md:leading-normal w-3/4">We exist since 1975 on the oil and gas industry.</h5>
                     <a href="#" className=" md:py-4 md:px-8 sm:py-2 sm:px-4 hoverCommon bg-petroil-bg md:text-base sm:text-xs font-poppin font-normal text-white mt-11 inline-block"> Learn More </a>
                    
                    </div>
                </div>
            </div>
         </>
        )
}