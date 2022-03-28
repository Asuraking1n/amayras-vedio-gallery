import React from "react";
import axios from "axios";
import "./playcard.css";
import { Link } from "react-router-dom";
import playList from "../../../images/playlist.png";
import delet from '../../../images/delete.png'

import { usePlayList } from "../../../context/playlist-context";

const PlayListDisplayCard = (props) => {

    const {setListData} = usePlayList()

    let token = localStorage.getItem("token");


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
        <>
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
                <div className="add-video-sec playDlt">
                    <img src={delet} alt="dlt" onClick={deletePlayList}/>
                </div>
            </div>
        </>
    );
};

export default PlayListDisplayCard;
