import React from "react";
import { Whychoose } from "../WhyChooseUs/ChooseUs";
import { Footer } from "../Footer/Footer";
import contactImg from './img/contactImg.svg';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    return(
       <>
       <div className=" rounded-[40px] pt-[130px] pb-[40px] px-[20px] justify-center bg ">
        <div data-aos='fade-up'>
        <div className="mb-[20px]">
            <h1 className="text-[40px] text-center font-semibold text-slate-800">Contact Us</h1>
            <p className="text-[20px] text-center text-slate-700">If you have any question</p>
        </div>
        <div className="flex flex-row justify-around items-center">
            <div>
                <p className="text-[20px] ">Send Us A Message</p>
                <p className="text-[20px] mb-[10px] ">We will get back to you as soon as Possible</p>
                <form action="">
                    <input className="w-[100%] outline-0 my-3 border text-[20px] rounded p-2 " type="text" placeholder="Full Name" />
                    <br />
                    <input className="w-[100%] outline-0 my-3 border text-[20px] rounded p-2 " type="email" name="email" placeholder="Email Address" id="" />
                <br />
                <textarea className="w-[100%] outline-0 my-3 border text-[20px] rounded p-2 " name="Message" placeholder="Type In Your Message" id="" cols="20" rows="5"></textarea>
                <br />
                <button className="bg-sky-500 px-1 text-[20px] text-center w-[40%] rounded shadow-xl" type="submit">Send</button>
                </form>
            </div>
  <div className="max-w-[400px] md:block hidden">
    <img src={contactImg} alt="" srcset="" />
  </div>
        </div>
        </div>
       </div>
       <Whychoose />
       <Footer />
       </>
    )
}