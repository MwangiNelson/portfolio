import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/images/NELSON.png";
import "./landing.css";

function Landing() {
  return (
    <>
      <nav className="w-100 nav-a m-0">
        <div className="logo-div lr jcc aic">
          <img src={logo} alt="" />
          <h2>MWANGI NELSON</h2>
        </div>
      </nav>
      <div className="parallax-bg w-100"></div>
      <div className="main w-100 jcc aic ud">
        <div className="lr aic jcc g-1">
          <h1 className="intro">I am</h1> 
          <div className="name ud jcc aic">
            <h1 className="goat-name">NELSON</h1>
            <span className="white-hover"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
