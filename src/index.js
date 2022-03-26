import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./context/vedio-data-context";
import { HistoryProvider } from "./context/history-context";
import { LikeProvider } from "./context/like-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <HistoryProvider>
          <LikeProvider>
          <App />
          </LikeProvider>
        </HistoryProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
