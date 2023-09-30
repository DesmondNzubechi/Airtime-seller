import React from "react";
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiFillLinkedin, AiFillInstagram, AiOutlineGithub, AiTwotoneHeart } from 'react-icons/ai';
import { FiPhoneCall, FiExternalLink } from 'react-icons/fi';
import { RiWhatsappFill } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 p-5">
            <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div className="flex flex-col gap-2">
       <h1 className="text-slate-100 font-bold text-[25px]">Airtime<span className="text-sky-500">Seller</span></h1>
         <p className="text-slate-500 text-[17px] pt-[20px] max-w-[400px]">Bringing you the services you need the most such as
             Bill Payments and ground breaking affordable Data Topup
              plans in the best way possible to serve the best customers 
              available.
              
                <h1 className="text-20px font-semibold mt-[15px] mb-[10px] text-white">Connect with the developer</h1>
                <div className="flex flex-row gap-5 mb-[20px]">
                  <a href="https://www.linkedin.com/in/desmond.nzubechukwu-38895422" className="text-[20px] hover:bg-slate-200 shadow-xl p-1 bg-white text-slate-900 rounded-full"><AiFillLinkedin /></a> 
                  <a href="https://www.twitter.com/nzubechukwu101" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"> < BsTwitter /></a>
                   <a href="https://wa.me/2347084183611?text=Hello,%20Nzubechukwu(B2R)%20My%20name%20is%20.....%20I%20got%20Your%20Contact%20From%20A%20Website%20that%20you%20built%20AirtimeSeller" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><RiWhatsappFill /></a>
               <a href="https://www.github.com/DesmondNzubechi" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><AiOutlineGithub /></a>
               <a href="https://nzubechukwu.netlify.app" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><FiExternalLink /></a>
                
                </div>
             </p>
         </div>
                <div className="flex flex-col gap-2">
       <h1 className="text-slate-100 font-bold text-[25px]">In<span className="text-sky-500">fomation</span></h1>
         <p className="flex flex-row items-center gap-3 my-2"><span className="bg-white p-2 rounded-full font-bold"><GoLocation className="text-[25px]  " /></span> <span className="text-slate-300 text-[15px] ">GRA Enugu Nigeria</span></p>
         <p><a href="tel:+2347084183611" className="flex flex-row items-center gap-3 my-2"><span className="bg-white p-2 rounded-full font-bold"><FiPhoneCall className="text-[25px]  "/></span> <span className="text-slate-300 text-[15px] ">+234 708 4183 611</span></a></p>
         <p><a href="mailto:nzubestdesmond@gmail.com" className="flex flex-row items-center gap-3 my-2"><span className="bg-white p-2 rounded-full font-bold"><AiOutlineMail className="text-[25px]  "/></span> <span className="text-slate-300 text-[15px] ">Info@AirtimeSeller.com</span></a></p>
       </div>
<div className="flex flex-col gap-2">
    <h1 className="text-slate-100 font-bold text-[25px]">Important Links</h1>
    <div className="flex flex-col gap-1">
<a href="/" to='/' className="text-slate-300 text-[20px] flex flex-row items-center hover:text-slate-500 active:text-sky-500 gap-2"><BiLink /> Home</a>
<a href="/about" to='/about' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink /> About</a>
<a href="/contact" to='/Contact' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Contact Us</a>
<a href="/review" to='/review' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Reviews</a>
<a href="/faq" to='/faq' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />FAQs</a>
    </div>
</div>
<div>
<div className="flex flex-col gap-2">
    <h1 className="text-slate-100 font-bold text-[25px]">NewsLetter</h1>
    <p className="text-slate-500 text-[17px] pt-[20px] max-w-[400px]">Get notified of all our premium discounts and promos. We will also notify
you from time to time when we make updates to serve you better.</p>
<form action="" className="bg-white max-w-[400px] flex flex-row justify-between p-2 rounded  mt-[20px] ">
    <input type="text"  className="max-w-[100%] bg-none mt-[20px]  outline-none border-none" placeholder="nzubestdesmond@gmail.com" />
    <button type="submit" className="bg-slate-900 text-white px-1 rounded shadow-xl  md:text-[20px]">Subscribe</button>
</form>
</div>
</div>
       </div>
       <br />
       <hr />
      
          <div className="flex md:flex-row flex-col gap-3 items-center justify-around mt-[20px]">
            <p className="flex flex-row items-center gap-1 text-slate-400 text-[12] md:text-[18px]">Website built out of <span className="text-red-500 text-[20px] md:text-[30px]"><AiTwotoneHeart /></span> by <a className="uppercase font-semibold text-sky-500 italic" href="https://nzubechukwu.com">Nzubechukwu</a> </p>
            <p className="md:text-[20px] text-[15px] text-slate-400">&copy; AirtimeSeller 2023</p>
          </div>
        </footer>
    )
}
