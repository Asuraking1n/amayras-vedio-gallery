import React from "react";
import "./homepage.css";
import circlebg from "../../images/circle-bg.png";
import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Github from "../../images/github.png";
const HomePage = () => {
    return (
        <>
            <div className="homepage-cont-sec">
                <div className="front-text">
                    <span>Fashion and Beauty</span> <br />
                    Only Amayra's Gallery
                    <br />
                    <span>.....watch reels</span>
                </div>
                <div className="compass-sec">
                    <img src={circlebg} alt="" />
                    <div className="body-social-icon">
                        <a href="#">
                            <img src={Linkedin} alt="linkedin" />
                        </a>
                        <a href="#">
                            <img src={Instagram} alt="ig" />
                        </a>
                        <a href="#">
                            <img src={Github} alt="github" />
                        </a>
                    </div>
                </div>
                <div className="bg-img-sec"></div>
            </div>
        </>
    );
};

export default HomePage;
