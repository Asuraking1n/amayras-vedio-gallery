import React,{useState} from 'react'
import './vediocard.css'
import Modal from '../../modal/Modal'
const VedioCard = (props) => {
  const [isModal, setIsModal] = useState(false)
  return (
    <>{isModal?<Modal openModal={(isModal)=>setIsModal(isModal)} id={props.vedioData._id}/>:null}
      <div className="vedio-card-cont-sec" style={{background:`url(${props.vedioData.imgSrc}) no-repeat center center/cover`}}>
      <div className="vedio-card-cont-overlay">
      <div className="vedio-title">{props.vedioData.title}</div>
        <div className="yellow-hover-overlay">
          <button className='veiw-vedio-btn' onClick={()=>setIsModal(true)}>View Video</button>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default VedioCard