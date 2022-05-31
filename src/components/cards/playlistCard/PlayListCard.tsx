import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./playcard.css";
import { deleteFromListService } from "../../../services/deleteFromListService";
import { Link, useNavigate } from "react-router-dom";
import playList from "../../../images/playlist.png";
import delet from '../../../images/delete.png'
import add from '../../../images/add.png'
import checked from '../../../images/checked.png'
import { usePlayList } from "../../../context/playlist-context";
import { toast } from 'react-toastify';
import { postVideoToPlayListService } from "../../../services/postVideoToPlayListService";

type listTypes = {
    title: string,
    description: string,
    videos: object,
    _id: string
}
const PlayListCard = ({ list, vedioData }: any) => {
    const {title,_id}:listTypes = list
    const [isChecked, setIsChecked] = useState(false)
    const { setListData } = usePlayList()
    const navigate = useNavigate();
    let token = localStorage.getItem("token");
    const notify = (msg: string) => toast(msg);
    const postVedioToPlayList = async (video: object) => {
        try {
            await postVideoToPlayListService(_id, video, token)
            notify("Video Added")
            navigate("/playlist")

        } catch (error) {
            notify("Please Refresh, Some Error Occurred")
        }
    };
    const deletePlayList = async () => {
        const res = await deleteFromListService('playlists', _id, token)
        setListData(res.data.playlists)
        notify("PlyList Deleted")
    };


    return (
        <>
            <div className="playlist-section">
                <div className="playList-card-cont">
                    <Link to={`/playlist/` + _id}>
                        <div className="overlay-img">
                            <img
                                src="https://inculture.microsoft.com/wp-content/uploads/prod/2020/01/fashion-globes-1600x900.jpg"
                                alt="l"
                            />
                        </div>
                    </Link>

                    <div className="p-description">
                        <img
                            src={playList}
                            alt="play"
                        />
                    </div>
                    <div className="p-title">{title}</div>
                </div>
                <div className="add-video-sec">
                    <img src={delet} alt="dlt" data-tip data-for="deleteTip" onClick={deletePlayList} />
                    <img src={!isChecked ? add : checked} data-tip data-for="videoaddTip" alt="check" onClick={() => { setIsChecked(true), postVedioToPlayList(vedioData) }} />
                </div>
                <ReactTooltip id="deleteTip" place="right" effect="solid">Delete PlayList</ReactTooltip>
                <ReactTooltip id="videoaddTip" place="right" effect="solid">Add Video To PlayList</ReactTooltip>
            </div>
        </>
    );
};

export default PlayListCard;
