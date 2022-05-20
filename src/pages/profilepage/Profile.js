import React from 'react'
import Weather from '../../components/weather/Weather'
import profile from '../../images/profile-img.png'
import { useNavigate } from 'react-router-dom'
import './profile.css'
const Profile = () => {
    const name = localStorage.getItem('name')
    const navigate = useNavigate()
  return (
    <>
        <div className="profile-cont">
            <div className="profile-img">
                <img src={profile} alt="profile" />
            </div>
            <div className="profile-data-sec">
            <div className="welcome">Hii, {name} <span>Amayra</span>, Welcomes You</div>
            
            <div className="profile-btn">
            <button onClick={()=>navigate('/vedios')}>Visit Our Gallery</button>
            </div>
            <Weather/>
            </div>
        </div>
    </>
  )
}

export default Profile