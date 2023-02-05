import React from "react";
import mission from './vision.svg';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export  const OurVision = () => {
    
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
  
    return (
        <>
         <div className="flex justify-around md:flex-row flex-col p-5 border rounded gap-[50px] shadow-xl  bg-slate-50 items-center mx-[20px] md:py-[60px] mt-[50px]">
        <div className="max-w-[500px]" data-aos='fade-up' >
            <h1 className="uppercase font-bold text-[30px] mb-[10px] underline">Our Misssion</h1>
            <p className="text-[20px] text-slate-500 my-[10px]">AirtimeFlip strives to become an enabler 
                of economic and individual growth. Creating
                 solutions to the problems the masses are faced 
                 with daily. To be part of the positive buzz in our
                  industry and country at large.</p>
                  <button className="bg-sky-500 px-2 text-[23px] rounded shadow-xl my-[20px] hover:text-white hover:bg-slate-700">Learn More About Us</button>
        </div>
        <div className="max-w-[400px] max-h-[400px]" data-aos='fade-up' >
            <img src={mission} alt="" srcset="" />
        </div>
    </div>
    </>
       
    )
}