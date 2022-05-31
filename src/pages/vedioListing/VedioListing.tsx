import React, { useState } from "react";
import VedioCard from "../../components/cards/vedioCards/VedioCard";
import { useVedioData } from "../../context/vedio-data-context";
import { NavLink } from "react-router-dom";
import "./vediolisting.css";
const VedioListing = () => {
  const { vedioData } = useVedioData();
  const [paginationCount, setPaginationCount] = useState(4)
  const [paginateLoading, setPaginateLoading] = useState(false)
  const [searchVideo, setSearchVideo] = useState('')

  const initialVideo = vedioData && vedioData.slice(0, paginationCount)

  const paginateVideo = () => {
    setPaginateLoading(true)
    setTimeout(() => {
      setPaginateLoading(false)
      setPaginationCount(paginationCount + 4)
    }, 1000)
  }
  return (
    <>
      <div className="vedioListing-cont-sec">
        <div className="vediolisting-heading">Gallery</div>
        <div className="search-field">
          <input type="text" onChange={(e) => setSearchVideo(e.target.value)} placeholder='SEARCH VIDEO BY TITLE' />
        </div>
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
          {!vedioData ? (
            <>
              <img
                src="https://freefrontend.com/assets/img/css-loaders/loading.gif"
                alt="load"
                className="loadImg"
              />
            </>
          ) :
            (initialVideo.filter((filterData:any) => filterData.title.toLowerCase().includes(searchVideo.toLowerCase()) ? filterData : null)
              .map((items, id) => {
                return (
                  <VedioCard key={id} vedioData={items} />
                )
              }))
          }
          {
            paginateLoading &&
            <div className="paginate-img-loading">
              <img src="https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif" alt="" />
            </div>
          }

          <div className="loadmore-cont" style={{ display: paginationCount > 11 ? 'none' : 'flex' }} onClick={paginateVideo}>
            Load More...
          </div>
        </div>
      </div>
    </>
  );
};

export default VedioListing;
