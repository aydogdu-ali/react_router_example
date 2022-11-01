import React from "react";
import {Link,} from "react-router-dom"
import "../../App.css";
import "./navbar.css"

const Navbar = () => {
  return (
    <header>
      <div className="container Header_Nav">
        <div id="branding">
        <Link to="https://github.com/aydogdu-ali" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/640-crescent-moon.svg/2048px-640-crescent-moon.svg.png"
            width="80"
           
            alt=""
          />
        </Link>

          <h1 className="navbar_h1">
            
            <span className="highlight">Hızlı ve Etkili </span>   Web Uygulamaları          </h1>
            
        </div>
        <nav className="Navbar_Nav ">
          <ul>
            <li>
              <Link to ="/" >AnaSayfa</Link>
            </li>
            <li>
              <Link to ="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to ="/service">Hizmetlerimiz</Link>
            </li>
          </ul>
        </nav>
     
      </div>
    
    </header>
  );
};

export default Navbar;
