import React from "react";
import tran from './tran.svg';
import { Whychoose } from "../WhyChooseUs/ChooseUs";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "../Footer/Footer";


const ConvertAirTime = () => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
  
    return (
        <>
        <div className="py-[90px] px-[30px] bg-white mt-[50px]">
  <div className="flex md:flex-row flex-col items-center justify-around gap-[30px] ">
    <div data-aos='fade-up' >
        <h1 className="md:text-[40px] text-[25px] my-5 uppercase font-bold">Convert Airtime to money</h1>
        <div className="my-3">
        <h2 className="font-semibold text-[20px] my-1 ">Network Provider</h2>
        <select name="" id="" className="w-full border rounded p-1 outline-0">
            <option value="">Select Network Provider</option>
            <option value="Glo">GLO</option>
            <option value="9Mobile">9MOBILE</option>
            <option value="Airtel">AIRTEL</option>
            <option value="MTN">MTN</option>
        </select>
        </div>
       <div className="my-5">
   <h2 className="font-semibold text-[20px] my-1 ">Enter airtime amount for conversion</h2>
   <input type="text" className="w-full border rounded p-1 outline-0" name="Amount" id="" placeholder="Enter Amount" />
       </div>
       <button className="bg-sky-500 text-white font-semibold text-[20px] py-1 px-2 rounded shadow-xl ">Proceed</button>
    </div>
    <div data-aos='fade-up' >
        <img src={tran} className='w-[300px] ' alt="" />
    </div>
  </div>
  <Whychoose />
</div>
<Footer />
</>
    )
};



export const BuyData = () => {
    
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
  
    return (
        <>
        <div className="py-[90px] px-[30px] bg-white mt-[50px]">
  <div className="flex md:flex-row flex-col items-center justify-around gap-[30px] ">
    <div data-aos='fade-up' >
        <h1 className="md:text-[40px] text-[25px] my-5 uppercase font-bold">Buy Data Instantly</h1>
        <div className="my-3">
        <h2 className="font-semibold text-[20px] my-1 ">Network Provider</h2>
        <select name="" id="" className="w-full border rounded p-1 outline-0">
            <option value="">Select Network Provider</option>
            <option value="Glo">GLO</option>
            <option value="9Mobile">9MOBILE</option>
            <option value="Airtel">AIRTEL</option>
            <option value="MTN">MTN</option>
        </select>
        </div>
       <div className="my-5">
   <h2 className="font-semibold text-[20px] my-1 ">Enter amount of data that you are buying</h2>
   <input type="text" className="w-full border rounded p-1 outline-0" name="Amount" id="" placeholder="Enter Amount" />
       </div>
       <button className="bg-sky-500 text-white font-semibold text-[20px] py-1 px-2 rounded shadow-xl ">Proceed</button>
    </div>
    <div data-aos='fade-up' >
        <img src={tran} className='w-[300px] ' alt="" />
    </div>
  </div>
  <Whychoose />
</div>
<Footer />
</>
    )
};


export const BuyAirtime = () => {
    
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
  
    return (
        <>
        <div className="py-[90px] px-[30px] bg-white mt-[50px]">
  <div className="flex md:flex-row flex-col items-center justify-around gap-[30px] ">
    <div data-aos='fade-up' >
        <h1 className="md:text-[40px] text-[25px] my-5 uppercase font-bold">Buy Airtime Instantly</h1>
        <div className="my-3">
        <h2 className="font-semibold text-[20px] my-1 ">Network Provider</h2>
        <select name="" id="" className="w-full border rounded p-1 outline-0">
            <option value="">Select Network Provider</option>
            <option value="Glo">GLO</option>
            <option value="9Mobile">9MOBILE</option>
            <option value="Airtel">AIRTEL</option>
            <option value="MTN">MTN</option>
        </select>
        </div>
       <div className="my-5">
   <h2 className="font-semibold text-[20px] my-1 ">Enter airtime amount</h2>
   <input type="text" className="w-full border rounded p-1 outline-0" name="Amount" id="" placeholder="Enter Amount" />
       </div>
       <button className="bg-sky-500 text-white font-semibold text-[20px] py-1 px-2 rounded shadow-xl ">Proceed</button>
    </div>
    <div data-aos='fade-up' >
        <img src={tran} className='w-[300px] ' alt="" />
    </div>
  </div>
  <Whychoose />
</div>
<Footer />
</>
    )
};



export const PayBill = () => {
    
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
  
    return (
        <>
        <div className="py-[90px] px-[30px] bg-white mt-[50px]">
  <div className="flex md:flex-row flex-col items-center justify-around gap-[30px] ">
    <div data-aos='fade-up' >
        <h1 className="md:text-[40px] text-[25px] my-5 uppercase font-bold">Pay bills instantly</h1>
        <div className="my-3">
        <h2 className="font-semibold text-[20px] my-1 ">Network Provider</h2>
        <select name="" id="" className="w-full border rounded p-1 outline-0">
            <option value="">Select Network Provider</option>
            <option value="DsTv">DSTV</option>
            <option value="GoTv">GOTV</option>
            <option value="Waec">WAEC</option>
            <option value="Neco">NECO</option>
            <option value="EEDC">EEDC</option>
            <option value="NEPA">NEPA</option>
        </select>
        </div>
       <button className="bg-sky-500 text-white font-semibold text-[20px] py-1 px-2 rounded shadow-xl ">Proceed</button>
    </div>
    <div>
        <img src={tran} className='w-[300px] ' alt="" />
    </div>
  </div>
  <Whychoose />
</div>
<Footer />
</>
    )
};

export default ConvertAirTime;