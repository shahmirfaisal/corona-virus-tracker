import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import GlobalContextProvider from "./Context/GlobalContext";

axios.defaults.baseURL = "https://corona.lmao.ninja/";

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  er => {
    return Promise.reject("Network error. Check your internet connection.");
  }
);

ReactDOM.render(
  <BrowserRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
