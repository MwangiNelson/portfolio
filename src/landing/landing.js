import React, { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/images/NELSON.png";
import "./landing.css";
import "./landing.scss"

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
};

const BannerRowCenter = ({ title, playMarquee }) => {
    return (
        <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
            <motion.div
                initial={{ y: 310 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.2, 0.01, -0.05, 0.5], duration: 0.5 }}
                className='marquee__inner'>
                <AnimatedLetters title={title} disabled />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} disabled />
                <AnimatedLetters title={title} disabled />
            </motion.div>
        </div>
    );
};
const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
        className='row-title'
        variants={disabled ? null : banner}
        initial='initial'
        animate='animate'>
        {[...title].map((letter) => (
            <motion.span
                className='row-letter'
                variants={disabled ? null : letterAni}>
                {letter}
            </motion.span>
        ))}
    </motion.span>
);

function Landing() {
    const banner = {
        animate: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
            },
        },
    };

    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, []);

    const [offSetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <>
            <div className="line">
                <span className="scroll-location" style={{ top: `${offSetY * 0.06}%` }}></span>
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
            <div className="body ud jcc aic w-100 h-fill">
                <div className="main w-100 jcc aic ud bg-transp g-2" style={{ transform: `translateY(${offSetY * -0.5}px)` }}>
                    <div className="ud aic jcc g-2 bg-transp">
                        <div className="name lr jcc aic">
                            {/* <h1 className="goat-name">NELSON</h1>
                            <span className="white-hover"></span> */}
                            <motion.div className="banner" variants={banner}><BannerRowCenter title={"NELSON"} playMarquee={playMarquee} /></motion.div>
                        </div>
                    </div>
                </div>
                <div className="overlay">
                    <div className="ud aic jcc w-100" style={{ transform: `translateY(${offSetY * -1}px)` }}>
                        <div className="hero-desc w-50 c-white bg-transp tac">
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
            </div>

        </>
    );
}

export default Landing;
