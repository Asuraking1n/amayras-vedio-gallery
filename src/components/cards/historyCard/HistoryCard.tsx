import { useState } from "react";
import btnShare from "../../../images/share.png";
import btnLike from "../../../images/like.png";
import btnLikeDone from "../../../images/like-done.png";
import btndelete from "../../../images/delete.png";
import { useHistory } from "../../../context/history-context";
import { toast } from "react-toastify";

import "./historycard.css";
import addToLikeService from "../../../services/addToLikeService";
import { deleteFromListService } from "../../../services/deleteFromListService";
import { useLike } from "../../../context/like-context";

type propsType = {
    id: string,
  imgSrc: string,
  title: string,
  _id: string,
  }
const HistoryCard = ({videoCollection}:any) => {
    const {_id,imgSrc,title}:propsType = videoCollection
    const {LikedData} = useLike()
    const [isLiked, setIsLiked] = useState<boolean>(LikedData.some((val:any)=>val._id === _id))
    const { setHistoryData } = useHistory();
    let token = localStorage.getItem("token");
    const notify = (msg:string) => toast(msg);

    const deleteFromList = async() => {
        const res = await deleteFromListService('history',_id,token)
        setHistoryData(res.data.history)
    };

    const addToLike = async (video:object, token:string | null) => {
        if (token) {
            return addToLikeService(video, token)
        } else {
            notify("PLEASE LOGIN");
        }
    };

    return (
        <>
            <div className="history-card-cont">
                <img src={imgSrc} className="bg-image" />
                <div className="img-black-overlay">
                    <div className="h-card-overlay">
                        <div className="h-card-buttons-cont">
                            <img
                                src={btnShare}
                                alt="button"
                                onClick={()=>{navigator.clipboard.writeText(
                                    `https://www.youtube.com/embed/${_id}`
                                ) , notify('Link Copied')}}
                            />
                            {!isLiked ? (
                                <img
                                    src={btnLike}
                                    alt="button"
                                    onClick={() =>
                                        {setIsLiked(true), addToLike(videoCollection, token)}
                                    }
                                />
                            ) : (
                                <img src={btnLikeDone} alt="button" />
                            )}
                            <img src={btndelete} alt="button" onClick={deleteFromList} />
                        </div>
                    </div>
                </div>
                <div className="history-card-title">{title}</div>
            </div>
        </>
    );
};

export default HistoryCard;
