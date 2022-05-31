import "./homepage.css";
import circlebg from "../../images/circle-bg.png";
import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Github from "../../images/github.png";
import {useNavigate} from 'react-router-dom'
const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="homepage-cont-sec">
                <div className="front-text">
                    <span>Fashion and Beauty</span> <br />
                    Amayra's Video Gallery
                    <br />
                    <span onClick={()=>navigate('/vedios')}>.....watch reels</span>
                </div>
                <div className="compass-sec">
                    <img src={circlebg} alt="c" />
                    <div className="body-social-icon">
                        <a href="https://www.linkedin.com/in/nishant-kumar-tiwari-253a46196/">
                            <img src={Linkedin} alt="linkedin" />
                        </a>
                        <a href="https://www.instagram.com/error_404_unavilable/">
                            <img src={Instagram} alt="ig" />
                        </a>
                        <a href="https://github.com/Asuraking1n/">
                            <img src={Github} alt="github" />
                        </a>
                    </div>
                </div>
                <div className="bg-img-sec">
                    <div className="bg-overlay"></div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
