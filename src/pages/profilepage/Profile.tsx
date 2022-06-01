import { useState } from 'react'
import Weather from '../../components/weather/Weather'
import profile from '../../images/profile-img.png'
import profile2 from '../../images/profile2.png'
import profile3 from '../../images/profile3.png'
import profile4 from '../../images/profile4.png'
import { useNavigate } from 'react-router-dom'
import './profile.css'
import { usePremiumData } from '../../context/premium-context'

const Profile = () => {
  const [profileImg, setProfileImg] = useState(`${localStorage.getItem('profile')}` || profile)
  const { PremiumData } = usePremiumData()
  const name = localStorage.getItem('name')
  const navigate = useNavigate()
  return (
    <>
      <div className="profile-cont">
        <div className="profile-img">
          <img src={profileImg} alt="profile" />
        </div>
        {
          PremiumData
          &&
          <div className="choose-profile">
            <img src={profile2} alt="profile" onClick={() => { setProfileImg(profile2), localStorage.setItem('profile', profile2) }} />
            <img src={profile3} alt="profile" onClick={() => { setProfileImg(profile3), localStorage.setItem('profile', profile3) }} />
            <img src={profile4} alt="profile" onClick={() => { setProfileImg(profile4), localStorage.setItem('profile', profile4) }} />
          </div>
        }

        <div className="profile-data-sec">
          <div className="welcome">Hii {name}, <span>Amayra</span> Welcomes You</div>

          <div className="profile-btn">
            <button onClick={() => navigate('/vedios')}>Visit Our Gallery</button>
          </div>
          <Weather />
        </div>
      </div>
    </>
  )
}

export default Profile