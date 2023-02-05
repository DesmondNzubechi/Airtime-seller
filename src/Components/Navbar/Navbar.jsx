import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiXMark, HiOutlineXMark } from 'react-icons/hi2';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import './Navbar.css';



const Navbar = () => {
const [isServices, setIsServices] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [isClose, setIsClose] = useState(false);
    const [isNav, setIsNav] = useState("-1000px");
    const [isArrow, setIsArrow] = useState(<IoMdArrowDropdown />)
    const showServices = () => {
        if (!isServices) {
            setIsServices(true);
            setIsArrow(<IoMdArrowDropup />)
        } else {
            setIsServices(false);
            setIsArrow(<IoMdArrowDropdown />)
        }
    }
        const hideServicesLink = () => {
           
            setIsArrow(<IoMdArrowDropdown />)
                setIsServices(false)
          
        }
    
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
        <li><Link to='/' className="decoration-none    text-xl hover:text-white">Home</Link> </li>
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
        <li onClick={closeNav}><Link to='/contact' className="decoration-none     text-xl hover:text-white" href="http://">Contact Us</Link></li>
        <li onClick={closeNav}><Link to='/faq'className="decoration-none     text-xl hover:text-white" href="http://">FAQs</Link></li>
     </ul>
        
        <div className="flex gap-3 log">
            <Link to='/login' className="text-[20px] uppercase hover:text-white hover:bg-sky-700 shadow-xl w-[120px] px-3 py-1 rounded-[5px] text-dark bg-white ">Login</Link>
            <Link to='/register' className="text-[20px] uppercase hover:text-dark hover:bg-slate-700 shadow-xl w-[120px] px-3 py-1 rounded-[5px] text-white bg-slate-500">Register</Link>
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