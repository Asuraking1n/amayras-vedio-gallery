import React,{useState} from 'react'
import btnShare from '../../../images/share.png'
import btndelete from '../../../images/delete.png'
import { deleteFromListService } from '../../../services/deleteFromListService'
import btnLike from '../../../images/like.png'
import btnLikeDone  from '../../../images/like-done.png'
import { useLike } from '../../../context/like-context'
import {  toast } from "react-toastify";
const LikeCard = (props) => {
  const {setLikedData} = useLike()
  const [isLiked,setIsLiked] = useState(false)
  let token = localStorage.getItem('token')
  const notify = (msg) => toast(msg);
  const deleteFromList = async() => {
    const res = await deleteFromListService('likes',props.videoCollection._id,token)
    setLikedData(res.data.likes)
};

  return (
    <>
        <div className="history-card-cont">
            <img src={props.videoCollection.imgSrc} className='bg-image'/>
            <div className="img-black-overlay">
            <div className="h-card-overlay">
                <div className="h-card-buttons-cont">
                    <img src={btnShare} alt="button" onClick={()=>navigator.clipboard.writeText(`https://www.youtube.com/embed/${props.videoCollection._id}`) && notify('Link Copied')}/>
                    <img src={btndelete} alt="button" onClick={deleteFromList}/>
                    {!isLiked?<img src={btnLikeDone} alt="button" onClick={()=>setIsLiked(true) || deleteFromList()}/>:<img src={btnLike} alt="button" />}
                </div>
            </div>
            </div>
            <div className="history-card-title">{props.videoCollection.title}</div>
        </div>
    </>
  )
}

export default LikeCard