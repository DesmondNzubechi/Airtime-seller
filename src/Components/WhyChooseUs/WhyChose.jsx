import React from "react";
import { Whychoose } from "./ChooseUs";

export const Why = (props) => {
    return (
        <div className="text-center cursor-pointer hover:bg-sky-500 transition-all duration-1000 align-center border shadow-xl p-2 my-[20px] rounded items-center justify-center">
        <div className="text-center mx-[50%] my-[10px] text-[40px] ">{props.icon}</div> 
        <h1 className="font-semibold text-[20px]">{props.headLine}</h1>
        <p className="text-slate-600 md:text-[20px] mb-[10px]">{props.text} </p>
    </div>
    )
}