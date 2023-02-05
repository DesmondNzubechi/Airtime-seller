import React from "react";
import { GrSecure } from 'react-icons/gr';
import { SiFastapi }  from 'react-icons/si';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { Why } from "./WhyChose";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export const Whychoose = () =>  {
    
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    return (
        <div className="mx-[30px] my-[40px]">
         <div className="text-center my-[50px]" data-aos='fade-up'>
            <h1 className="font-bold md:text-[40px] my-[10px] text-[25px] ">Why Choose Us</h1>
            <p className="md:text-[20px] text-slate-500 text-[17px]  ">
            There are many reasons to use AirtimeSeller 
            but here are 3 of them we really think you should hear.
            </p>
         </div>
         <div className="md:grid grid-cols-3 gap-[30px]">
              <Why 
              icon={ <GrSecure />}
              headLine='Secure and easy-to-use'
              text='Our platform is built on the best data security networks 
              with absolute care to make sure your experience is simple and seamless.'
              />
              <Why 
              icon={ <VscWorkspaceTrusted />}
              headLine='Best and cheapest rates'
              text='With airtimeflip you always get the best rates and prices on everything from airtime and data transactions and even your bill payments.'
              />
              <Why 
              icon={ <SiFastapi />}
              headLine='Swift service'
              text='We have built our platform and business to ensure transactions get completed in the shortest time possible.'
              />
         </div>
        </div>
    )
};