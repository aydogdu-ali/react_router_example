import React from 'react'
import {data} from "../assets/data"
import "../components/css pages/service.css"
import Subscribe from "../components/subscribe/Subscribe"
import Contact from "../assets/img/contact.png"

const Service = () => {
  return (
<div> 
    <Subscribe/>
        <div className='Service'>

{data.map((item)=>{
  return (
    <div className='items'>  <img className='img' src={item.icon} alt="icon" />
    <p>{item.title}</p> 
    </div>
   
  )
})}


    </div>
     <div className="bilgi">
      <img  className='img1' src={Contact} alt="concat" /> 
     <p className='info'>Bilgi almak için lütfen iletişime geçiniz!</p>
      </div>
    
   
    </div>
  )
 
}

export default Service