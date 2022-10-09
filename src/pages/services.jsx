import React from 'react'
import services1 from '../images/services-1.jpg'
import '../App.css'

const services = () => {
  return (
    <div className='my-16'>
        <div className="grid grid-cols-3">
            <div className='mx-6 col-span-2 font-Cinzel'><h3>What Finerts do</h3>
            <p className='font-Ubuntu   sm:text-xs md:text-base'>Till date we have 
            successfully served our clients with diverse services, 
                we are known for one of the finest and dynamic environments.
At Finerts, we are served with all IT services, you may call it one-stop solution.
 Finerts Services includes web development, software and mobile app development, 
 supply chain system design (ERP) and modern block-chain development.</p></div>
<div className='mx-6'><img src={services1} alt="" /></div>
        </div>
        <h2 className='text-3xl text-center font-Cinzel my-6'>Services</h2>
        <div className='my-6' style={{backgroundImage:'url(images/services2.jpg)', height:'120vh', backgroundSize:'cover'}}>
        <div className='bg-black bg-opacity-70 lg:p-16 md:p-16 sm:p-3' style={{height:'120vh'}}>
            <div className="grid grid-cols-2 font-Cinzel text-white">
                <div className='p-5'>
                <h3 className=' font-extrabold'>Software Development</h3>
                <p className='font-Ubuntu  sm:text-xs md:text-base'>Our master makes customize 
                software’s, all features and previews are added with regard
                     to what you want. We are known for
                     remarkable services in this category, serving every kind of industry with
                      customization.</p>
                </div>
                <div>
                <h3 className=' font-extrabold'>Web Development</h3>
                <p className='font-Ubuntu  sm:text-xs md:text-base'>We've achieved milestones 
                in best web development services. 
                    Finerts expert developers use all updated tools to serve clients with exactly
                     demanded services. Our diverse portfolio clearly highlights what we've known
                      for.</p>
                </div>
                <div>
                <h3 className=' font-extrabold'>Mobile APP Development</h3>
                <p className='font-Ubuntu  sm:text-xs md:text-base'>There is no field 
                which we are not hitting with help of our diligent developers team, 
                    we make attractive and most convenient mobile applications. 
                    The best service we provide to our clients is by developing their ideas
                     to reality.</p>
                </div>
                <div>
                <h3 className=' font-extrabold'>Enterprise Resource Planning</h3>
                <p className='font-Ubuntu  sm:text-xs md:text-base'>We offer custom ERP
                 software development services for businesses of all sizes and
                     industries. We develop robust and scalable business ERP systems 
                    that offer key data insights across multiple platforms - web, mobile,
                     and on-premise.</p>
                </div>
                <div>
                
                <p><div>
                <h3 className=' font-extrabold'>Block-chain development</h3>
                <p className='font-Ubuntu  sm:text-xs md:text-base'>As an experienced 
                blockchain, we help
                     organizations
                     boost efficiency, agility and security through
                      custom blockchain
                      development 
                     services.</p>
                </div></p>
                </div>

            </div>
        </div>
        </div>
       
    </div>
  )
}

export default services