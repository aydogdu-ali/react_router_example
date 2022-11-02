import React from 'react'
import HTML from "../assets/img/logo_html.png"
import "../components/css pages/html.css"
import {useNavigate} from "react-router-dom"

const Html = () => {
  const navigate = useNavigate()
  return (
    <div className='Card_Html'>

<div classname= "Html_İnfo"></div>
    <img src={HTML} alt=""  />
          <h3>HTML</h3>

<p>Hiper Metin İşaretleme Dili (İngilizce Hypertext Markup Language, ks. HTML) web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. Dilin son sürümü HTML5'tir. </p>

<p>HTML, bir programlama dili olarak tanımlanamaz. Zira HTML kodlarıyla kendi başına çalışan bir program yazılamaz. Ancak bu dili yorumlayabilen programlar aracılığıyla çalışabilen programlar yazılabilir. Programlama dili denilememesinin nedeni tam olarak budur. Temel gereği yazı, görüntü, video gibi değişik verileri ve bunları içeren sayfaları birbirine basitçe bağlamak, buna ek olarak söz konusu sayfaların web tarayıcısı yazılımları tarafından düzgün olarak görüntülenmesi için gerekli kuralları belirlemektir. HTML kodunu web tarayıcıları okur, yorumlar ve görsel hale dönüştürürler, dolayısıyla aynı HTML kodunun farklı tarayıcılarda farklı sonuç vermesi olasıdır. CSS ve JavaScript ile beraber kullanıldığında HTML vasıtasıyla görsel ve dinamik web siteleri yaratılabilir. </p>

<p> Küçüktür ve büyüktür işaretleri arasına yazılan HTML komutları kullanılarak yazılır. İşaretlenen metnin başını ve sonunu belirtmek için çoğunlukla çift olarak kullanılırlar  ancak işaretlemek yerine metnin bir yerine bir işaret konacaksa tek olarak da kullanılabilirler.</p>


<button onClick = {()=> navigate(-1)}className="Html_Button"> Geri Dön</button>

    </div>
  )
}

export default Html