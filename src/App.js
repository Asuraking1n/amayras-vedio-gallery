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
    </Routes>
    </>
  );
}

export default App;
