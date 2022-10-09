import React from 'react'
import {MdEmail} from 'react-icons/md'
import {HiLocationMarker} from 'react-icons/hi'
import {MdCall} from 'react-icons/md'
import map from '../images/map.png'


const contact = () => {
  return (
    <div>
        <h2 className='py-16 text-center text-3xl'>Contact Us</h2>
        <div className='grid md:grid-cols-3 sm:rid-cols-2  sm:text-xs md:text-base'>
            <div  className='shadow-2xl p-8 mb-10 mx-6 text-center rounded-lg'>
            <div  className='text-3xl flex justify-center'><MdEmail/></div>
                <h2>Email</h2>
                <p>info@finerts.com.pk</p>
            </div>
            <div className='shadow p-8 mb-10 mx-3 text-center rounded-lg'>
            <div className='text-3xl  flex justify-center'><HiLocationMarker/></div>
                
                <h2  className='px-8'>Location</h2>
                <p>FinErts Edifice, 236 Badar Block Allama Iqbal Town، 7-Km Multan Road،  Lahore </p>
            </div>
            <div className='shadow p-8 mb-10 mx-6 text-center rounded-lg'>
                <div className='text-3xl  flex justify-center'><MdCall/></div>
                <h2>Call now</h2>
                <p>(042) 37840562 </p>
            </div>
            
        </div>
        <div
       
        style={{
          maxHeight: "100vh",
          width:"auto",
          
        }}
        className="mb-16"
        
      >
        <h4 className='text-center text-3xl my-6  font-Cinzel'>Or You can visit us</h4>
          <div className="grid grid-cols-2 items-center">
              <div>
        <div className="contact  sm:text-xs md:text-base">
          <div className="location font-Ubuntu ">
            <h4>Address</h4>
            <p>FinErts Edifice, 236 Badar Block Allama Iqbal Town، 7-Km Multan Road،  Lahore</p>
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
      </div>
    </div>
  )
}

export default contact