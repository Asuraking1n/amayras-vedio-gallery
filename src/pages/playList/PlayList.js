
import React from "react";
import { Link } from "react-router-dom";
// import './liked.css'
import { usePlayList } from "../../context/playlist-context";
import PlayListDisplayCard from "../../components/cards/playlistCard/PlayListDisplayCard";
const PlayList = () => {
 const {ListData} = usePlayList()
    let token = localStorage.getItem("token");
    
    return (
        <>
            <div className="vedioListing-cont-sec history-sec-con">
                {token ? (
                    <>
                        <div className="vediolisting-heading history-heading">
                            PlayList
                        </div>
                        <div className="vediolisting-category">
                            <Link to="/vedios" className="link">
                                <span>All</span>
                            </Link>
                            <Link to="/history" className="link">
                                <span>History</span>
                            </Link>
                            <Link to="/liked" className="link">
                            <span>Liked Videos</span>
                            </Link>
                            <Link to="/playlist" className="link">
                            <span>PlayList</span>
                            </Link>
                        </div>
                        <div className="vedio-cards-cont">
                            {ListData.length > 0 ? 
                            (
                                ListData.map((video, id) => {
                                    return <PlayListDisplayCard key={id} list={video} />;
                                })
                            ) : (
                                <>
                                    <div className="blank-load">
                                        <span>Don't you want to add SomeThing  ? </span>
                                        <Link to="/vedios">
                                            <button>Explore</button>
                                        </Link>
                                        <img
                                            src="https://i.pinimg.com/originals/77/88/7e/77887e7ff011f70037164bb4c610d9c6.gif"
                                            alt="load"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="login-user">
                            
                            LogIn To Create your very own playList 😃
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default PlayList;
