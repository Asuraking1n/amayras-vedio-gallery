import React,{useState} from 'react'
import btnShare from '../../../images/share.png'
import btnLike from '../../../images/like.png'
import btnLikeDone  from '../../../images/like-done.png'
import btndelete from '../../../images/delete.png'
import { useHistory } from '../../../context/history-context'
import axios from 'axios'
import './historycard.css'
const HistoryCard = (props) => {
  const [isLiked,setIsLiked] = useState(false)
  const {setHistoryData} = useHistory()
  let token = localStorage.getItem('token')
  const deleteFromList=()=>{
    axios.delete(`/api/user/history/${props.videoCollection._id}`,{
      headers:{authorization: token}
  }).then((res)=>setHistoryData(res.data.history))
  }
  return (
    <>
        <div className="history-card-cont">
            <img src={props.videoCollection.imgSrc} className='bg-image'/>
            <div className="img-black-overlay">
            <div className="h-card-overlay">
                <div className="h-card-buttons-cont">
                    <img src={btnShare} alt="button" />
                    {!isLiked?<img src={btnLike} alt="button" onClick={()=>setIsLiked(true)}/>:<img src={btnLikeDone} alt="button" />}
                    <img src={btndelete} alt="button" onClick={deleteFromList}/>
                </div>
            </div>
            </div>
            <div className="history-card-title">{props.videoCollection.title}</div>
        </div>
    </>
  )
}

export default HistoryCard