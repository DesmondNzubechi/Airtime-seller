import React from "react";
import tran from './tran.svg';


const ConvertAirTime = () => {
    return (
        <div className="py-[90px] px-[30px] bg-white mt-[50px]">
  <div className="flex md:flex-row flex-col items-center justify-around gap-[30px] ">
    <div>
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
       <button className="bg-sky-500 text-white font-semibold text-[30px] py-1 px-2 rounded shadow-xl ">Proceed</button>
    </div>
    <div>
        <img src={tran} className='max-w-[350px] ' alt="" />
    </div>
  </div>
</div>
    )
};

export default ConvertAirTime;