import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineUser } from 'react-icons/ai';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default function Review() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className=""
      >
        <SwiperSlide className=" rounded-xl mb-[40px] shadow-xl">
            <div className="py-[20px] px-[15px]">
            <h1 className="flex justify-center gap-[20px] items-center pb-3"><AiOutlineUser className="text-[30px] bg-sky-500 shadow-xl text-white rounded-full  font-bold"/> <span className="font-semibold text-[20px] uppercase">Nuel Mark</span> </h1>
           <p className="text-slate-500 font-[400] text-[17px] ">I have been transacting with this company for for sometimes now and I can Say they are one of the best company you can find out there. Fast Transaction and their customer service is great. </p>
        
            </div>
</SwiperSlide>
<SwiperSlide className=" rounded-xl mb-[40px] shadow-xl">
            <div className="py-[20px] px-[15px]">
            <h1 className="flex justify-center gap-[20px] items-center pb-3"><AiOutlineUser className="text-[30px] bg-sky-300 shadow-xl text-white rounded-full font-bold"/> <span className="font-semibold text-[20px] uppercase">Henry KayStar</span> </h1>
           <p className="text-slate-500 font-[400] text-[17px] "> You people deserve more than 5 stars, I have been using this site to transfer from airtel to mtn, within 2min everything is successful, from airtime to bank account again very easy.</p>
        
            </div>
</SwiperSlide>
<SwiperSlide className=" rounded-xl mb-[40px] shadow-xl">
            <div className="py-[20px] px-[15px]">
            <h1 className="flex justify-center gap-[20px] items-center pb-3"><AiOutlineUser className="text-[30px] bg-sky-300 shadow-xl text-white rounded-full font-bold"/> <span className="font-semibold text-[20px] uppercase">Chibuike Stanley</span> </h1>
           <p className="text-slate-500 font-[400] text-[17px] ">This is the best website for airtime conversion, I was able to convert my airtime conveniently in less than a minute. It's rates are also cheaper when compared to other company. </p>
        
            </div>
</SwiperSlide>
<SwiperSlide className=" rounded-xl mb-[40px] shadow-xl">
            <div className="py-[20px] px-[15px]">
            <h1 className="flex justify-center gap-[20px] items-center pb-3"><AiOutlineUser className="text-[30px] bg-sky-300 shadow-xl text-white rounded-full font-bold"/> <span className="font-semibold text-[20px] uppercase">Ola Oyedepo</span> </h1>
           <p className="text-slate-500 font-[400] text-[17px] ">They offer you service that makes it easier for you without no stress, There service is very good, There customer care service respond quickly, the service is very fast and reliable and so on. </p>
        
            </div>
</SwiperSlide>
      </Swiper>
    </>
  );
}
