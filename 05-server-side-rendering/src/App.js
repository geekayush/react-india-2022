import React from "react";
import { Routes, Route } from "react-router-dom";

import "./static/css/base.css";
import "./static/css/app.css";

import Header from "./components/Header/Header";
import Breeds from "./pages/Breeds";
import Dogs from "./pages/Dogs";
import Dog from "./pages/Dog";
import * as _ from "lodash";

import { Provider } from "react-redux";

function App({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Breeds />} />
            <Route path="/dogs/:breed" element={<Dogs />} />
            <Route path="/:name" element={<Dog />} />
          </Routes>
        </main>
      </div>
    </Provider>
  );
}

export default App;
