import React from 'react'
import {data} from "../assets/data"
import "../components/css pages/service.css"
import Subscribe from "../components/subscribe/Subscribe"
import Contact from "../assets/img/contact.png"
import {useNavigate,Outlet} from "react-router-dom"


const Service = () => {
  // tıklandığında hangi sayfaya gideceğini belirttim. 
  const navigate = useNavigate()
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
      <img  onClick={()=>navigate("/contact")} className='img1' src={Contact} alt="concat" /> 
     <p className='info'>Bilgi almak için lütfen iletişime geçiniz!</p>
      </div>
    
   <Outlet/>
    </div>
  )
 
}

export default Service