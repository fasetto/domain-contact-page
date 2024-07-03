import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Helmet } from "react-helmet";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Helmet title={`Buy ${window.location.hostname}`} />
  </React.StrictMode>
);
