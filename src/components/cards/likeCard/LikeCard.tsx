import React, { useState } from 'react'
import btnShare from '../../../images/share.png'
import btndelete from '../../../images/delete.png'
import { deleteFromListService } from '../../../services/deleteFromListService'
import btnLike from '../../../images/like.png'
import btnLikeDone from '../../../images/like-done.png'
import { useLike } from '../../../context/like-context'
import { toast } from "react-toastify";
type propsType = {
  id: string,
imgSrc: string,
title: string,
_id: string,
}
const LikeCard = ({videoCollection}:any) => {
  const {_id,imgSrc,title}:propsType = videoCollection
  const { setLikedData } = useLike()
  const [isLiked, setIsLiked] = useState(false)
  let token = localStorage.getItem('token')
  const notify = (msg: string) => toast(msg);
  const deleteFromList = async () => {
    const res = await deleteFromListService('likes', _id, token)
    setLikedData(res.data.likes)
  };
  
  return (
    <>
      <div className="history-card-cont">
        <img src={imgSrc} className='bg-image' />
        <div className="img-black-overlay">
          <div className="h-card-overlay">
            <div className="h-card-buttons-cont">
              <img src={btnShare} alt="button" onClick={() => { navigator.clipboard.writeText(`https://www.youtube.com/embed/${_id}`), notify('Link Copied') }} />
              <img src={btndelete} alt="button" onClick={deleteFromList} />
              {!isLiked ? <img src={btnLikeDone} alt="button" onClick={() => { setIsLiked(true), deleteFromList() }} /> : <img src={btnLike} alt="button" />}
            </div>
          </div>
        </div>
        <div className="history-card-title">{title}</div>
      </div>
    </>
  )
}

export default LikeCard