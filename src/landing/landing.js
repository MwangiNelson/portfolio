import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/images/NELSON.png";
import "./landing.css";

function Landing() {

    const useMouse = () => {

        const [mousePosition, setMousePosition] = useState({ x: null, y: null })

        useEffect(() => {
            function handle(e) {
                setMousePosition({
                    x: e.pageX,
                    y: e.pageY
                })
            }

            document.addEventListener("mousemove", handle)
            return () => document.removeEventListener("mousemove", handle)
        });

        return mousePosition;
    }

    const { x, y } = useMouse();





    return (
        <>

        <div className="line">
            <span className="scroll-location"></span>
        </div>

            <nav className="w-100 nav-a m-0 lr jsb aic">
                <div className="logo-div lr jcc aic">
                    <img src={logo} alt="" />
                    <span className="block"></span>
                    <h2>MWANGI NELSON</h2>
                </div>
                <div className="menu">
                    <span className="white-nav"></span>
                    <span className="white-nav"></span>
                    <span className="white-nav"></span>
                </div>
            </nav>

            <div className="main w-100 jcc aic ud bg-transp g-2">

                <div className="lr aic jcc g-2 bg-transp">
                    <h1 className="intro">I am</h1>
                    <div className="name ud jcc aic">
                        <div className="cursor" style={{ left: `${x}px`, top: `${y}px` }}></div>
                        <div className="cursor-2" style={{ left: `${x}px`, top: `${y}px` }}></div>
                        <h1 className="goat-name">NELSON</h1>
                        <span className="white-hover"></span>
                    </div>
                </div>
                <div className="hero-desc w-50 c-grey bg-transp tac">
                    <h4>
                        I am a software engineer specializing in web development. I also do lots of other stuff like eating.Designing beautiful web sites and creating solutions is art, I just can't help but <b className="red">love it</b>.
                    </h4>
                </div>
                <div className="btn-holder g-1 aic tac jcc lr  ">
                    <button className="hero-btn"><span className="btn-span"></span> <h4 className="m-0">CONTACT NELSON</h4></button>
                    <button className="hero-btn"><span className="btn-span"></span><h4 className="m-0">GET NELSON'S CV</h4></button>
                </div>
            </div>
        </>
    );
}

export default Landing;
