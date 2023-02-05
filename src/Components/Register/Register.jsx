import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="py-[50px] pt-[100px] bg-slate-50 flex justify-center">
         <div className="bg-sky-500- mt-5 p-3 rounded-xl">
            <div className="my-[20px]">
                <h1 className="text-[30px] uppercase font-bold text-slate-600 ">Register Here</h1>
                <p className="md:text-[20px] text-[17px] ">Sign up here and subscribe to our newsletter</p>
            </div>
            <form action="">
            <br />
    <input type="text" name="First Name" className="border rounded-xl w-full p-3 my-[10px] placeholder:text-[20px] outline-sky-500 placeholder:italic" placeholder="Input First Name" id="" />
    <br />
    <input type="text" name="Last Name" className="border rounded-xl w-full p-3 my-[10px] placeholder:text-[20px] outline-sky-500 placeholder:italic" placeholder="Input Last Name" id="" />
    <br />
    <input type="email" name="Email Address" className="border rounded-xl w-full p-3 my-[10px] placeholder:text-[20px] outline-sky-500 placeholder:italic" placeholder="Input Email Address" id="" />
    <br />
    <input type="tel" name="Phone" className="border rounded-xl w-full p-3 my-[10px] placeholder:text-[20px] outline-sky-500 placeholder:italic" placeholder="Input Phone No" id="" />
   
    <input type='password' className="border rounded-xl w-full p-3 my-[10px] placeholder:text-[20px] outline-sky-500 placeholder:italic" name="Password" placeholder="Input Password" id="" />
   <br />
   <input type="checkbox"  name="Check" className="" id="ViewPassword" /> <label className="text-[15px] text-slate-500  " htmlFor="ViewPassword">I agree to the terms and conditions</label>
   <br />
    <button className="bg-sky-500 my-[20px] px-[10px] py-[2px] w-[30%] rounded shadow-xl text-[25px] " type="submit">Register</button>
  </form>
  <div>
    <p className="my-[20px] text-[20px]">Already Have An Account <Link to='/login' className="text-sky-500 font-semibold hover:text-sky-700 transition-all duration-100" >Login Here</Link> </p>
  </div>
         </div>
        </div>
    )
}