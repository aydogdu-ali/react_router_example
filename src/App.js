
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes> 

      <Route path = "/" element ={<Home/>}/>

<Route path="/html" element = {<Html/>}/>
<Route path="/css" element = {<Css/>}/>
<Route path="/Javascript" element = {<Javascript/>}/>
      <Route />
      <Route path = "/about" element ={<About/>}/>
      <Route>
      <Route path = "/service" element ={<Service/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      </Route>
      <Route path = "*" element ={<NotFound/>}/>
     
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
