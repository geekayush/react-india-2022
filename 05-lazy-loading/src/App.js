import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
const Breeds = lazy(() => import("./pages/Breeds"));
const Dogs = lazy(() => import("./pages/Dogs"));
const Dog = lazy(() => import("./pages/Dog"));
;

import "./static/css/app.css";

function App() {
  return (
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
  );
}

export default App;
