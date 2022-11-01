import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Moonborn Web Design, Copyright &copy; 2022</p>
        <br />
        <Link to="https://github.com/aydogdu-ali" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/640-crescent-moon.svg/2048px-640-crescent-moon.svg.png"
            width="400"
            height="50"
            alt=""
          />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
