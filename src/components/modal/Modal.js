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
        </div>
        </div>
    </>
  )
}

export default Modal