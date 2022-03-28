import React from "react";
import VedioCard from "../../components/cards/vedioCards/VedioCard";
import "./vediolisting.css";
import { useVedioData } from "../../context/vedio-data-context";
import { NavLink } from "react-router-dom";
const VedioListing = () => {
  const { vedio } = useVedioData();

  return (
    <>
      <div className="vedioListing-cont-sec">
        <div className="vediolisting-heading">Gallery</div>
        <div className="vediolisting-category">
          <NavLink
            to="/vedios"
            className="link"
            style={({ isActive }) => ({ color: isActive ? "#dc493a" : "#fff" })}
          >
            <span>All</span>
          </NavLink>
          <NavLink
            to="/history"
            className="link"
            style={({ isActive }) => ({ color: isActive ? "#dc493a" : "#fff" })}
          >
            <span>History</span>
          </NavLink>
          <NavLink
            to="/liked"
            className="link"
            style={({ isActive }) => ({ color: isActive ? "#dc493a" : "#fff" })}
          >
            <span>Liked Videos</span>
          </NavLink>
          <NavLink
            to="/playlist"
            className="link"
            style={({ isActive }) => ({ color: isActive ? "#dc493a" : "#fff" })}
          >
            <span>PlayList</span>
          </NavLink>
          <NavLink
            to="/watchlater"
            className="link"
            style={({ isActive }) => ({ color: isActive ? "#dc493a" : "#fff" })}
          >
            <span>Watch Later</span>
          </NavLink>
        </div>
        <div className="vedio-cards-cont">
          {!vedio ? (
            <>
              <img
                src="https://freefrontend.com/assets/img/css-loaders/loading.gif"
                alt="load"
                className="loadImg"
              />
            </>
          ) : (
            vedio.map((val, index) => {
              return <VedioCard key={index} vedioData={val} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default VedioListing;
