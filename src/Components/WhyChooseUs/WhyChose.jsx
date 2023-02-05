import React from "react";
import { Whychoose } from "./ChooseUs";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



export const Why = (props) => {
     
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    return (
        <div  data-aos='fade-up' className="text-center cursor-pointer hover:bg-sky-500 transition-all duration-1000 align-center border shadow-xl p-2 my-[20px] rounded items-center justify-center">
        <div className="text-center mx-[45%] my-[10px] text-[40px] ">{props.icon}</div> 
        <h1 className="font-semibold text-[20px]">{props.headLine}</h1>
        <p className="text-slate-600 md:text-[20px] mb-[10px]">{props.text} </p>
    </div>
    )
}