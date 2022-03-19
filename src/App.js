import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import {
  Routes,
  Route
} from "react-router-dom";
import VedioListing from "./pages/vedioListing/VedioListing";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/vedios" element={<VedioListing />} />
    </Routes>
    </>
  );
}

export default App;
