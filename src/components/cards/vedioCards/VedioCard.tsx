import { useState } from "react";
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
import {  toast } from 'react-toastify';
import addToLikeService from '../../../services/addToLikeService'
import addToWatchLaterService from "../../../services/addToWatchLaterService";
import { addTohistoryService } from "../../../services/addTohistoryService";
import { useLike } from '../../../context/like-context'
import { useWatchLater } from "../../../context/watchlater-context";
import NoteCard from "../noteCard/NoteCard";
import ReactTooltip from "react-tooltip";
import { usePremiumData } from "../../../context/premium-context";

type videoTypes = {
  _id:string,
  imgSrc:string,
  title:string
}
const VedioCard = ({vedioData}:any) => {
  const {_id,imgSrc,title}:videoTypes = vedioData
  const { LikedData } = useLike()
  const { WatchLaterData } = useWatchLater()
  const {PremiumData} = usePremiumData()
  const [isModal, setIsModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isWatched, setIsWatched] = useState(WatchLaterData.some((val:any) => val._id === _id));
  const [PlayisModal, setIsPlayModal] = useState(false);
  const [isModalNote, setisModalNote] = useState(false);
  const [isLiked, setIsLiked] = useState(LikedData.some((val:any) => val._id === _id))
  const [noteData, setNoteData] = useState(localStorage.getItem(`${_id}`))

  let token = localStorage.getItem("token");
  const notify = (msg:string) => toast(msg);

  const addTohistory = async (video:object, token:string | null) => {
    if (token) {
      await addTohistoryService(video, token)
    } else {
      notify("PLEASE LOGIN");
    }
  };


  const addToWatchLater = async (video:object, token:string | null) => {
    if (token) {
      const res = await addToWatchLaterService(video, token)
      if (res.status === 201) {
        setIsWatched(true)
      }
    } else {
      notify("PLEASE LOGIN");
    }
  };



  const addToLike = async (video:object, token:string | null) => {
    if (token) {
      await addToLikeService(video, token)
    } else {
      notify("PLEASE LOGIN");
    }
  };




  return (
    <>
      {isModal ? (
        <Modal
          openModal={(isModal:boolean) => setIsModal(isModal)}
          id={_id}
        />
      ) : null}
      <div
        className="vedio-card-cont-sec"
        style={{
          background: `url(${imgSrc}) no-repeat center center/cover`,
        }}
      >
        <div className="vedio-card-cont-overlay">
          {noteData && <div className="note-pad">
            {noteData}
            <img src={clear} alt="clear" onClick={() => {setNoteData(null),localStorage.removeItem(_id)}} />
          </div>}

          <div className="vedio-title">{title}</div>
          <div className="yellow-hover-overlay">
            <button className="veiw-vedio-btn" onClick={() => {setIsModal(true) , addTohistory(vedioData, token)}}>
              View Video
            </button>
            <div className="vedio-btn-sec">
              {token&&
              <>
              <div className="vedio-btn-circle-cont" data-tip data-for="likeTip">{isLiked ? <img src={likeDone} alt="like" onClick={() => setIsLiked(false)} /> : <img src={like} alt="like" onClick={() =>{ setIsLiked(true) , addToLike(vedioData, token)}} />}</div>
              <div className="vedio-btn-circle-cont" data-tip data-for="copyTip" onClick={() => { {navigator.clipboard.writeText(`https://www.youtube.com/embed/${_id}`) , setIsCopied(true) }}}><img src={!isCopied ? share : copy} alt="share" /></div>
              <div className="vedio-btn-circle-cont" data-tip data-for="playTip"><img src={playlist} alt="list" onClick={() => setIsPlayModal(true)} /></div>
              {PlayisModal ? <PlaylistModal vedioData={vedioData} closeModal={(IsPlayModal:boolean) => setIsPlayModal(IsPlayModal)} /> : null}
              <div className="vedio-btn-circle-cont" data-tip data-for="watchTip"><img src={!isWatched ? clock : checked} alt="watchlater" onClick={() => addToWatchLater(vedioData, token)} /></div>
              {
                PremiumData
                &&
                <div className="vedio-btn-circle-cont" data-tip data-for="noteTip"><img src={isModalNote ? clear : pencil} alt="notes" onClick={() => isModalNote ? setisModalNote(false) : setisModalNote(true)} /></div>
              }
              {isModalNote && <NoteCard videoID={_id} updateNote={(noteData:any) => setNoteData(noteData)} closeNote={(isModalNote:boolean)=>setisModalNote(isModalNote)}/>}
              
              </>
              }




              <ReactTooltip id="likeTip" place="bottom" effect="solid">Like Videos</ReactTooltip>
              <ReactTooltip id="copyTip" place="bottom" effect="solid">Copy Videos Link</ReactTooltip>
              <ReactTooltip id="playTip" place="bottom" effect="solid">Create New PlayList</ReactTooltip>
              <ReactTooltip id="watchTip" place="bottom" effect="solid">Add To WatchLater</ReactTooltip>
              <ReactTooltip id="noteTip" place="bottom" effect="solid">Add Notes on Video</ReactTooltip>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VedioCard;
