import React from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios'
import { setupAxios } from "./providers/auth";
import "./index.css";
import "material-icons/iconfont/material-icons.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
// TODO: clarify helmet
// import { Helmet } from "react-helmet";

/**
 * Inject interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
 setupAxios(axios)
 

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Helmet>
      <meta name="theme-color" content={palette.light.primary.main} />
    </Helmet> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
