import React,{useState} from 'react'
import './navbar.css'
import Menu from '../../images/hamburger-black.png'
import {Link} from  'react-router-dom'
import arrow from '../../images/arrow-up.png'
const Navbar = () => {
  const [isSidebar,setIsSidebar] = useState()
  return (
    <>
        <div className="navbar-sec">
            <a href="#" className='nav-logo'>Amayra</a>
            <img src={Menu} alt="menu" className='hamburger' onClick={()=>setIsSidebar('nav-routes-active')}/>
            <div className={`nav-routes ${isSidebar}`} >
                <img src={arrow} alt="arrow" className='up-arrow' onClick={()=>setIsSidebar('')}/>
                <Link to='/' className='navLink'><span>Home</span></Link>
                <Link to='/vedios' className='navLink'><span>Gallery</span></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar