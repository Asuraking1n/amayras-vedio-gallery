import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HistoryCard from "../../components/cards/historyCard/HistoryCard";
import Clear from "../../images/clear.png";
import "./history.css";
import { useHistory } from "../../context/history-context";
const History = () => {
    const { historyData, setHistoryData } = useHistory();
    let token = localStorage.getItem("token");

    const clearHistory = () => {
        axios
            .delete("/api/user/history/all", {
                headers: { authorization: token },
            })
            .then((res) => setHistoryData(res.data.history));
    };

    return (
        <>
            <div className="vedioListing-cont-sec history-sec-con">
                {token ? (
                    <>
                        <div className="vediolisting-heading history-heading">
                            Watch History
                            <img src={Clear} alt="cancel" onClick={clearHistory} />
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
                            <span>PlayList</span>
                        </div>
                        <div className="vedio-cards-cont">
                            {historyData.length > 0 ? (
                                historyData.map((video, id) => {
                                    return <HistoryCard key={id} videoCollection={video} />;
                                })
                            ) : (
                                <>
                                    <div className="blank-load">
                                        <span>Why Havn't You Watched SomeThing ? </span>
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
                            LogIn To Watch What you watched till now 😃
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default History;
