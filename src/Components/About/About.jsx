import React from "react";
import logo  from './abtU.svg';
import mission from './vision.svg';

const About = () => {
    return (
        <div className="py-[50px]  bg-slate-50 mt-[50px] shadow-xl rounded-[50px] overflox-x-hidden">
            <div className="">
                <div className="">
                <h1 className=" uppercase font-bold text-[50px] m-[20px] text-center">About Us</h1>
                </div>
                <div className="flex flex-col gap-[40px] m-[20px]  md:flex-row justify-around items-center">
                <div className="max-w-[500px] max-h-[300px]">
                        <img src={logo} className="max-w-[500px] max-h-[300px]"  alt="" srcset="" />
                    </div>
                    <div>
                        <div className="max-w-[500px]">
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
            
            <div className="flex justify-around md:flex-row flex-col gap-[50px] items-center mx-[20px] md:py-[60px] mt-[100px]">
                <div className="max-w-[500px]">
                    <h1 className="uppercase font-bold text-[30px] mb-[10px] underline">Our Misssion</h1>
                    <p className="text-[20px] text-slate-500 my-[10px]">AirtimeFlip strives to become an enabler 
                        of economic and individual growth. Creating
                         solutions to the problems the masses are faced 
                         with daily. To be part of the positive buzz in our
                          industry and country at large.</p>
                          <button className="bg-sky-500 px-2 text-[23px] rounded shadow-xl my-[20px] hover:text-white hover:bg-slate-700">Learn More About Us</button>
                </div>
                <div className="max-w-[400px] max-h-[400px]">
                    <img src={mission} alt="" srcset="" />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
};


export default About;