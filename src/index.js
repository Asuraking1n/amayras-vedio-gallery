import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {VideoProvider} from './context/vedio-data-context'
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <VideoProvider>
    <App />
  </VideoProvider>
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
