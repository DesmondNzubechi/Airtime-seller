import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiXMark, HiOutlineXMark } from 'react-icons/hi2';
import './Navbar.css';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isClose, setIsClose] = useState(false);
    const [isNav, setIsNav] = useState("-1000px")
    const openNav = () => {
        setIsClose(true);
        setIsOpen(false);
        setIsNav('0');
    };
    const closeNav = () => {
        setIsClose(false);
        setIsOpen(true);
        setIsNav('-1000px');
    }

    return (
     <nav className="navi bg-sky-500 gap-10 p-5 shadow-xl  ">
        <div className="relative z-10">
            <h1 className="uppercase font-bold text-[25px] text-slate">Airtime<span className="text-white">seller</span></h1>
        </div>
        <div className="link bg-sky-500" style={{left:isNav}}>
     <ul className="" >
        <li><a className="decoration-none    text-xl hover:text-white" href="http://">Home</a> </li>
        <li><a className="decoration-none     text-xl hover:text-white" href="http://">Product</a></li>
        <li><a className="decoration-none     text-xl hover:text-white" href="http://">Blog</a></li>
        <li><a className="decoration-none     text-xl hover:text-white" href="http://">About</a></li>
        <li><a className="decoration-none     text-xl hover:text-white" href="http://">Contact Us</a></li>
        <li><a className="decoration-none     text-xl hover:text-white" href="http://">FAQs</a></li>
     </ul>
        
        <div className="flex gap-3 log">
            <button className="text-[20px] uppercase hover:text-white hover:bg-sky-700 shadow-xl w-[120px] px-3 py-1 rounded-[5px] text-dark bg-white ">Login</button>
            <button className="text-[20px] uppercase hover:text-dark hover:bg-slate-700 shadow-xl w-[120px] px-3 py-1 rounded-[5px] text-white bg-slate-500">Register</button>
        </div>
        </div>
        <div className="Ic">
          { isOpen && <RxHamburgerMenu className="text-[50px]"  onClick={openNav}/>}
           {isClose && <HiXMark className="text-[50px]" onClick={closeNav}/>}
        </div>
     </nav>
    )
};

export default Navbar;