import React from "react";
import Review from "./Review";
import { OurVision } from "../About/Vision";
import { Whychoose } from "../WhyChooseUs/ChooseUs";

export const Reviewers = () => {
    return (
        <React.Fragment>
        <div className="p-[20px] my-[20px] pt-[100px] bg-slate-50 rounded-[20px] ">
       <div className="text-center mb-[40px]">
        <h1 className="font-bold uppercase text-[30px]">Reviews</h1>
        <p className="text-slate-500 font-semibold">What Our Customers Says About Us</p>
       </div>
       <Review />
        </div>
    <OurVision />
    <Whychoose />
        </React.Fragment>
    )
}