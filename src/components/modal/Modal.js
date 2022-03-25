import React from 'react'
import Cancel from '../../images/cancel.png'
import './modal.css'
const Modal = (props) => {
  return (
    <>
        <div className='modal-sec' >
        <div className="modal-cont">
            <div className="modal-close">
                <img src={Cancel} alt="cancel" onClick={()=>props.openModal(false)} />
            </div>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${props.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </div>
        </div>
    </>
  )
}

export default Modal