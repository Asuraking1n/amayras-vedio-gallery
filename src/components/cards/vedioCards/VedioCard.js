import React, { useState} from "react";
import "./vediocard.css";
import Modal from "../../modal/Modal";
import pencil from '../../../images/pencil.png'
import like from '../../../images/like.png'
import clear from '../../../images/clear.png'
import likeDone from '../../../images/like-done.png'
import share from '../../../images/share.png'
import checked from '../../../images/checked.png'
import clock from '../../../images/clock.png'
import playlist from '../../../images/playlist.png'
import PlaylistModal from "../../playListModal/PlaylistModal";
import copy from '../../../images/copy.png'
import { ToastContainer, toast } from 'react-toastify';
import addToLikeService from '../../../services/addToLikeService'
import 'react-toastify/dist/ReactToastify.css'
import addToWatchLaterService from "../../../services/addToWatchLaterService";
import { addTohistoryService } from "../../../services/addTohistoryService";
import {useLike} from '../../../context/like-context'
import { useWatchLater } from "../../../context/watchlater-context";
import NoteCard from "../noteCard/NoteCard";
const VedioCard = (props) => {
  const {LikedData} = useLike()
  const {WatchLaterData} = useWatchLater()
  const [isModal, setIsModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isWatched, setIsWatched] = useState(WatchLaterData.some((val)=>val._id === props.vedioData._id));
  const [PlayisModal, setIsPlayModal] = useState(false);
  const [isModalNote, setisModalNote] = useState(false);
  const [isLiked,setIsLiked] = useState(LikedData.some((val)=>val._id === props.vedioData._id))
  const [noteData,setNoteData] = useState(localStorage.getItem(`${props.vedioData._id}`))
  
  let token = localStorage.getItem("token");
  const notify = (msg) => toast(msg);

  const addTohistory = async (video, token) => {
    if (token) {
      await addTohistoryService(video, token)
    } else {
        notify("PLEASE LOGIN");
    }
  };


const  addToWatchLater = async (video, token) => {
  if (token) {
      const res = await addToWatchLaterService(video,token)
      if(res.status===201){
        setIsWatched(true)
      }
  } else {
      notify("PLEASE LOGIN");
  }
};



const addToLike = async (video, token) => {
  if (token) {
      await addToLikeService(video, token)
  } else {
      notify("PLEASE LOGIN");
  }
};




  return (
    <><ToastContainer />
      {isModal ? (
        <Modal
          openModal={(isModal) => setIsModal(isModal)}
          id={props.vedioData._id}
        />
      ) : null}
      <div
        className="vedio-card-cont-sec"
        style={{
          background: `url(${props.vedioData.imgSrc}) no-repeat center center/cover`,
        }}
      >
        <div className="vedio-card-cont-overlay">
        {noteData&&<div className="note-pad">
        {noteData}  
        <img src={clear} alt="clear" onClick={()=>setNoteData(localStorage.removeItem(`${props.vedioData._id}`))}/>
        </div>}
        
          <div className="vedio-title">{props.vedioData.title}</div>
          <div className="yellow-hover-overlay">
            <button className="veiw-vedio-btn" onClick={() => setIsModal(true) || addTohistory(props.vedioData,token)}>
              View Video
            </button>
            <div className="vedio-btn-sec">
              <div className="vedio-btn-circle-cont">{isLiked?<img src={likeDone} alt="like" onClick={()=>setIsLiked(false)} />:<img src={like} alt="like" onClick={()=>setIsLiked(true) || addToLike(props.vedioData,token)}/>}</div>
              <div className="vedio-btn-circle-cont" onClick={() => {navigator.clipboard.writeText(`https://www.youtube.com/embed/${props.vedioData._id}`) && setIsCopied(true)} }><img src={!isCopied?share:copy} alt="share" /></div>
              <div className="vedio-btn-circle-cont"><img src={playlist} alt="list" onClick={()=>setIsPlayModal(true)}/></div>
              {PlayisModal?<PlaylistModal vedioData={props.vedioData} closeModal={(IsPlayModal)=>setIsPlayModal(IsPlayModal)}/>:null}
              <div className="vedio-btn-circle-cont"><img src={!isWatched?clock:checked} alt="watchlater" onClick={()=>addToWatchLater(props.vedioData,token)}/></div>
              <div className="vedio-btn-circle-cont"><img src={isModalNote?clear:pencil} alt="notes" onClick={()=> isModalNote ?setisModalNote(false):setisModalNote(true)}/></div>
              {isModalNote&& <NoteCard videoID={props.vedioData._id} updateNote={noteData=>setNoteData(noteData)}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VedioCard;
