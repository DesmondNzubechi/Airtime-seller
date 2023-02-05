import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "../Footer/Footer";



export const Login = () => {
    
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
  
    const [isPassword, setIsPassword] = useState('password');
    return(
        <>
        <div className="px-[20px] pt-[140px] pb-[50px] flex justify-center ">
   <div>
<div data-aos='fade-up' >
    <h1 className="uppercase font-bold md:text-[40px] text-[25px] text-slate-600">Sign In Here</h1>
    <p className="text-slate-500 md:text-[25px] text-[20px]">Enter Your Details Below</p>

  <form action="" className="">
    <br />
    <input type="email" name="Email Address" className="border rounded w-full p-3 my-[10px] placeholder:text-[20px] outline-sky-500 placeholder:italic" placeholder="Input Email Address" id="" />
   <br />
   
    <input type={isPassword} className="border rounded w-full p-3 my-[10px] placeholder:text-[20px] outline-sky-500 placeholder:italic" name="Password" placeholder="Input Password" id="" />
   <br />
   <input type="checkbox"  onClick={() => {isPassword? setIsPassword('text') : setIsPassword()}} name="Check" className="" id="ViewPassword" /> <label className="text-[15px] text-slate-500  " htmlFor="ViewPassword">Show Password</label>
   <br />
    <button className="bg-sky-500 my-[20px] px-[10px] py-[2px] w-[30%] rounded shadow-xl text-[25px] " type="submit">Login</button>
  </form>
  <div>
    <p className="my-[20px] text-[20px]">Dont have an account yet <Link to='/register' className="text-sky-500 font-semibold hover:text-sky-700 transition-all duration-100" >Register Here</Link> </p>
  </div>
</div>
   </div>
        </div>
        <Footer />
        </>
    )
}