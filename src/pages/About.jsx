import React from 'react'
import Subscribe from "../components/subscribe/Subscribe"
import "../components/css pages/about.css"
import Team from "../assets/img/team.jpg"
const About = () => {
  return (
    <div>
<Subscribe/>


<div className="About_Us">
  
  
  <div ClassName="About_Who">
      
      
        <h1>Biz Kimiz?</h1>
      <h3>
      İş yönetim yazılımları geliştirme hizmetlerimiz ile sizin ihtiyaçlarınıza  özel yazılımlar oluşturuyoruz. 
      </h3>
      
      <p className='paragraf'>
      Kurumsal  ya da bireysel ihtiyaçlarınıza yönelik web yazılım projeleri geliştiriyoruz. Hayalinizdeki projeleri dijital dünyaya taşıyacak yazılım ve kodlama çalışmalarını hayata geçiriyoruz.  
      
     
      </p>
      <img src={Team} alt="pictureTeam" />
      </div>
      
      <div className="About_Work">
         <h4>Nasıl Çalışıyoruz?</h4>
       <ul>
        <li> Başvurunuz ve Tanışma</li>
        <li>İhtiyaçlarınızın Tespiti</li>
        <li>Analiz </li>
        <li>Tasarım</li>
        <li>Tasarımın Uygulanması</li>
        <li>Test ve Otomasyon</li>
        <li>Teslim ve Teknik Destek</li>
       </ul> 
       </div>
        
          
        
      
    
      
      
      
      </div> 
 </div>
      




   
   
  )
}

export default About