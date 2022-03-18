import React from 'react'
import './navbar.css'
import Menu from '../../images/hamburger-black.png'
import {Link} from  'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className="navbar-sec">
            <a href="#" className='nav-logo'>Amayra</a>
            <div className="nav-routes">
                <Link to='/' className='navLink'><span>Home</span></Link>
                <Link to='/vedios' className='navLink'><span>Gallery</span></Link>
                <img src={Menu} alt="menu" />
            </div>
        </div>
    </>
  )
}

export default Navbar