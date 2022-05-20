import React,{useState} from 'react'
import btnShare from '../../../images/share.png'
import btnLike from '../../../images/like.png'
import btnLikeDone  from '../../../images/like-done.png'
import btndelete from '../../../images/delete.png'
import { useWatchLater } from '../../../context/watchlater-context'
import { deleteFromListService } from '../../../services/deleteFromListService'
import addToLikeService from '../../../services/addToLikeService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useLike } from '../../../context/like-context'
const WatchLaterCard = (props) => {
  const {LikedData} = useLike()
  const [isLiked,setIsLiked] = useState(LikedData.some((val)=>val._id === props.videoCollection._id))
  const {setWatchLaterData} = useWatchLater()
  let token = localStorage.getItem('token')

  const deleteFromList = async() => {
    const res = await deleteFromListService('watchlater',props.videoCollection._id,token)
    setWatchLaterData(res.data.watchlater)
};

  const notify = (msg) => toast(msg);

  const addToLike = async (video, token) => {
    if (token) {
        await addToLikeService(video, token)
    } else {
        notify("PLEASE LOGIN");
    }
  };

  return (
    <><ToastContainer />
        <div className="history-card-cont">
            <img src={props.videoCollection.imgSrc} className='bg-image'/>
            <div className="img-black-overlay">
            <div className="h-card-overlay">
                <div className="h-card-buttons-cont">
                    <img src={btnShare} alt="button" onClick={()=>navigator.clipboard.writeText(`https://www.youtube.com/embed/${props.videoCollection._id}`) && notify('Link Copied')}/>
                    {!isLiked?<img src={btnLike} alt="button" onClick={()=>setIsLiked(true)||addToLike(props.videoCollection,token)}/>:<img src={btnLikeDone} alt="button" />}
                    <img src={btndelete} alt="button" onClick={deleteFromList}/>
                </div>
            </div>
            </div>
            <div className="history-card-title">{props.videoCollection.title}</div>
        </div>
    </>
  )
}

export default WatchLaterCard