import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "../components/css pages/contact.css"



const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1> İletişim</h1>
      <form className='form_contact'>
        <div className= "input_Form"><label htmlFor="">Adınız :</label>
        <input type="text"/> </div>
        <div
        className= "input_Form"><label htmlFor="">Soyadınız:</label>
        <input type="text"/> </div>

        <div
        className= "input_Form"><label htmlFor="">Mail:</label>
        <input type="email"/> </div>

        <div
        className= "input_Form TextArea">
         
          <textarea className= "input_textarea" name="
          " id="mesaj" rows="5" placeholder='Mesajınızı yazınız'></textarea>
          
           </div>
        
        <button onClick = {()=> navigate("/service")}className="Contact_Button"> Geri Dön</button>
        <button className="Submit"> Gönder</button>
      </form>
      <Outlet/>
    </div>
  )
}

export default Contact