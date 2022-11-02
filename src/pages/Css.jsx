import React from 'react'
import "../components/css pages/css.css"
import CSS from "../assets/img/logo_css.png"
import {useNavigate} from "react-router-dom"

const Css = () => {
  const navigate = useNavigate()
  return (
    <div className='Card_Css'>

<div classname= "Css_İnfo"></div>
    <img src={CSS} alt=""  />
          <h3>HTML</h3>

<p>Cascading Style Sheets (Basamaklı Stil Şablonları ya da Basamaklı Biçim Sayfaları, bilinen kısa adıyla CSS), HTML'e ek olarak metin ve format biçimlendirme alanında fazladan olanaklar sunan bir işaretleme dilidir. </p>

<p>İnternet sayfaları için genelgeçer şablonlar hazırlama olanağı verdiği gibi, bağımsız olarak harflerin stilini, yani renk, yazı tipi, büyüklük gibi özelliklerini değiştirmek için de kullanılabilir. Bu tekniğin en önemli özelliği kullanımındaki esnekliktir.

Bir Web sayfası içerisinde birbiriyle uyumlu birkaç renk ve birkaç yazı tip kullanılır ve bunları her sayfada ayrı ayrı tekrar belirtmek yerine CSS yardımıyla bir sefer tanımlayıp bütün Web sayfalarında ortak olarak kullanılabilir. Böylece sayfaların hafızadaki boyutu epey küçüldüğü gibi güncelleme yapmak da kolaylaşır. </p>

<p> CSS kodları, HTML kodlarının içine yazılabildiği gibi harici bir CSS dosyası oluşturularak da işlem yaptırılabilir. Türüne göre BODY veya HEAD bölümlerinde yer alabilirler. Ayrıca <link rel="stylesheet" type="text/css" href="style.css" /> koduyla CSS dosyası çalışma sayfasına eklenebilir. Onları ayrı dosyada veya dosyalarda saklamak, onları değişik HTML sayfalarınca kullanılmasını sağlar, aynı sayfanın değişik aygıtlara göre formatlandırılmasını kolaylaştırır, sunumla yapıyı ayırarak değişiklik yapılmasını sağlar.</p>


<button onClick = {()=> navigate(-1)}className="Css_Button"> Geri Dön</button>

    </div>
  )
}

export default Css