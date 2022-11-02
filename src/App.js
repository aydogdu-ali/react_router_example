
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import './App.css';
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Html from "./pages/Html"
import Css from "./pages/Css"
import Javascript from "./pages/Javascript";
import Contact from "./pages/Contact";

// React-Router yapısı ile tüm sayfaları kapsadım.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*Her sayfada gösterilecek olan Navbar ve Footeru kapsam dışına aldım*/}
      <Navbar />
      <Routes> 

      <Route path = "/" element ={<Home/>}/>
    {/*Nested roting işlemlerinde her bir sayfa için ayrı bir parth açtım.*/}
<Route path="/html" element = {<Html/>}/>
<Route path="/css" element = {<Css/>}/>
<Route path="/Javascript" element = {<Javascript/>}/>
      <Route />
      <Route path = "/about" element ={<About/>}/>
      <Route>
      <Route path = "/service" element ={<Service/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      </Route>
      {/*Kullanıcı elle ya da sayfanın hata vermesi durumunda hata mesajı verdim.*/}
      <Route path = "*" element ={<NotFound/>}/>
     
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
