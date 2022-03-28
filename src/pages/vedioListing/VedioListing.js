import React from "react";
import VedioCard from "../../components/cards/vedioCards/VedioCard";
import "./vediolisting.css";
import { useVedioData } from "../../context/vedio-data-context";
import { Link } from "react-router-dom";
const VedioListing = () => {
  const { vedio } = useVedioData();

  return (
    <>
      <div className="vedioListing-cont-sec">
        <div className="vediolisting-heading">Gallery</div>
        <div className="vediolisting-category">
          <span>All</span>
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
