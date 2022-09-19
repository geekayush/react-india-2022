import React from "react";
import ReactDOM from "react-dom";
import "./static/css/base.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";

const initialState = global.window && global.window.__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
