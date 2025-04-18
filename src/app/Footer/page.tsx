import React from 'react'
import Image from 'next/image';
import logo2 from "../../../Assets/Logo2.svg";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Footer() {
  return (
    <div className='flex justify-between md:px-20 text-white flex-col md:flex-row  ' >
      <div className="flex flex-col md:w-5/12  py-10  gap-6">
        <Image src={logo2} alt="Logo" width={184} height={100} className="text-center" />

        <h3 className=' font-[600] text-4xl'>Lorem, Ipsum Lorem, Ipsum <br />
          Lorem, Ipsum or less.</h3>

        <button className='self-start bg-[#D2AC71] px-6 py-2 -ml-1 text-xl  font-[600] border-0 rounded-3xl '>Discover More</button>

        <div className="flex justify-between text-[#D2AC71] -mb-7 flex-wrap">
          <Link href=""><h3 className='text-[18px] p-2 text-white'>Home</h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Book</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Explore</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Tales</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Treasure</span></h3></Link>
        </div>
      </div>


      <div className="flex flex-col md:self-end mb-4 text-white ">
        <div className="flex ">
        <Link href="/"  className='mr-3 w-11 h-11 cursor-pointer bg-[#D2AC71] text-white flex items-center justify-center rounded-2xl text-3xl '><i className="fa-brands fa-instagram"></i></Link >
        <Link href="/"  className='mr-3 w-11 h-11 cursor-pointer bg-[#D2AC71] text-white flex items-center justify-center rounded-2xl text-3xl '><i className=" fa-brands fa-facebook-f"></i></Link >
        <Link href="/"  className='mr-3 w-11 h-11 cursor-pointer bg-[#D2AC71] text-white flex items-center justify-center rounded-2xl text-3xl '><i className="fa-brands fa-tiktok"></i></Link >
        <Link href="/"  className='mr-3 w-11 h-11 cursor-pointer bg-[#D2AC71] text-white flex items-center justify-center rounded-2xl text-3xl '><i className="fa-brands fa-x-twitter"></i></Link >
        <Link href="/"  className=' w-11 h-11 cursor-pointer bg-[#D2AC71] text-white flex items-center justify-center rounded-2xl text-3xl '><i className="fa-brands fa-linkedin-in"></i></Link >
        </div>
        <p className='md:text-end'>Copyright Gates of Egypt © 2024 <br />
        All rights reserved</p>
      </div>

    </div>
  )
}
