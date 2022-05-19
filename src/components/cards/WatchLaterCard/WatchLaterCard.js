import React,{useState} from 'react'
import btnShare from '../../../images/share.png'
import btnLike from '../../../images/like.png'
import btnLikeDone  from '../../../images/like-done.png'
import btndelete from '../../../images/delete.png'
import { useWatchLater } from '../../../context/watchlater-context'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const WatchLaterCard = (props) => {
  const [isLiked,setIsLiked] = useState(false)
  const {setWatchLaterData} = useWatchLater()
  let token = localStorage.getItem('token')
  const deleteFromList=()=>{
    axios.delete(`/api/user/watchlater/${props.videoCollection._id}`,{
      headers:{authorization: token}
  }).then((res)=>setWatchLaterData(res.data.watchlater) )
  }
  const notify = (msg) => toast(msg);
  const addToLike = async(video,token) => {
    if (token) {
        return await axios.post(`/api/user/likes`,{video}, {
            headers: {
                authorization: token 
            }
        })
    }else{
        notify('PLEASE LOGIN')
    }
  }
  
  return (
    <><ToastContainer />
        <div className="history-card-cont">
            <img src={props.videoCollection.imgSrc} className='bg-image'/>
            <div className="img-black-overlay">
            <div className="h-card-overlay">
                <div className="h-card-buttons-cont">
                    <img src={btnShare} alt="button" onClick={navigator.clipboard.writeText(`https://www.youtube.com/embed/${props.videoCollection._id}`)}/>
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