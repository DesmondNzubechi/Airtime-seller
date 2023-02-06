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
            <h1 className="uppercase font-bold text-[25px] text-slate">Airtime<span className="text-white">seller</span></h1>
        </div>
        <div className="link bg-sky-500" style={{left:isNav}}>
     <ul className="" >
        <li onClick={closeNav}><Link to='/' className="decoration-none    text-xl hover:text-white">Home</Link> </li>
        <li  >
            <a className="decoration-none  cursor-pointer   text-xl hover:text-white flex flex-row items-center" onClick={showServices} ><span>Product</span><span className="font-bold text-[25px]">{isArrow}</span></a>
          {isServices && <ul className="flex flex-col absolute  bg-slate-600 p-5 text-white border-slate-700 rounded ">
                <li onClick={closeNav} className="text-[20px]"><Link to='/convert' onClick={hideServicesLink}>Convert Airtime</Link></li>
                <li onClick={closeNav} className="text-[20px]"><Link to='/airtime' onClick={hideServicesLink}>Buy Airtime</Link></li>
                <li onClick={closeNav} className="text-[20px]"><Link to='/data' onClick={hideServicesLink}>Buy Data</Link></li>
                <li onClick={closeNav} className="text-[20px]"><Link to='/bill' onClick={hideServicesLink}>Pay Bill</Link></li>
            </ul>
            }
        </li>
        <li onClick={closeNav}><Link to='/about' className="decoration-none     text-xl hover:text-white" >About</Link></li>
        <li onClick={closeNav}><Link to='/review' className="decoration-none     text-xl hover:text-white" >Reviews</Link></li>
        <li onClick={closeNav}><Link to='/contact' className="decoration-none     text-xl hover:text-white" href="http://">Contacts</Link></li>
        <li onClick={closeNav}><Link to='/faq'className="decoration-none     text-xl hover:text-white" href="http://">FAQs</Link></li>
     </ul>
        
        <div className="flex gap-3 log">
            <Link to='/login' className="text-[20px] text-center uppercase hover:text-white hover:bg-sky-700 shadow-xl w-[120px] px-3 py-1 rounded-[5px] text-dark bg-white " onClick={closeNav}>Login</Link>
            <Link to='/register' className="text-[20px] uppercase hover:text-dark hover:bg-slate-700 shadow-xl w-[120px] px-3 py-1 rounded-[5px] text-white bg-slate-500" onClick={closeNav}>Register</Link>
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