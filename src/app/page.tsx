
"use client"
import Image from "next/image";
import Users from "./Assets/users.svg"
import SomaBay from "./Assets/SomaBay.svg"
import Cairo from "./Assets/cairo.svg"
import RedSea from "./Assets/RedSea.svg"
import Giza from "./Assets/Giza.svg"
import Nile from "./Assets/Nile.svg"
import NabqBay from "./Assets/NabqBay.svg"
import Other from "./Assets/Other.svg"
import Mouse from "./Assets/Mouse.svg"
import VR from "./Assets/VR.svg"
import Deals from "./Assets/Deals.svg"

import { Datepicker, createTheme, ThemeProvider } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';






// const customTheme = createTheme({
//   "root": {
//     "base": "relative"
//   },
//     "popup": {
//       "root":{
//         "base": "absolute top-10 z-50 block pt-2",
//         "inline": "relative top-0 z-auto",
//         "inner": "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-red-700"
//       }
//     },
// })

const customTheme = createTheme({
  datepicker: {


    "popup": {
      "root": {
        "base": "absolute top-12 -left-12  backdrop-blur-[10px] block pt-2",

        "inner": "inline-block z-[99999] absolute rounded-lg bg-white p-4 shadow-lg dark:bg- calender"
      },
    }
  },

  "header": {

    "root": {
      "base": "bg-red-900 "
    },

    "selectors": {
      "base": "mb-2 flex justify-between bg-red-900",
      "button": {
        "base": "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:bg-red-500 dark:text-red-900 dark:hover:bg-red-600",
        "prev": "dark:bg-red-300 ",
        "next": "dark:bg-red-300",
        "view": "dark:bg-red-300"
      }
    }
  },

});






export default function Home() {
  const [fromDate, setFromDate] = useState<Date | null >(new Date());
  const [toDate, setToDate] = useState<Date | null >(new Date());

  useEffect(()=>{
    console.log(fromDate)
  },[fromDate])

  let [isPeopleActive, setIsPeopleActive] = useState<boolean>(false);


  let [adults, setAdults] = useState<number>(2);
  let [children, setChildren] = useState<number>(2);
  let [rooms, setRooms] = useState<number>(1);


  const dropdownRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPeopleActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(()=>{
    let sum = adults+children;
    console.log(sum);
    switch(true){
      case sum>12 :
        setRooms(4)
        break;
      case sum>8:
        setRooms(3)
        break;
      case sum>4:
        setRooms(2)
        break;
      default:
        setRooms(1);
        break;  
    }

  },[adults, children])

  function handleFROMDateChange(date:Date){
    console.log(date);
  }


  let [values, setValues] = useState<object>({})
  function collectData(destination:string, from:string, to:string, people:object){
    setValues({destination, from, to, people})
    console.log(values)

  }


  return (
    <>
      <section className="topSection  relative min-h-screen">
        <div className="absolute bg-[#00000099] flex items-center md:items-start flex-col justify-around pt-40 top-0 bottom-0 right-0  px-5 sm:px-20  md:px-20 left-0 lg:px-50">
          <div className="flex flex-col  text-white ">
            <div className="flex items-center">
              <i className="fa-solid fa-location-arrow mr-1 mt-1"></i>
              <p>Egypt</p>
            </div>
            <div>
              <h2 className="text-3xl font-[600]">Hey, Bishoy!</h2>
              <h2 className="text-3xl font-[600]">Tell us where you want to stay</h2>
              <p>Book 450+ Curated Egyptian Hotels</p>
            </div>
          </div>

          <div className="reservation relative flex flex-col md:flex-row justify-between md:w-full w-10/12 p-2 items-center rounded-4xl my-7 bg-[#FFFFFF40]">

            <label htmlFor="inLineSearch" className="md:border-r  md:border-b-0 border-b border-[#00000033] p-3 w-full lg:w-6/12 2 flex items-center mr-2 ">
              <i className="fa-solid fa-location-dot text-[#D2AC71] mx-2 "></i>
              <input id='destination' defaultValue={"Cairo"} className="text-white font-[600] w-full mr-2" type="text"  placeholder="Cairo, Egypt" />
            </label>

            <ThemeProvider theme={customTheme}  >
              <p className="text-white">From</p>
              <Datepicker  id="from" onChange={(value) => setFromDate(value)}  style={{ backgroundColor: 'transparent', border: "0" }} className="lg:w-6/12 md:border-r md:border-b-0 border-b border-[#00000033]" />
            </ThemeProvider>

            <ThemeProvider theme={customTheme} >
              <p className="text-white ml-2">To</p>
              <Datepicker id="to" onChange={(value) => setToDate(value)} style={{ backgroundColor: 'transparent', border: "0" }} className="lg:w-6/12 md:border-r md:border-b-0 border-b border-[#00000033]" />
            </ThemeProvider>

            <label onClick={() => { setIsPeopleActive(!isPeopleActive) }} htmlFor="users" className="flex justify-start text-start py-3 px-2 mr-10 w-5/12 md:border-r md:border-b-0 border-b border-[#00000033]">

              <Image src={Users} width={20} height={20} alt="users" className="mr-2" />
              <input type="text" id="users" className="text-white" placeholder={`${adults} Adults, ${children} Child`} />
            </label>
            <button onClick={()=>collectData((document.querySelector('#destination') as HTMLInputElement)?.value || "", (document.querySelector('#from') as HTMLInputElement)?.value || "", (document.querySelector('#to') as HTMLInputElement)?.value || "", {adults, children, rooms} )} className="text-white hidden md:flex bg-[#346D52] py-3  w-3/12 rounded-2xl justify-center">Explore stays</button>


          </div>

          <div className="relative w-70 left-7 md:w-60 overflow-hidden py-30 -top-7 md:-top-15 lg:left-185">

            <div ref={dropdownRef} style={{ transition: "0.5s" }} className={`backdrop-blur-[3px] bg-[#FFFFFF40] p-5 rounded-[30px] text-white w-60 -top-54 absolute left-0   ${isPeopleActive ? "top-0" : ""} `}>
              <div className="flex justify-between items-center mb-2">

                <div className="flex flex-col">
                  <h3 className="text-[16px] ">Adults</h3>
                  <p className="text-[12px] text-[#B7B7B7] ">Age 18 or above</p>
                </div>

                <div className="flex h-full items-center  w-15 justify-between text-white">
                  <div onClick={() => {
                    if (adults != 1) {
                      setAdults(adults - 1)

                    }

                  }} className={`w-5 h-5 flex items-center justify-center rounded-full border border-[#FFFFFF4D] text-[#D2AC71] ${adults == 1 ? 'text-[#d2ab7144] cursor-default' : 'cursor-pointer text-[#D2AC71]'}`} ><span><i className="fa-solid fa-minus "></i></span></div>

                  <span>{adults}</span>

                  <div onClick={() => {
                    if (adults != 16 && (adults + children != 16)) {
                      setAdults(adults + 1)

                    }

                  }} className={`w-5 h-5 flex items-center justify-center rounded-full border border-[#FFFFFF4D] text-[#D2AC71] ${(adults == 16 || (adults + children) == 16) ? 'text-[#d2ab7144] cursor-default' : 'cursor-pointer text-[#D2AC71]'}`}>
                    <span>
                      <i className="fa-solid fa-plus "></i>
                      </span>
                      </div>

                </div>
              </div>


              <div className="flex justify-between items-center mb-2 ">

                <div className="flex flex-col">
                  <h3 className="text-[16px]">Children</h3>
                  <p className="text-[12px] text-[#B7B7B7]">Under 18</p>
                </div>

                <div className="flex h-full items-center  w-15 justify-between">
                  <div
                  onClick={() => {
                    if (children != 0) {
                      setChildren(children - 1)

                    }

                  }}
                  className={`w-5 h-5 flex items-center justify-center rounded-full border border-[#FFFFFF4D] text-[#D2AC71] ${children == 0 ? 'text-[#d2ab7144] cursor-default' : 'cursor-pointer text-[#D2AC71]'}`}><span><i className="fa-solid fa-minus "></i></span></div>

                  <span>{children}</span>

                  <div 
                  onClick={() => {
                    if (children != 16 && children+adults !=16) {
                      setChildren(children + 1)

                    }

                  }}
                  
                  className={`w-5 h-5 flex items-center justify-center rounded-full border border-[#FFFFFF4D] text-[#D2AC71] ${(children == 16 || (adults + children) == 16) ? 'text-[#d2ab7144] cursor-default' : 'cursor-pointer text-[#D2AC71]'}`}><span><i className="fa-solid fa-plus "></i></span></div>

                </div>
              </div>
              <div className="flex justify-between items-center">

                <div className="flex flex-col">
                  <h3 className="text-[16]">Rooms</h3>

                </div>

                <div className="flex h-full items-center  w-15 justify-between text-white">
                  <div
                  onClick={() => {
                    if (rooms !=1) {
                      setRooms(rooms - 1 )

                    }

                  }}
                  className={`w-5 h-5 flex items-center justify-center rounded-full border border-[#FFFFFF4D] text-[#D2AC71] ${(rooms == 1 ) ? 'text-[#d2ab7144] cursor-default' : 'cursor-pointer text-[#D2AC71]'}`}> <span><i className="fa-solid fa-minus "></i></span> </div>

                  <span>{rooms}</span>

                  <div
                    onClick={() => {
                      if (rooms !=16 && rooms != (adults + children)) {
                        setRooms(rooms + 1)
  
                      }
  
                    }}
                  
                    className={`w-5 h-5 flex items-center justify-center rounded-full border border-[#FFFFFF4D] text-[#D2AC71] ${(rooms == 16  || rooms == (adults + children)) ? 'text-[#d2ab7144] cursor-default' : 'cursor-pointer text-[#D2AC71]'}`}><span><i className="fa-solid fa-plus "></i></span></div>

                </div>
              </div>
              <p className="text-[12px] text-[#B7B7B7] text-center mt-5">You can search for up to 16 travelers</p>

            </div>

          </div>


        </div>


      </section>
      <section className="pt-10">
      <div className="relative  px-20 md:px-30 lg:px-35 ">
        <h3 className="text-white text-4xl pb-5 font-[800]">The Most Relevant</h3>
     
     <div className="relative ">
     <Swiper
      modules={[Navigation]}
      onSwiper={(swiper) => {
        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation.prevEl = '.custom-prev';
        swiper.params.navigation.nextEl = '.custom-next';
        swiper.navigation.init();
        swiper.navigation.update();
      }
      if (swiper.navigation) {
        swiper.navigation.init();
        swiper.navigation.update();
      }
      }
    }
        spaceBetween={30}
        // slidesPerView={2.5}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
     
      >
       
        <SwiperSlide >

          <div className="bg-white rounded-4xl w-full relative flex flex-col">
            <Image src={SomaBay} width={0} height={314} alt={"SomaBay"} className="rounded-4xl w-full" />

            <div className="flex justify-between p-4">
              <div className="flex flex-col">
                <h3 className="text-[18px] font-[600] p-0 -mb-1">Kempinski Hotel Soma Bay</h3>
                <h3 className="text-[16px] font-[500] p-0">From $214 per person</h3>          
              </div>

              <div className="flex items-center self-start gap-2 ">
                <i className="fa-solid fa-star text-[#D2AC71]"></i>
                <h3 className=" font-[500] text-[18px]">4.7 <span className="text-[#4D4D4D]">(1,274)</span> </h3>
              </div>
            </div>

            <div className="absolute flex justify-between top-5 px-6  w-full">
              <h3 className="px-4 py-2 flex  bg-white rounded-full text-[15px] font-[500] text-[#346D52]">Soma Bay</h3>
              <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full text-[20px]"><i className="fa-regular fa-heart"></i></div>


            </div>


          </div>
          
        </SwiperSlide>
        <SwiperSlide >
        <div className="bg-white rounded-4xl w-full relative min-h-full flex flex-col">
            <Image src={Cairo} width={0} height={314} alt={"SomaBay"} className="rounded-4xl w-full" />

            <div className="flex justify-between  p-4">
              <div className="flex flex-col">
                <h3 className="text-[18px] font-[600] p-0 -mb-1">JW Marriott Hotel Cairo</h3>
                <h3 className="text-[16px] font-[500] p-0">From $194 per person</h3>          
              </div>

              <div className="flex items-center self-start gap-2 ">
                <i className="fa-solid fa-star text-[#D2AC71]"></i>
                <h3 className=" font-[500] text-[18px]">4.7 <span className="text-[#4D4D4D]">(2,274)</span> </h3>
              </div>
            </div>

            <div className="absolute flex justify-between top-5 px-6  w-full">
              <h3 className="px-4 py-2 flex  bg-white rounded-full text-[15px] font-[500] text-[#346D52]">Cairo</h3>
              <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full text-[20px]"><i className="fa-regular fa-heart"></i></div>


            </div>


          </div>
        </SwiperSlide>
        <SwiperSlide><div className="bg-white rounded-4xl w-full relative flex flex-col">
            <Image src={SomaBay} width={0} height={314} alt={"SomaBay"} className="rounded-4xl w-full" />

            <div className="flex justify-between p-4">
              <div className="flex flex-col">
                <h3 className="text-[18px] font-[600] p-0 -mb-1">Kempinski Hotel Soma Bay</h3>
                <h3 className="text-[16px] font-[500] p-0">From $214 per person</h3>          
              </div>

              <div className="flex items-center self-start gap-2 ">
                <i className="fa-solid fa-star text-[#D2AC71]"></i>
                <h3 className=" font-[500] text-[18px]">4.7 <span className="text-[#4D4D4D]">(1,274)</span> </h3>
              </div>
            </div>

            <div className="absolute flex justify-between top-5 px-6  w-full">
              <h3 className="px-4 py-2 flex  bg-white rounded-full text-[15px] font-[500] text-[#346D52]">Soma Bay</h3>
              <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full text-[20px]"><i className="fa-regular fa-heart"></i></div>


            </div>


          </div>
          </SwiperSlide>
        
   
      </Swiper>
      <div className="absolute top-35 z-1 flex justify-between  w-full">
      <button className="custom-prev bg-white w-10 h-10 rounded-full z-[10] absolute left-[-3%] lg:left-[-2%]"><i className="fa-solid fa-chevron-left"></i></button>
      <button className="custom-next bg-white w-10 h-10 rounded-full z-[10] absolute left-[97%] lg:left-[98%]"><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      
      
     </div>

     
      
    </div>

      </section>

      <section className="pt-5">
      <div className="relative px-20  md:px-35 ">
        <h3 className="text-white text-4xl pb-5 font-[800]">Dicover New Places</h3>
     
     <div className="relative ">
     <Swiper
      modules={[Navigation]}
      onSwiper={(swiper) => {
        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation.prevEl = '.custom-prev2';
        swiper.params.navigation.nextEl = '.custom-next2';
        swiper.navigation.init();
        swiper.navigation.update();
      }
      }
      }
        spaceBetween={10}
        
        
        breakpoints={{
          350: {
            slidesPerView: 1.25,
          },
          450: {
            slidesPerView: 2.25,
          },

          600: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 5.5,
          },
        }}
     
      >
       
        <SwiperSlide >

          <div className="bg-white rounded-4xl w-full h-full relative flex flex-col">
            <Image src={RedSea} width={0} height={300} alt={"RedSea"} className="rounded-4xl object-cover h-70  w-full" />

            

            <div className="absolute flex  justify-between bottom-0 px-6    w-full">
              <h3 className="px-0 py-3 text-shadow-lg flex  rounded-full text-[20px] font-[600] text-white">Red Sea</h3>
            </div>


          </div>
          
        </SwiperSlide>
        <SwiperSlide >

          <div className="bg-white rounded-4xl w-full h-full relative flex flex-col">
            <Image src={SomaBay} width={0} height={300}  alt={"SomaBay"} className="rounded-4xl object-cover h-70 w-full" />

            

            <div className="absolute flex  justify-between bottom-0 px-6    w-full">
              <h3 className="px-0 py-3 text-shadow-lg flex  rounded-full text-[20px] font-[600] text-white">Soma Bay</h3>
            </div>


          </div>
          
        </SwiperSlide>
        
        <SwiperSlide >

          <div className="bg-white rounded-4xl w-full h-full relative flex flex-col">
            <Image src={Giza} width={0} height={300}  alt={"Giza"} className="rounded-4xl object-cover h-70 w-full" />

            

            <div className="absolute flex  justify-between bottom-0 px-6    w-full">
              <h3 className="px-0 py-3 text-shadow-lg flex  rounded-full text-[20px] font-[600] text-white">Giza</h3>
            </div>


          </div>
          
        </SwiperSlide>
        <SwiperSlide >

          <div className="bg-white rounded-4xl w-full h-full relative flex flex-col">
            <Image src={Nile} width={0} height={300}  alt={"Nile"} className="rounded-4xl object-cover h-70 w-full" />

            

            <div className="absolute flex  justify-between bottom-0 px-6    w-full">
              <h3 className="px-0 py-3 text-shadow-lg flex  rounded-full text-[20px] font-[600] text-white">Nile</h3>
            </div>


          </div>
          
        </SwiperSlide>
        <SwiperSlide >

          <div className="bg-white rounded-4xl w-full h-full relative flex flex-col">
            <Image src={NabqBay} width={0} height={300}  alt={"NabqBay"} className="rounded-4xl object-cover h-70 w-full" />

            

            <div className="absolute flex  justify-between bottom-0 px-6    w-full">
              <h3 className="px-0 py-3 text-shadow-lg flex  rounded-full text-[20px] font-[600] text-white">Nabq Bay</h3>
            </div>


          </div>
          
        </SwiperSlide>
        <SwiperSlide >

          <div className="bg-white rounded-4xl w-full h-full relative flex flex-col">
            <Image src={Other} width={0} height={300}  alt={"Other"} className="rounded-4xl object-cover h-70 w-full" />

            

            <div className="absolute flex  justify-between bottom-0 px-6    w-full">
              <h3 className="px-0 py-3 text-shadow-lg flex  rounded-full text-[20px] font-[600] text-white">Other</h3>
            </div>


          </div>
          
        </SwiperSlide>
        
        
       
        
   
      </Swiper>
      <div className="absolute top-35 z-1 flex justify-between  w-full">
      <button className="custom-prev2 bg-white w-10 h-10 rounded-full z-[10] absolute left-[-2%]"><i className="fa-solid fa-chevron-left"></i></button>
      <button className="custom-next2 bg-white w-10 h-10 rounded-full z-[10] absolute left-[98%]"><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      
      
     </div>

     
      
      </div>

      </section>
      <section className="pt-5">

      <div className="relative px-20  md:px-40 ">
        <h3 className="text-white text-4xl pb-5 font-[800] ">Why choose <span className="text-[#D2AC71]">Egy</span>Book?</h3>

        <div className="flex w-full flex-col lg:flex-row  justif-between items-center ">
          <div className="flex flex-col w-full  lg-mb-0 mb-5 lg-mb-0">
            <Image src={Mouse} width={40} height={40}  alt={"Mouse Click"}/>
            <h3 className="text-2xl text-white py-2 font-[700]"> <span className="text-[#D2AC71]">Seamless</span>  & <span className="text-[#346D52]">Smart</span> Booking</h3>
            <p className="w-9/12 text-xl text-white">Quick, user-friendly platform that simplifies the reservation process</p>
          </div>
          <div className="flex flex-col w-full mb-5 lg-mb-0 ">
            <Image src={VR} width={40} height={40} alt={"Mouse Click"} />
            <h3 className="text-2xl text-white py-2 font-[700]">   <span className="text-[#346D52]">Immersive</span> VR Previews</h3>
            <p className="w-9/12 text-xl text-white">Explore hotels and rooms in 360° before you book—giving you total confidence.</p>
          </div>
          <div className="flex flex-col w-full mb-5 lg-mb-0 pb-10  ">
            <Image src={Deals} width={40} height={40} alt={"Mouse Click"} />
            <h3 className="text-2xl text-white py-2 font-[700]">   <span className="text-[#346D52]">Exclusive</span>  Best-Price Deals</h3>
            <p className="w-10/12 text-xl text-white">Save more with special offers and real-time price comparisons.</p>
          </div>
          
          

        </div>
      </div>
     
     

      </section>
      <section className="pt-5">
      <div className="relative px-20  md:px-30 lg:px-35">
        <h3 className="text-white text-4xl pb-5 font-[800]">Trending Destinations</h3>
     
     <div className="relative ">
     <Swiper
      modules={[Navigation]}
      onSwiper={(swiper) => {
        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation.prevEl = '.custom-prev3';
        swiper.params.navigation.nextEl = '.custom-next3';
        swiper.navigation.init();
        swiper.navigation.update();
      }
      if (swiper.navigation) {
        swiper.navigation.init();
        swiper.navigation.update();
      }
      }
     }
        spaceBetween={10}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },                 
          768: {
            slidesPerView: 1.5,
          },
          1280: {
            slidesPerView: 2.5,
          },
        }}

        className="w-full"
     
      >
       
        <SwiperSlide >

          <div className="trimg1 bg-white rounded-4xl w-full relative flex flex-col h-full py-45">
            {/* <Image src={Cairo2} width={0} height={0} alt={"Cairo2"} className="rounded-4xl w-full min-h-full" /> */}
            

           

            <div className="trSlide1 absolute top-0 flex flex-col justify-between  items-start py-7 h-full w-full   rounded-4xl">
              
              <div className=" w-10/12  flex flex-col justify-center   text-[20px] px-5">
                <h3 className="text-white font-[600] text-5xl"> Cairo </h3>
                <p className="text-white font-[500] text-[26px]"> Unveil secrets of ancient wonders. </p>
              </div>
              <h3 className=" py-1 mx-4 text-center  bg-white rounded-full text-xl font-[500] text-[#121212] w-5/12">See Hotels</h3>


            </div>


          </div>
          
        </SwiperSlide>
       
        <SwiperSlide >

          <div className="trimg2 bg-white rounded-4xl w-full relative flex flex-col h-full py-45">
            {/* <Image src={Hurghada} width={465} height={314} alt={"Hurghada"} className="rounded-4xl" /> */}
            

           

            <div className="trSlide2 absolute top-0 flex flex-col justify-between  items-start py-7 h-full w-full   rounded-4xl">
              
              <div className=" w-10/12  flex flex-col justify-center   text-[20px] px-5">
                <h3 className="text-white font-[600] text-5xl"> Hurghada </h3>
                <p className="text-white font-[500] text-[26px]"> Sunshine, beaches, and vibrant reefs. </p>
              </div>
              <h3 className=" py-1 mx-4 text-center  bg-white rounded-full text-xl font-[500] text-[#121212] w-5/12">See Hotels</h3>


            </div>


          </div>
          
        </SwiperSlide>
        <SwiperSlide >

          <div className="trimg3 bg-white rounded-4xl w-full relative flex flex-col h-full py-45">
            {/* <Image src={Hurghada} width={465} height={314} alt={"Hurghada"} className="rounded-4xl" /> */}
            

            

            <div className="trSlide3 absolute top-0 flex flex-col justify-between  items-start py-7 h-full w-full   rounded-4xl">
              
              <div className=" w-11/12  flex flex-col justify-center   text-[20px] px-5">
                <h3 className="text-white font-[600] text-5xl"> Sharm El-Shiekh </h3>
                <p className="text-white font-[500] text-[26px]">  Dive into breathtaking underwater vistas. </p>
              </div>
              <h3 className=" py-1 mx-4 text-center  bg-white rounded-full text-xl font-[500] text-[#121212] w-5/12">See Hotels</h3>


            </div>


          </div>
          
        </SwiperSlide>
        <SwiperSlide >

          <div className="trimg4 bg-white rounded-4xl w-full relative flex flex-col h-full py-45">
            {/* <Image src={Hurghada} width={465} height={314} alt={"Hurghada"} className="rounded-4xl" /> */}
            

           

            <div className="trSlide4 absolute top-0 flex flex-col justify-between  items-start py-7 h-full w-full   rounded-4xl">
              
              <div className=" w-10/12  flex flex-col justify-center   text-[20px] px-5">
                <h3 className="text-white font-[600] text-5xl"> Luxor </h3>
                <p className="text-white font-[500] text-[26px]">  Unveil secrets of ancient wonders. </p>
              </div>
              <h3 className=" py-1 mx-4 text-center  bg-white rounded-full text-xl font-[500] text-[#121212] w-5/12">See Hotels</h3>


            </div>


          </div>
          
        </SwiperSlide>
       
        
        
       
        
        
   
      </Swiper>
      <div className="absolute top-35 z-3 flex justify-between  w-full">
      <button className="custom-prev3 bg-white w-10 h-10 rounded-full z-[10] absolute left-[-2%]"><i className="fa-solid fa-chevron-left"></i></button>
      <button className="custom-next3 bg-white w-10 h-10 rounded-full z-[10] absolute left-[96%]"><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      

      
      <div className="fade-effect absolute right-0 top-0 z-1 h-full w-[100px]">
      
      </div> 
     </div>

     
      
    </div>

      </section>
      <section className="pt-10">
      <div className="relative px-10  md:px-35 flex flex-col lg:flex-row">
        <div className=" bg-[#BFDBC9] flex flex-col justify-center py-5 px-7 lg:w-6/12 border-0 rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none lg:rounded-bl-3xl ">
          <h3 className="font-[700] text-5xl">Ready to Book Your Next Adventure?</h3>
          <p className="font-[400] text-[#0F1F18] py-3 text-2xl pr-14">
          Get exclusive deals and immersive previews with our smart booking platform.
          </p>

        <button className="bg-[#458465] py-1 text-white border-0 rounded-full w-80 mt-3 text-xl font-[600] ">
          Book Now
        </button>
        </div>



        <div className="image h- lg:w-6/12 p-50 border-0 lg:rounded-tr-3xl lg:rounded-br-3xl rounded-br-3xl rounded-bl-3xl  lg:rounded-bl-none">

        </div>


      </div>

      </section>


    </>
  );
}
