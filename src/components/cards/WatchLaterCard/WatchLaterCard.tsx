import React,{useState} from 'react'
import btnShare from '../../../images/share.png'
import btnLike from '../../../images/like.png'
import btnLikeDone  from '../../../images/like-done.png'
import btndelete from '../../../images/delete.png'
import { useWatchLater } from '../../../context/watchlater-context'
import { deleteFromListService } from '../../../services/deleteFromListService'
import addToLikeService from '../../../services/addToLikeService'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useLike } from '../../../context/like-context'
const WatchLaterCard = ({videoCollection}:any) => {
  const {_id,imgSrc,title} = videoCollection
  const {LikedData} = useLike()
  const [isLiked,setIsLiked] = useState(LikedData.some((val:any)=>val._id === _id))
  const {setWatchLaterData} = useWatchLater()
  let token = localStorage.getItem('token')

  const deleteFromList = async() => {
    const res = await deleteFromListService('watchlater',_id,token)
    setWatchLaterData(res.data.watchlater)
};

  const notify = (msg:string) => toast(msg);

  const addToLike = async (video:object, token:string | null) => {
    if (token) {
        await addToLikeService(video, token)
    } else {
        notify("PLEASE LOGIN");
    }
  };

  return (
    <>
        <div className="history-card-cont">
            <img src={imgSrc} className='bg-image'/>
            <div className="img-black-overlay">
            <div className="h-card-overlay">
                <div className="h-card-buttons-cont">
                    <img src={btnShare} alt="button" onClick={()=>{navigator.clipboard.writeText(`https://www.youtube.com/embed/${_id}`) , notify('Link Copied')}}/>
                    {!isLiked?<img src={btnLike} alt="button" onClick={()=>{setIsLiked(true),addToLike(videoCollection,token)}}/>:<img src={btnLikeDone} alt="button" />}
                    <img src={btndelete} alt="button" onClick={deleteFromList}/>
                </div>
            </div>
            </div>
            <div className="history-card-title">{title}</div>
        </div>
    </>
  )
}

export default WatchLaterCard