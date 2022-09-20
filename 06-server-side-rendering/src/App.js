import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./static/css/base.css";
import "./static/css/app.css";

import Header from "./components/Header/Header";
const Breeds = lazy(() => import("./pages/Breeds"));
const Dogs = lazy(() => import("./pages/Dogs"));
const Dog = lazy(() => import("./pages/Dog"));
import * as _ from "lodash";

import { Provider } from "react-redux";

function App({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <main>
          <Suspense fallback="Loading page...">
            <Routes>
              <Route path="/" element={<Breeds />} />
              <Route path="/dogs/:breed" element={<Dogs />} />
              <Route path="/:name" element={<Dog />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Provider>
  );
}

export default App;
