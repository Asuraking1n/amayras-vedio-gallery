import React, { useState } from "react";
import axios from "axios";
import "./playcard.css";
import { Link, useNavigate } from "react-router-dom";
import playList from "../../../images/playlist.png";
import delet from '../../../images/delete.png'
import add from '../../../images/add.png'
import checked from '../../../images/checked.png'
import { usePlayList } from "../../../context/playlist-context";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
const PlayListCard = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const {setListData} = usePlayList()
    const navigate = useNavigate();
    let token = localStorage.getItem("token");
    const notify = (msg) => toast(msg);
    const postVedioToPlayList = (video) => {
        axios
            .post(
                `/api/user/playlists/${props.list._id}`,
                { video },
                {
                    headers: { authorization: token },
                }
            )
            .then((res) =>
                res.status === 201
                    ? navigate("/playlist")
                    : notify("Please Refresh, Some Error Occurred")
            );
    };

    const deletePlayList = () => {
        axios
            .delete(
                `/api/user/playlists/${props.list._id}`,
                {
                    headers: { authorization: token },
                }
            )
            .then((res) =>
            setListData(res.data.playlists)
            );
    };

    return (
        <><ToastContainer />
            <div className="playlist-section">
                <div className="playList-card-cont">
                    <Link to={`/playlist/` + props.list._id}>
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
                    <div className="p-title">{props.list.title}</div>
                </div>
                <div className="add-video-sec">
                    <img src={delet} alt="dlt" onClick={deletePlayList}/>
                    <img src={!isChecked ? add : checked} alt="check" onClick={() => setIsChecked(true) || postVedioToPlayList(props.vedioData)} />
                </div>
            </div>
        </>
    );
};

export default PlayListCard;
