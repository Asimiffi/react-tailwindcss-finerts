import React,{useState,useRef} from 'react'
import "../style.css"
import cover from "../images/cover.webp"
import {SiBlockchaindotcom} from 'react-icons/si'
import data from '../components/data'
import map from '../images/map.png'
import '../App.css'
import { Link } from 'react-router-dom';




const Home = () => {

  const contact = useRef(null);
  const scrolltosection = (contact) =>{
window.scrollTo({
  top:contact.current.offsetTop,
  behavior:'smooth'
})
console.log(contact);
  }
 
  return (
    <div className='overflow-hidden'>
      {/* -------------------------------hero section-------------------------------- */}
        <section id='hero' className='w-full h-screen relative flex items-center  font-Cinzel'>
        <div className='grid grid-cols-2'>
          <div>
            <h2  className='text-white md:text-3xl  sm:text-base'>We at Finerts,
            provide one stop solution to enterprises for all of their IT needs.
            </h2>
             <br />
          <button onClick={()=>scrolltosection(contact)} className='border rounded-3xl mt-8 p-2 bg-amber-300 text-black'>Location</button>
          </div>
          
          </div>
        </section>
{/* -------------------------------Expertise section-------------------------------- */}
    <section id="expertise" className='my-16'>
<div><h1 className='text-center text-3xl font-Cinzel'>Expertise</h1></div>
    
    <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2 gap-2 text-center">
      
      {data.slice(1,7).map((card)=>(
        <div className="mt-6 shadow-2xl py-4 mx-4 hover:bg-amber-300 px-2">
          <img src={card.img} alt="" className='h-48 mx-auto py-2' />
          <h2 className=' hover:text-blue-600 font-Cinzel'>{card.title}</h2>
          <p className='font-Ubuntu hover:text-blue-600 text-gray-400   sm:text-xs md:text-base'>{card.desc}</p>
        
        </div>
      ))}
  </div>
       </section>
{/* -------------------------------Problems-------------------------------- */}
<section id="problems">
        <div className='h-auto bg-black py-16 px-8'>
        <div className="grid lg:grid-cols-3 gap-7">
          <div className='flex items-center'>
          <h3 className='text-white font-Cinzel text-3xl'>{data[7].title}</h3>
          </div>
          <p className='text- font-Ubuntu text-gray-400 col-span-2  sm:text-xs md:text-base'>{data[7].desc}</p>
          <div>
          </div>    
      
          </div>
        </div>
</section>
{/* -------------------------------Solutions-------------------------------- */}
<section id="solutions">
        <div className='h-auto bg-white font-Cinzel py-16 px-8'>
        <div className="solutions grid lg:grid-cols-3">
          <div className='flex items-center'>
          <h3 className='text-black text-3xl'>{data[8].title}</h3>
          </div>
          <div className='font-Ubuntu col-span-2   sm:text-xs md:text-base'>
          <p className='text-gray-400'>{data[8].desc1}</p>
          <p className='text-gray-400'>{data[8].desc2}</p>
          <p className='text-gray-400'>{data[8].desc3}</p>
          </div>    
      
          </div>
        </div>
</section>
{/* -------------------------------How we do it-------------------------------- */}

<section id="Howwedoit">
        <div className='h-auto bg-black py-16 px-8 text-white'>
        <h1 className='text-white text-center py-6 text-3xl font-Cinzel'>How we do it</h1>
        
          <div className='md:flex md:items-center'>
          {data[9].subsection.map((deploy)=>(
            <div className='font-Ruboto lg:grid-cols-5 gap-4'>
              <div className='text-amber-300 my-4 flex justify-center text-6xl'>{deploy.icon}</div>
              <h2 className='text-center font-Cinzel'>{deploy.heading}</h2>
             <p className='text-xs font-ubunt'>{deploy.desc}</p> </div>
          ))}
          </div>
             
          
        </div>
</section>
{/* -------------------------------contact------------------------------- */}
<section
        id="contact"
        style={{
          maxHeight: "100vh",
          width:"auto",
          
        }}
        ref={contact}
        className="mx-5 py-5 my-16"
      >
        <h1 className='text-center text-3xl my-6  font-Cinzel'>Location</h1>
          <div className="grid grid-cols-2 items-center">
              <div className='  sm:text-xs md:text-base'>
        <div className="contact">
          <div className="location font-Ubuntu ">
            <h4>Address</h4>
            <p>FinErts Edifice, 236 Badar Block Allama Iqbal Town، 7-Km Multan Road, Lahore</p>
          </div>
          <div className="hours  font-Ubuntu">
            <h4>Hours</h4>
            <p>Monday through Saturday, 9 to 5PM</p>
          </div>
          <div className="email  font-Ubuntu">
            <h4>Email</h4>
            <p>info@finerts.com.pk</p>
            <h4>Phone</h4>
            <p>(042) 37840562</p>
          </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6">
            <img className="map-image" src={map} alt="" />
        </div>
        </div>
      </section>

      
    </div>
  )
}

export default Home