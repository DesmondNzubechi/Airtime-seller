 import React from "react";
import { useState } from "react";
import { FAQs } from "./FAQs";

 export const FAQ = (props) => {
    const [isPlus, setIsPlus] = useState('+');
    const [isQuestion, setIsQuestion] = useState(false);

    const showAns = () => {
       // setIsPlus('-');
       // setIsQuestion(true);
       if (!isQuestion) {
        setIsQuestion(true);
        setIsPlus('-');
       } else {
        setIsQuestion(false);
        setIsPlus('+');
       }
    }
    return (
       
                <div className="border p-[10px] shadow-xl rounded-[10px] hover:bg-sky-50 cursor-pointer active:bg-sky-500" onClick={showAns}>
                   <h3 className="my-[10px] font-semibold text-[15px] md:text-[20px]">{props.Que} <span className="text-[30px] ">{isPlus}</span> </h3> 
                  { isQuestion && <p className="text-[15px] md:text-[17px] text-slate-600">{props.Ans}</p> }
                </div>
    )
 }