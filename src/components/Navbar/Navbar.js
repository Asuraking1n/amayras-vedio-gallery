import React, { useState } from "react";
import "./navbar.css";
import Menu from "../../images/hamburger-black.png";
import { Link,useNavigate } from "react-router-dom";
import arrow from "../../images/arrow-up.png";
const Navbar = () => {
  const navigate = useNavigate()
  const [isSidebar, setIsSidebar] = useState();
  let token = localStorage.getItem("token");
  const LogUserOut=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
      <div className="navbar-sec">
        <a href="#" className="nav-logo">
          Amayra
        </a>
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
            onClick={() => setIsSidebar("")}
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
            
              <span onClick={LogUserOut}>Logout</span>
            
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
