import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./liked.css";
import LikeCard from "../../components/cards/likeCard/LikeCard";
import { useLike } from "../../context/like-context";
const Liked = () => {
  const { LikedData } = useLike();
  let token = localStorage.getItem("token");

  return (
    <>
      <div className="vedioListing-cont-sec history-sec-con">
        {token ? (
          <>
            <div className="vediolisting-heading history-heading">
              Liked Videos
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
              {LikedData.length > 0 ? (
                LikedData.map((video, id) => {
                  return <LikeCard key={id} videoCollection={video} />;
                })
              ) : (
                <>
                  <div className="blank-load">
                    <span>Don't you like SomeThing ? ? </span>
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
            <div className="login-user">LogIn To add liked vedios 😃</div>
          </>
        )}
      </div>
    </>
  );
};

export default Liked;
