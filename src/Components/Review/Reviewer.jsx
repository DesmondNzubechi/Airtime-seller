import React from "react";
import Review from "./Review";
import { OurVision } from "../About/Vision";
import { Whychoose } from "../WhyChooseUs/ChooseUs";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "../Footer/Footer";


export const Reviewers = () => {
    
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
  
    return (
        <React.Fragment>
        <div className="p-[20px] my-[20px] pt-[100px] bg-slate-50 rounded-[20px] ">
       <div className="text-center mb-[40px]" data-aos='fade-up' >
        <h1 className="font-bold uppercase text-[30px]">Reviews</h1>
        <p className="text-slate-500 font-semibold">What Our Customers Says About Us</p>
       </div>
       <Review />
        </div>
    <OurVision />
    <Whychoose />
    <Footer />
        </React.Fragment>
    )
}