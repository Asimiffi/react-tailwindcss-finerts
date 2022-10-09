import React, {useState} from 'react'
import slides from './slidesdata'
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineBars} from "react-icons/ai"

const Slide = () => {
    const [count, setcount] = useState(0)


 const plus =(index)=>{setcount(count+1)
 if(index!=slides.length-1)
  setcount(index+1)
  else
  setcount(0)
}
const minus = (index) =>{
  
  if(index==0)
  setcount(slides.length-1)
  else
  setcount(index-1)
 }
 
  return (
    <div> <div>
    {slides.slice(0,5).map((cover,index)=>( 
    <div className='relative'>
      { count==index && (<div>
      <AiOutlineClose onClick={()=>minus(index)} style={{zIndex:'10'}} className="absolute left-10 top-20 bg-red-100"/>
      <img src={cover.img}></img>
<AiOutlineBars  onClick={()=>plus(index)}  className="absolute top-40 right-10 bg-red-100"/>
</div>)
    }
</div>))}
  </div></div>
  )
}

export default Slide