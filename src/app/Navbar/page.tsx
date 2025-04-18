
"use client"
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../Assets/logo.svg";
import logo2 from "../../../Assets/Logo2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "@fortawesome/fontawesome-free"

import '../globals.css'


export default function Navbar() {
  let [isMenuActive, setisMenuActive] = useState<boolean>(false)
  let [isLogged, setIsLogged] = useState<boolean>(true);
  let [isScrolled, setIsScrolled] = useState<boolean>(false);

  let [isUserActive, setIsUserActive] = useState<boolean>(false)
  let userDropdownRef = useRef<HTMLDivElement>(null);


  let [isSearchActive, setIsSearchActive] = useState<boolean>(false)
  let SearchRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
          setIsUserActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        SearchRef.current && !SearchRef.current.contains(event.target as Node)) {
          setIsSearchActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let nav = useRef<HTMLElement | null>(null)
  let navU = useRef<HTMLElement | null>(null)
  let [navHeight, setNavHeight] = useState<number>(0)
  let [windowWidth, setWindowWidth] = useState<number>(0) 

  useEffect(()=>{
   function handleScroll(){
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

  },[])


  useEffect(() => {
    let handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    let updateWidth = () => {
      if (nav.current) {
        setNavHeight(nav.current.getBoundingClientRect().height)


      }

      if (window.innerWidth > 767) {
        setisMenuActive(false)

      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);


    let updateWidthU = () => {
      if (navU.current) {
        setNavHeight(navU.current.getBoundingClientRect().height)


      }

      if (window.innerWidth > 767) {
        setisMenuActive(false)

      }
    };
    updateWidthU();
    window.addEventListener("resize", updateWidthU);


   
  }, []
  );



  let [topValue, setTopValue] = useState("0px");
  let [xValue, setXValue] = useState("0px");



  return (
    <>
      <nav ref={nav} style={{transition:'1s'}} className={`flex justify-between  md:justify-around  items-center max-w-screen overflow-hiden relative px-10 py-5  md:px-0 lg:px-40  text-white ${isScrolled ? `bg-[#121212]` : `md:bg-transparent bg-[#121212]`} ${isLogged ? 'hidden':''} `}>
        <Link href="/" className='flex   sm:w-1/6 md:w-2/12  lg:w-1/6  w-3/6 items-center justify-start '>
          <Image src={logo} alt="Logo" width={65} height={100} />

        </Link>

        <div className='hidden md:flex md:static items-center justify-around text-[#D2AC71]  md:w-7/12 '>

          <div className="search bg-[#44444440] py-2 px-3 rounded-[20px]">
            <i className="fa-solid fa-magnifying-glass text-[#D2AC71]"></i>

          </div>
          <Link href=""><h3 className='text-[18px] p-2 '>GOE</h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Book</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Explore</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Tales</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Treasure</span></h3></Link>


        </div>

        <div className='text-white hidden md:flex items-center  w-1/12' >
          <i className="mr-2 fa-solid fa-globe"></i>
          <p>EN</p>
        </div>
        <div className='text-white text-[18px] hidden md:flex items-center justify-around md:w-4/12  xl:w-2/12' >
          <button onClick={()=>{setIsLogged(true)}} className='bg-[#D2AC71] py-1 px-4  rounded-[12px] '>Login</button>
          <button className='bg-[#D2AC71] py-1 px-4  rounded-[12px]'>Sign up</button>
        </div>


        <div className={`right w-1/12    md:hidden`}>
          <div className='md:hidden text-[#D2AC71]' onClick={() => setisMenuActive(!isMenuActive)}><i className={`fa-solid  text-xl sm:text-3xl ${isMenuActive ? `fa-x` : `fa-bars`}`}></i></div>


        </div>

        <div style={{ transition: '1s', transform: `translateX(-100%)`, top: `${navHeight}px`, }} className={`transition-transform md:hidden absolute z-10 w-full min-h-screen  bg-[#121212] text-white  left-0  transform px-10 py-3  ${!isMenuActive ? `overflow-hidden  left-500 ` : ` left-full   `}`} >
        <div className='text-white  p-2 flex items-center  w-1/12' >
          <i className= "text-[24px] mr-2 fa-solid fa-globe"></i>
          <p className='text-[32px]'>EN</p>
        </div>
          <div className={`flex flex-col md:hidden text-white  z-[10] `}>
            <Link href="">
              <h3 onClick={()=>{setIsLogged(true)}} className='p-2 text-[32px] '>Login</h3>
            
            </Link>
            <Link href="">
              <h3 className='text-[32px] p-2 '>Sign up</h3>
            
            </Link>


          </div>

          <div className="absolute left-0 right-0 bottom-20 text-center flex  justify-center py-5 ">
          <Image src={logo2} alt="Logo" width={0} height={100} className="text-center w-5/12" />


          </div>
          
          
        </div>

      </nav>



      
      <nav ref={navU} style={{transition:'1s'}} className={`flex justify-between  md:justify-around items-center max-w-screen overflow-hiden relative px-10 py-5  md:px-0 lg:px-40  text-white ${isScrolled ? `bg-[#121212]` : `md:bg-transparent bg-[#121212]`}  ${isLogged ? '':'hidden'} `}>
        <Link href="/" className='flex   sm:w-1/6 md:w-2/12  lg:w-1/6  w-3/6 items-center justify-start '>
          <Image src={logo} alt="Logo" width={65} height={100} />

        </Link>

        <div className='hidden md:flex md:static items-center justify-around text-[#D2AC71]  md:w-7/12 '>

          <div onClick={()=>{setIsSearchActive(true)}} className="search bg-[#44444440] py-2 px-3 rounded-[20px]">
            <i className="fa-solid fa-magnifying-glass text-[#D2AC71]"></i>

          </div>
          <Link href=""><h3 className='text-[18px] p-2 '>GOE</h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Book</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Explore</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Tales</span></h3></Link>
          <Link href="about"><h3 className='text-[18px] p-2 '>Egy<span className='text-white'>Treasure</span></h3></Link>


        </div>

        <div className='text-white hidden md:flex items-center  w-1/12' >
          <i className="mr-2 fa-solid fa-globe"></i>
          <p>EN</p>
        </div>
        <h3 className='hidden md:flex'>|</h3>
        <div className='text-white text-[18px] hidden md:flex items-center justify-around md:w-4/12  xl:w-1/12' >
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        </div>
       <div onClick={()=>{setIsUserActive(!isUserActive)}} className="hidden md:flex border rounded-full w-8 h-8  items-end justify-center text-2xl overflow-hidden">
          <i className="fa-solid fa-user border-black "></i>
       </div>
       
    
          <div ref={userDropdownRef} style={{ transition: '1s',  top:`${isUserActive ? `${navHeight}px`:'-400px'}` }} className={`absolute right-25  bg-[#F6EEE5] rounded-3xl py-3 px-5 text-black `}>
            <h3 className="mb-3 text-[#D2AC71]">My profile</h3>
            <h3 className="mb-3 ">Saved bundles</h3>
            <h3 className="mb-3 ">Invite friends</h3>
            <h3 className="mb-3 ">Settings</h3>
            <h3 onClick={() => setIsLogged(!isLogged)} className="mb-3 text-[#FF3B30] cursor-pointer">Log out</h3>          
          </div>       


        <div className={`right w-1/12    md:hidden`}>
          <div className='md:hidden text-[#D2AC71]' onClick={() => setisMenuActive(!isMenuActive)}><i className={`fa-solid  text-xl sm:text-3xl ${isMenuActive ? `fa-x` : `fa-bars`}`}></i></div>


        </div>

        <div style={{ transition: '1s', transform: `translateX(-100%)`, top: `${navHeight}px`, }} className={`transition-transform md:hidden absolute z-10 w-full min-h-screen  bg-[#121212] text-white  left-0  transform px-10 py-3  ${!isMenuActive ? `overflow-hidden  left-500 ` : ` left-full   `}`} >
      
        <div className='text-white  p-2 flex items-center  w-1/12' >
          <i className= "text-[24px] mr-2 fa-regular fa-heart"></i>
          <p className='text-[32px]'>Wishlish</p>
        </div>
        <div className='text-white  p-2 flex items-center  w-1/12' >
          <i className= "text-[24px] mr-2 fa-solid fa-cart-shopping"></i>
          <p className='text-[32px]'>Cart</p>
        </div>
      
        <div className='text-white  p-2 flex items-center  w-1/12' >
          <i className= "text-[24px] mr-2 fa-solid fa-globe"></i>
          <p className='text-[32px]'>EN</p>
        </div>
        
          <div className={`flex flex-col md:hidden text-white text-[28px] mt-3 `}>
          <h3 className="mb-3 text-[#D2AC71] font-[500]">My profile</h3>
            <h3 className="mb-3 ">Saved bundles</h3>
            <h3 className="mb-3 ">Invite friends</h3>
            <h3 className="mb-3 ">Settings</h3>
            <h3 onClick={() => setIsLogged(!isLogged)} className="mb-3 text-[#FF3B30] cursor-pointer">Log out</h3>    


          </div>

          <div className="absolute left-0 right-0 bottom-20 text-center flex py-5  justify-center  ">
          <Image src={logo2} alt="Logo" width={0} height={100} className="text-center w-5/12" />


          </div>
          
          
        </div>

      </nav>

      <div style={{transition:`1s`}} className={`search  absolute min-h-screen   left-0 right-0  z-[77777] flex justify-center py-10 items-start ${isSearchActive ? `top-0 bottom-0`:`-top-[1000px] bottom-[500px]`}`}>

        <div ref={SearchRef} >

          <div className="relative">
            <label htmlFor='search' className=" relative">
            <i className="fa-solid fa-magnifying-glass absolute top-1 left-5 text-[#D2AC71]"></i>
               <input type='text' placeholder="Search" id="search"  className="search2 border-0 bg-[#444444] py-3 px-15 rounded-3xl"/>
            </label>


            <div className="absolute border-0 bg-[#444444]  rounded-3xl py-3 px-7 w-full top-15">
              <p className="text-[#D2AC71BF]">
                Most Popular
              </p>
              <div className="flex items-center">
                <div className="w-13 h-13 m-2 ml-0 flex items-center justify-center text-2xl rounded-2xl bg-white ">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="flex flex-col">
                  <h3 className='text-white text-[15px]'> Cairo </h3>
                  <p className="text-[10px] text-[#F6EEE580]">
                    City in Egypt
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-13 h-13 m-2 ml-0 flex items-center justify-center text-2xl rounded-2xl bg-white ">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="flex flex-col">
                  <h3 className='text-white text-[15px]'> Alexandria </h3>
                  <p className="text-[10px] text-[#F6EEE580]">
                    City in Egypt
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-13 h-13 m-2 ml-0 flex items-center justify-center text-2xl rounded-2xl bg-white ">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="flex flex-col">
                  <h3 className='text-white text-[15px]'> Hurghada </h3>
                  <p className="text-[10px] text-[#F6EEE580]">
                    City in Egypt
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center border-t-1 p-2 font-[500] mt-4 text-white">
                <p className="text-[10px]">
                  see all results for "search"
                </p>


                <i className="fa-solid fa-arrow-right text-[15px]"></i>
              </div>

            </div>
            
          </div>

          


        </div>




      </div>
    </>
  )
}
