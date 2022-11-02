import React from "react";
import "../../App.css";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Moonborn Web Design, Copyright &copy; 2022</p>
        <br />
        <a
          href="https://github.com/aydogdu-ali?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/640-crescent-moon.svg/2048px-640-crescent-moon.svg.png"
            width="400"
            height="50"
            alt="Moon"
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
