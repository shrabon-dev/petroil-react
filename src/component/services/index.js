import React from "react";


export const Services = () =>{
    return (
        <>
           <div className="flex flex-wrap laptop:mt-10 tablet:px-0 sm:px-2">
                 <div className="serviceText tablet:w-1/2 sm:w-full tablet:pr-12 tablet:pb-0 sm:pb-5">
                 <h5 className="laptop:text-[64px] tablet:text-4xl sm:text-lg font-poppin font-bold text-black desktop:w-3/4 laptop:w-[90%] tablet:w-2/3 ml-auto">Our Services</h5>
                 <p className="font-poppin tablet:text-sm sm:text-xs text-[#6C6C6C] font-medium desktop:w-3/4 laptop:w-[90%] tablet:w-2/3 ml-auto laptop:mt-5 tablet:mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                 
                 </div>
                 <div className="serviceImage tablet:w-1/2 sm:w-full " style={{ background:"url(./images/services/service1.png)no-repeat center",backgroundSize:"cover" }}>
                    <div className="w-full bg-black/75 px-12 py-14">
                        <h5 className="tablet:text-3xl sm:text-lg font-poppin tablet:font-bold sm:font-medium text-white">Modern natural oil and gas refineries.</h5>
                         <a href="#" className="tablet:py-3 tablet:px-8 sm:py-2 sm:px-4 hoverCommon bg-petroil-bg tablet:text-base sm:text-sm font-poppin font-normal text-white mt-8 inline-block"> Learn More </a>
                    </div>
                 </div>
                 <div className="serviceImage tablet:w-1/2 sm:w-full " style={{ background:"url(./images/services/service2.png)no-repeat center",backgroundSize:"cover" }}>
                    <div className="w-full bg-black/75 px-12 py-14">
                        <h5 className="tablet:text-3xl sm:text-lg font-poppin tablet:font-bold sm:font-medium text-white">Modern natural oil and gas refineries.</h5>
                         <a href="#" className="tablet:py-3 tablet:px-8 sm:py-2 sm:px-4 hoverCommon bg-petroil-bg tablet:text-base sm:text-sm font-poppin font-normal text-white mt-8 inline-block"> Learn More </a>
                    </div>
                 </div>
                 <div className="serviceImage tablet:w-1/2 sm:w-full " style={{ background:"url(./images/services/service3.png)no-repeat center",backgroundSize:"cover" }}>
                    <div className="w-full bg-black/75 px-12 py-14">
                        <h5 className="tablet:text-3xl sm:text-lg font-poppin tablet:font-bold sm:font-medium text-white">Modern natural oil and gas refineries.</h5>
                         <a href="#" className="tablet:py-3 tablet:px-8 sm:py-2 sm:px-4 hoverCommon bg-petroil-bg tablet:text-base sm:text-sm font-poppin font-normal text-white mt-8 inline-block"> Learn More </a>
                    </div>
                 </div>
            </div> 
        </>
    )
}
