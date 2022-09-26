import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/images/NELSON.png";
import "./landing.css";

function Landing() {
    const [offSetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })






    return (
        <>
            <div className="line">
                <span className="scroll-location" style={{ top: `${offSetY * 0.1}%` }}></span>
            </div>

            <nav className="w-100 nav-a m-0 lr jsb aic">
                <div className="logo-div lr jcc aic">
                    <img src={logo} alt="" />
                    <h2>MWANGI NELSON</h2>

                </div>
                <div className="menu">
                    <span className="white-nav"></span>
                    <span className="white-nav"></span>
                    <span className="white-nav"></span>
                </div>
            </nav>
            <div className="body w-100 h-fill">
                <div className="main w-100 jcc aic ud bg-transp g-2" style={{ transform: `translateY(${offSetY * 0.3}px)` }}>
                    <div className="ud aic jcc g-2 bg-transp">
                        <h1 className="intro">C'EST</h1>
                        <div className="name ud jcc aic">
                            <h1 className="goat-name">NELSON</h1>
                            <span className="white-hover"></span>
                        </div>
                    </div>
                    <div className="hero-desc w-50 c-grey bg-transp tac">
                        <h4>
                            I am a software engineer specializing in web development. I also do lots of other stuff like eating.Designing beautiful web sites and creating solutions is art, I just can't help but <b className="red">love it</b>.
                        </h4>
                    </div>
                    {/* <h3>{offSetY}</h3> */}
                    <div className="btn-holder g-1 aic tac jcc lr  ">
                        <button className="hero-btn"><span className="btn-span"></span> <h4 className="m-0">CONTACT NELSON</h4></button>
                        <button className="hero-btn"><span className="btn-span"></span><h4 className="m-0">GET NELSON'S CV</h4></button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Landing;
