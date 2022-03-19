import React from 'react'
import Cancel from '../../images/cancel.png'
import './modal.css'
import ReactPlayer from 'react-player'
const Modal = (props) => {
  return (
    <>
        <div className='modal-sec' >
        <div className="modal-cont">
            <div className="modal-close">
                <img src={Cancel} alt="cancel" onClick={()=>props.openModal(false)} />
            </div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${props.id}`} controls={true} width='100%'
          height='100%'/>
        </div>
        </div>
    </>
  )
}

export default Modal