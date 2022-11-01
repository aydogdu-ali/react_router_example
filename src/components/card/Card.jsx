import React from "react";
import "./cars.css";
import HTML from "../../assets/img/logo_html.png";
import CSS from "../../assets/img/logo_css.png";
import JS from "../../assets/img/js.png";

const Card = () => {
  return (
    <div className="container_1">
     <div className=" Card"> 
               <div className="box ">
          <img src={HTML} alt="" />
          <h3>HTML</h3>
          <p>
            Hiper Metin İşaretleme Dili (İngilizce Hypertext Markup Language,-HTML) web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. 
          </p>
        </div>{" "}
                
       <div className="box">
         <img src={CSS} alt="" />
         <h3>CSS</h3>
         <p>
         Cascading Style Sheets (Basamaklı Stil Şablonları ya da Basamaklı Biçim Sayfaları, bilinen kısa adıyla CSS), HTML'e ek olarak metin ve format biçimlendirme alanında fazladan olanaklar sunan bir işaretleme dilidir.


         </p>
       </div>
       <div className="box box1">
         <img src={JS} alt="" />
         <h3>JS</h3>
         <p>
         JavaScript(JS), HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir .  Web sitelerinin %97'sinden fazlası, web sayfası hareketleri için istemci tarafında JavaScript kullanırlar.  
         </p>
      
     </div>
     </div>
    </div>
  );
};

export default Card;
