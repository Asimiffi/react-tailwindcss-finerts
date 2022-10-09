import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { useState,useEffect } from 'react';
import "../App.css"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineBars} from "react-icons/ai"


const Navbar = () => {
    const [show, setshow] = useState(false)
    const showtext = ()=>{
      setshow(false)
    }
    

    return (
    <div className='overflow-hidden'>
        
        <nav className='bg-black text-white'>
        <div><img src="" alt="" />
        </div> 
        <div className={show ? 'sm:grid sm:grid-rows sm:gap-y-2 sm:py-6 sm:text-center md:flex md:h-3.5 md:space-x-6 md:py-6 md:justify-center md:items-center md:font-Cinzel font-Cinzel':'lg:visible md:visible sm:invisible flex space-x-6 py-6 justify-center items-center font-Cinzel'}> 
            <Link className=' hover:bg-amber-300' to="/">Home</Link>
            <Link  className=' hover:bg-amber-300' to="/services">Services</Link>
            
            <Link  className=' hover:bg-amber-300' to="/careers">Careers</Link>
            <Link  className=' hover:bg-amber-300' to="/aboutus">About Us</Link>
            <Link className=' hover:bg-amber-300' to="/contact-us">Contact Us</Link>
            
          
          <div className='sm:visible lg:invisible md:invisible'>  {show ? <AiOutlineClose onClick={()=>setshow(false)} className='absolute left-1/2 text-2xl transform -translate-x-1/2'/>:<AiOutlineBars onClick={()=>setshow(true)} className='absolute left-1/2 text-3xl transform -translate-x-1/2'/>} </div>
            </div>
        </nav>
        {/* grid grid-rows h-screen w-full bg-red-100 py-6 text-center */}
        </div>
  )
}

export default Navbar