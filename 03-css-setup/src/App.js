import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Breeds from "./pages/Breeds";
import Dogs from "./pages/Dogs";
import Dog from "./pages/Dog";
// Modular Dog
// import DogWithCSSModule from "./pages/Dog_css_m";
// Using Carousel Styled (CSS-in-JS) component
// import DogWithStyled from "./pages/Dog_with_styled";

import * as _ from "lodash"

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Breeds />} />
                    <Route path="/dogs/:breed" element={<Dogs />} />
                    <Route path="/:name" element={<Dog />} />
                    {/* Uncomment to check css modules approach! */}
                    {/* <Route path="/:name" element={<DogWithCSSModule />} /> */}
                    {/* Uncomment to check CSS-in-JS approach! */}
                    {/* <Route path="/:name" element={<DogWithStyled />} /> */}
                </Routes>
            </main>
        </div>
    );
}

export default App;
