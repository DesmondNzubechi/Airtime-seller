import React from "react";
import logo  from './abtU.svg';
import { Whychoose } from "../WhyChooseUs/ChooseUs";
import { OurVision } from "./Vision";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "../Footer/Footer";

const About = () => {
      
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return (
        <>
        <div className="py-[50px]  bg-slate-50 mt-[50px] shadow  overflox-x-hidden">
            <div className="">
                <div className="" data-aos='fade-up' >
                <h1 className=" uppercase font-bold text-[50px] m-[20px] text-center">About Us</h1>
                </div>
                <div className="flex flex-col gap-[40px] m-[20px]  md:flex-row justify-around items-center">
                <div className="max-w-[500px] max-h-[300px]" data-aos='fade-up' >
                        <img src={logo} className="max-w-[500px] max-h-[300px]"  alt="" srcset="" />
                    </div>
                    <div>
                        <div className="max-w-[500px]" data-aos='fade-up' >
                        <p className="text-[20px] font-semibold">Here There,</p>
          <h2 className="font-bold text-[25px] md:text-[40px] mt-2 mb-2">We are AirtimeSeller</h2>
         
          <p className="text-[20px] text-slate-600 mt-2 mb-2">
          AirtimeFlip makes it possible for you to convert
           airtime to cash, Purchase data at cheap price, 
           Topup your airtime and paybills.
          </p>
          <button className="bg-sky-500 pt-1 pb-1 hover:bg-white hover:text-sky-500 pl-2 pr-2 text-[20px] rounded uppercase font-semibold shadow-xl my-[20px]">Contact Us</button>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
<Whychoose />
<OurVision />
        </div>
        <Footer />
        </>
    )
};


export default About;