import React from 'react'
import { useClickOutSide } from '../../hook/useClickOutSide'
import Cancel from '../../images/cancel.png'
import './modal.css'
const Modal = (props:any) => {
  let domNode:any = useClickOutSide(()=>{
    props.openModal(false)
  })
  return (
    <>
        <div className='modal-sec' >
        <div className="modal-cont" ref={domNode}>
            <div className="modal-close">
                <img src={Cancel} alt="cancel" onClick={()=>props.openModal(false)} />
            </div>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${props.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            id='videoFrame'
          ></iframe>
        </div>
        </div>
    </>
  )
}

export default Modal