import React from "react";

export const ImageSection = () =>{
       return (
          <>
             <div className="flex justify-between pb-10">
               <div className="img1 w-1/4"><img className="w-[96%]  block " src="./images/img/image1.png" /></div>
               <div className="img1 w-1/4"><img className="w-[96%] mx-1 block " src="./images/img/image2.png" /></div>
               <div className="img1 w-1/4"><img className="w-[96%] mx-1 block " src="./images/img/image3.png" /></div>
               <div className="img1 w-1/4"><img className="w-[96%]  block " src="./images/img/image4.png" /></div>
             </div>
          </>
       )
}

