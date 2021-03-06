import React, { useEffect, useState } from "react";
import "./playlist.css";
import { Link, useParams, NavLink } from "react-router-dom";
import axios from "axios";
import VedioCard from "../../components/cards/vedioCards/VedioCard";
const SinglePlayList = () => {
  const [listVideo, setListVideo] = useState([]);
  const { id } = useParams();
  let token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`/api/user/playlists/${id}`, {
        headers: { authorization: token },
      })
      .then((res) => setListVideo(res.data.playlist.videos));
  }, []);

  return (
    <>
      <div className="vedioListing-cont-sec history-sec-con">
        {token ? (
          <>
            <div className="vediolisting-heading history-heading">
              PlayList Videos
            </div>
            <div className="vediolisting-category">
              <NavLink
                to="/vedios"
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "#dc493a" : "#fff",
                })}
              >
                <span>All</span>
              </NavLink>
              <NavLink
                to="/history"
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "#dc493a" : "#fff",
                })}
              >
                <span>History</span>
              </NavLink>
              <NavLink
                to="/liked"
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "#dc493a" : "#fff",
                })}
              >
                <span>Liked Videos</span>
              </NavLink>
              <NavLink
                to="/playlist"
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "#dc493a" : "#fff",
                })}
              >
                <span>PlayList</span>
              </NavLink>
              <NavLink
                to="/watchlater"
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "#dc493a" : "#fff",
                })}
              >
                <span>Watch Later</span>
              </NavLink>
            </div>
            <div className="vedio-cards-cont">
              {listVideo.length > 0 ? (
                listVideo.map((video, id) => {
                  return <VedioCard key={id} vedioData={video} />;
                })
              ) : (
                <>
                  <div className="blank-load">
                    <span>This playlist is Blank Add Videos </span>
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
              LogIn To Create your very own playList ????
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SinglePlayList;
