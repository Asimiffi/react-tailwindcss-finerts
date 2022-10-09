import React from 'react'
import mission from  '../images/mission.jpg'
import vision from  '../images/vision.jpg'
import approach from  '../images/approach.jpg'


const aboutus = () => {
  return (
    <div className='md:m-16 sm:m-2'>
     <h2 className='font-Cinzel text-center text-3xl my-10'>About Us</h2>
     <div className="grid grid-cols-2 md:gap-12 sm:gap-0">
      <div className='font-Ubuntu'>
      <h2>
        Our Mission
      </h2>
      <p>Our mission is to assist enterprises to expedite the adoption of the latest 
        technologies, unravel the complex crises, embrace digital evolution, and orchestrate
         enduring tech novelty. With our transmuting enterprise-grade solutions, we aim to
          lead the digital 
        revolution process from ideation to visualization and delivery through a robust 
        framework.</p>
      </div>
      
      <div>
        <img src={mission} style={{height:'80%'}} alt="" />
      </div>
      </div> 
      <div className="grid my-12 grid-cols-2 md:gap-12 sm:gap-0">
      <div>
        <img src={vision} style={{height:'80%'}} alt="" />
      </div>
      <div className='font-Ubuntu'>
      <h2>
      Our Vision
      </h2>
      <p>Our vision is to be the most trailblazing and high-tech technological solution 
        provider unleashing the power of AI, machine learning, big data, 
        block-chain, and ERP and harness their dominion to leverage modern businesses.</p>
      </div>
      
      
      </div> 
      <div className="grid grid-cols-2 md:gap-12 sm:gap-0">
      <div className='font-Ubuntu'>
      <h2>
       Our Approach
      </h2>
      <p>
We move clients into a rewarding digital future through the power of our Digital 
Collective™. We at Finerts combine our design-led digital innovation 
process with human experience, cutting edge modular
 digital platforms and an ecosystem of best-in-class technology partners and innovators</p>
      </div>
      
      <div>
        <img src={approach} style={{height:'80%'}} alt="" />
      </div>
      </div> 
    </div>
  )
}

export default aboutus