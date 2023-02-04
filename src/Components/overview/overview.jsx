import React from 'react';
import { BsCloudDownloadFill }  from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { AiOutlineUsergroupAdd, AiFillStar }  from 'react-icons/ai';
import { FcRating }  from 'react-icons/fc';

const OverView = () => {
    return(
        <div className=' bg-white mx-[20px] rounded-xl px-[10px] pt-[20px] pb-[20px]'>
           <div className='md:flex  md:flex-row sm:flex-col gap-[40px] justify-center items-center'>
            <div className='flex justify-around   md:gap-[40px] my-5'>
            <div className='flex flex-col h-[150px] min-w-[170px] hover:bg-blue-300 bg-sky-500 justify-center px-[20px]  items-center shadow-xl  rounded-[10px] p-[10px]'>
                <AiFillStar className='text-white rounded-full p-1 bg-sky-500 text-[50px]'/>
                <h1 className='font-bold text-[30px] md:text-[40px]'>4.5</h1>
                <p className='md:text-[20px] text-slate-500 font-semibold text-[16px]'>Average Rating</p>
            </div>
            <div className='flex flex-col h-[150px] min-w-[170px] hover:bg-blue-300 bg-sky-500 justify-center px-[20px] items-center shadow-xl  rounded-[10px]'>
                <BsCloudDownloadFill className='text-white rounded-full p-1 bg-sky-500 text-[50px]' />
                <h1 className='font-bold text-[30px] md:text-[40px]'>700k+</h1>
                <p className='md:text-[20px] text-slate-500 font-semibold text-[16px]'>App Download</p>
            </div>
            </div>
            <div className='flex justify-around  md:gap-[40px]'>
            <div className='flex flex-col h-[150px] min-w-[170px] hover:bg-blue-300 bg-sky-500 px-[20px] shadow-xl rounded-[10px] justify-center items-center'>
                <AiOutlineUsergroupAdd  className='text-white rounded-full p-1 bg-sky-500 text-[50px]'/>
                <h1 className='font-bold text-[30px] md:text-[40px]'>1m+</h1>
                <p className='md:text-[20px] text-slate-500 font-semibold text-[16px]'>Happy clients</p>
            </div>
            <div className='flex flex-col h-[150px] min-w-[170px] hover:bg-blue-300 bg-sky-500 justify-center items-center px-[20px] shadow-xl rounded-[10px]'>
                <RiCustomerService2Fill className='text-white rounded-full p-1 bg-sky-500 text-[50px]'/>
                <h1 className='font-bold text-[30px] md:text-[40px]'>24/7</h1>
                <p className='md:text-[20px] text-slate-500 font-semibold text-[16px]'>Customer Service</p>
            </div>
            </div>
           </div>
        </div>
    )
}

export default OverView;