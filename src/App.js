import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import {
  Routes,
  Route
} from "react-router-dom";
import VedioListing from "./pages/vedioListing/VedioListing";
import Login from "./pages/signup/Login";
import Signup from './pages/signup/Signup'
import Mockman from "mockman-js";
import History from "./pages/WatchHistory/History";
import Liked from "./pages/LikedVedio/Liked";
import PlayList from "./pages/playList/PlayList";
import SinglePlayList from "./pages/playList/SinglePlayList";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/vedios" element={<VedioListing />} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/mockman" element={<Mockman />} />
            <Route  path="/history" element={<History/>} />
            <Route  path="/liked" element={<Liked/>} />
            <Route  path="/playlist" element={<PlayList/>} />
            <Route  path="/playlist/:id" element={<SinglePlayList/>} />
    </Routes>
    </>
  );
}

export default App;
