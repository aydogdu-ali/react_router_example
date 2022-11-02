import React from "react";
import "./subscribe.css"

const Subscribe = () => {
  return (
    <section id="newsletter">
      <div className="container">
        <h1>Bültenimize Abone Olun</h1>
        <form className="Subscribe">
          <input type="email" placeholder="Enter Email..." />
          <button type="submit" className="button_1">
            Abone Ol
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
