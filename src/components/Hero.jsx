import React from 'react'
import "../style.css"
import cover from "../images/cover.webp"

const Hero = () => {
  return (
    <div className='w-full'>
        <img src={cover} className="object-cover" alt="" />
    
    </div>
  )
}

export default Hero