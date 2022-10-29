
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import './App.css';
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes> 

      <Route path = "/" element ={<Home/>}/>
      <Route path = "/about" element ={<About/>}/>
      <Route path = "/service" element ={<Service/>}/>
      <Route path = "*" element ={<NotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
