import axios from "axios";
import { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import HistoryCard from "../../components/cards/historyCard/HistoryCard";
import Clear from "../../images/clear.png";
import "./history.css";
import { useHistory } from "../../context/history-context";
const History = () => {
  const { historyData, setHistoryData } = useHistory();
  const [loading,setLoading] = useState(true)
  let token = localStorage.getItem("token");
  useEffect(()=>{
    setTimeout(()=>setLoading(false),800)
  },[])
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
              {
                loading?
                <div className="load-img">
                <img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="load" />
                </div>
                
                :
                historyData.length > 0 ? (
                historyData.map((video:any, id:string) => {
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
