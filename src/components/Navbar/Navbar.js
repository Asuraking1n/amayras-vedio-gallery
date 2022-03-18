import React from 'react'
import './navbar.css'
import Menu from '../../images/hamburger-black.png'
const Navbar = () => {
  return (
    <>
        <div className="navbar-sec">
            <a href="#" className='nav-logo'>Amayra</a>
            <div className="nav-routes">
                <span>Home</span>
                <span>Gallery</span>
                <img src={Menu} alt="menu" />
            </div>
        </div>
    </>
  )
}

export default Navbar