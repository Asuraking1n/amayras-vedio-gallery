import React, { useState} from "react";
import "./vediocard.css";
import Modal from "../../modal/Modal";
import axios from "axios";
import like from '../../../images/like.png'
import likeDone from '../../../images/like-done.png'
import share from '../../../images/share.png'
import playlist from '../../../images/playlist.png'
import PlaylistModal from "../../playListModal/PlaylistModal";
import copy from '../../../images/copy.png'
const VedioCard = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [PlayisModal, setIsPlayModal] = useState(false);
  const [isLiked,setIsLiked] = useState(false)
  let token = localStorage.getItem("token");



const addTohistory = async(video,token) => {
    if (token) {
        return await axios.post(`/api/user/history`,{video}, {
            headers: {
                authorization: token 
            }
        })
    }
}

const addToLike = async(video,token) => {
  if (token) {
      return await axios.post(`/api/user/likes`,{video}, {
          headers: {
              authorization: token 
          }
      })
  }else{
      alert('PLEASE LOGIN')
  }
}




  return (
    <>
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
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VedioCard;
