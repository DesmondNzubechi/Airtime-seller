import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiXMark, HiOutlineXMark } from 'react-icons/hi2';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import './Navbar.css';



const Navbar = () => {
    //VARIABLE FOR SHOWING SERVICES LINK
const [isServices, setIsServices] = useState(false);
//VARIABLE FOR HIDDEN NAVBAR ICON
    const [isOpen, setIsOpen] = useState(true);
    //VARIABLE FOR SHOWING CLOSE ICON
    const [isClose, setIsClose] = useState(false);
    //VARIABLE FOR OPENING AND CLOSING NAVBAR
    const [isNav, setIsNav] = useState("-1000px");
    //FOR SHOWING DROPUP AND DROPDOWN ARROW
    const [isArrow, setIsArrow] = useState(<IoMdArrowDropdown />)
    //FUNCTION FOR DISPLAYING SERVICES LINK
    const showServices = () => {
        if (!isServices) {
            setIsServices(true);
            setIsArrow(<IoMdArrowDropup />)
        } else {
            setIsServices(false);
            setIsArrow(<IoMdArrowDropdown />)
        }
    }
     //FUNCTION FOR  HIDING SERVICES LINK
        const hideServicesLink = () => {
           
            setIsArrow(<IoMdArrowDropdown />)
                setIsServices(false)
          
        }
     //FUNCTION FOR DISPLAYING NAVBAR LINK
    const openNav = () => {
        setIsClose(true);
        setIsOpen(false);
        setIsNav('0');
    };
    //FUNCTION FOR HIDING NAVBAR LINK
    const closeNav = () => {
        setIsClose(false);
        setIsOpen(true);
        setIsNav('-1000px');
    }

    return (
     <nav className="navi bg-sky-500 gap-10 p-5 shadow-xl  ">
        <div className="relative z-10">
            <h1 className="uppercase font-bold text-[15px] md:text-[17px] xl:text-[20px] text-slate">Airtime<span className="text-white">seller</span></h1>
        </div>
        <div className="link bg-sky-500" style={{left:isNav}}>
     <ul className="" >
        <li onClick={closeNav}><Link to='/' className="decoration-none    text-xl hover:text-white">Home</Link> </li>
        <li  >
            <a className="decoration-none  cursor-pointer   text-xl hover:text-white flex flex-row items-center" onClick={showServices} ><span>Services</span><span className="font-bold text-[25px]">{isArrow}</span></a>
          {isServices && <ul className="flex flex-col absolute  bg-slate-600 p-5 text-white border-slate-700 rounded ">
                <li onClick={closeNav} className="text-[20px]"><a href="/convert" to='/convert' onClick={hideServicesLink}>Convert Airtime</a></li>
                <li onClick={closeNav} className="text-[20px]"><a href="/airtime" to='/airtime' onClick={hideServicesLink}>Buy Airtime</a></li>
                <li onClick={closeNav} className="text-[20px]"><a href="/data" to='/data' onClick={hideServicesLink}>Buy Data</a></li>
                <li onClick={closeNav} className="text-[20px]"><a href="/bill" to='/bill' onClick={hideServicesLink}>Pay Bill</a></li>
            </ul>
            }
        </li>
        <li onClick={closeNav}><a href="/about" to='/about' className="decoration-none     text-xl hover:text-white" >About</a></li>
        <li onClick={closeNav}><a href="/review" to='/review' className="decoration-none     text-xl hover:text-white" >Reviews</a></li>
        <li onClick={closeNav}><a href='/contact' to='/contact' className="decoration-none     text-xl hover:text-white" >Contacts</a></li>
        <li onClick={closeNav}><a href='/faq' to='/faq'className="decoration-none     text-xl hover:text-white" >FAQs</a></li>
     </ul>
        
        <div className="flex gap-3 log">
            <a href="/login" to='/login' className="xl:text-[20px] md:text-[15px] text-center uppercase hover:text-white hover:bg-sky-700 shadow-xl  px-5 py-1 rounded-[5px] w-fit text-dark bg-white " onClick={closeNav}>Login</a>
            <a href="/register" to='/register' className="xl:text-[20px] md:text-[15px] uppercase hover:text-dark hover:bg-slate-700 shadow-xl px-3 py-1 rounded-[5px] text-white bg-slate-500" onClick={closeNav}>Register</a>
        </div>
        </div>
        <div className="Ic">
          { isOpen && <RxHamburgerMenu className="text-[40px]"  onClick={openNav}/>}
           {isClose && <HiXMark className="text-[40px]" onClick={closeNav}/>}
        </div>
     </nav>
    )
};

export default Navbar;