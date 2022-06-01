import { useState } from "react";
import "./navbar.css";
import Menu from "../../images/hamburger-black.png";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../images/arrow-up.png";
import { usePremiumData } from "../../context/premium-context";
import PaymentModal from "../payment/PaymentModal";

const Navbar = () => {
  const navigate = useNavigate()
  const { PremiumData } = usePremiumData()
  const [isSidebar, setIsSidebar] = useState("");
  const [isPayment, setIsPayment] = useState(false);
  let token = localStorage.getItem("token");
  let name = localStorage.getItem("name");
  const LogUserOut = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <>
      <div className="navbar-sec">
        {token ?
          (<div className="user-profile-section" onClick={() => navigate('/profile')}>
            <div className="profile-avtar">
              <img src={`${localStorage.getItem('profile')}`} alt="avatar" />
            </div>
            <a href="#" className="nav-logo">
              {name}
            </a>
            {
              PremiumData && 
              <div id="premiumID" onClick={()=>navigate('/profile')}>
              Premium User
            </div>
            }
            
          </div>) :
          <a href="#" className="nav-logo">
            Amayra
          </a>
        }

        <img
          src={Menu}
          alt="menu"
          className="hamburger"
          onClick={() => setIsSidebar("nav-routes-active")}
        />
        <div className={`nav-routes ${isSidebar}`}>
          <img
            src={arrow}
            alt="arrow"
            className="up-arrow"
            onClick={() => setIsSidebar(" ")}
          />
          
          <Link to="/" className="navLink">
            <span>Home</span>
          </Link>
          <Link to="/vedios" className="navLink">
            <span>Gallery</span>
          </Link>
          {!token ? (
            <>
              <Link to="/login" className="navLink">
                <span>Log In</span>
              </Link>
              <Link to="/signup" className="navLink">
                <span>Sign Up</span>
              </Link>
            </>
          ) : (

            <span onClick={LogUserOut} id="logmeout">Logout</span>

          )}
          {
            !PremiumData &&
            <div className="buyPremium" onClick={()=>token ? setIsPayment(true): navigate('/login')}>
              Buy Premium
            </div>
          }
          {isPayment && <PaymentModal openModal={(isPayment:boolean)=>setIsPayment(isPayment)}/>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
