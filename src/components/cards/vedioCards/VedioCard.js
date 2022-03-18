import React from 'react'
import './vediocard.css'
const VedioCard = () => {
  return (
    <>
      <div className="vedio-card-cont-sec" style={{background:"url(https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg) no-repeat center center/cover"}}>
      <div className="vedio-card-cont-overlay">
      <div className="vedio-title">The rema</div>
        <div className="yellow-hover-overlay">
          <button className='veiw-vedio-btn'>View Vedio</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default VedioCard