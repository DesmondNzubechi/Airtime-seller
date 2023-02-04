import React from "react";
import logoS from './Img/Girl.webp';


const Header = () => {
    return (
        <div className="pt-[150px] pb-[50px] px-[40px] overflow-x-hidden">
            <div className="md:flex md:items-center md:justify-around gap-20">
            <div className="md:w-[600px]">
                <h1 className="md:text-[40px] my-[10px] text-[30px] md:w-[400px]">Best platform for your <strong className="text-sky-500">Airtime</strong> in Nigeria</h1>
                <p className="my-[20px] text-[20px]">
                We make it easy for you to convert airtime to cash,
                 buy airtime and data instantly or pay those bills.
                  We have got you covered. AirtimeSeller is the one-stop hub
                   for everything airtime, data and bills and the best airtime
                    payment processing system you’ll find.
                </p>
                <div className="my-[30px]" >
                    <button className=" shadow-xl  py-1 px-2 text-[30px] rounded-[7px] bg-sky-500 text-slate-700">Get Started</button>
                </div>

            </div>
            <div className="md:w-[500px] ">
                <img className="  rounded-full " src={logoS} alt="" />
            </div>
            </div>
        </div>
    )
};




export default Header;
