import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import { useState,useEffect } from "react";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import VedioListing from "./pages/vedioListing/VedioListing";
import Login from "./pages/signup/Login";
import Signup from './pages/signup/Signup'
import History from "./pages/WatchHistory/History";
import Liked from "./pages/LikedVedio/Liked";
import PlayList from "./pages/playList/PlayList";
import Profile from './pages/profilepage/Profile'
import SinglePlayList from "./pages/playList/SinglePlayList";
import WatchLater from "./pages/watchlater/WatchLater";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const [token,setToken] = useState<string>('')
  
  const location = useLocation()
  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(`${token}`)
  }, [location])
  
  return (
    <>
    <ToastContainer autoClose={1000} />
    <Navbar/>
    <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/vedios" element={<VedioListing />} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/history" element={<History/>} />
            <Route  path="/liked" element={<Liked/>} />
            <Route  path="/playlist" element={<PlayList/>} />
            <Route  path="/playlist/:id" element={<SinglePlayList/>} />
            <Route  path="/watchlater" element={<WatchLater/>} />
            <Route  path="/profile" element={token?<Profile/>:<Login/>} />
    </Routes>
    </>
  );
}

export default App;
