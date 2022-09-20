import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Breeds from "./pages/Breeds";
import Dogs from "./pages/Dogs";
import Dog from "./pages/Dog";


import "./static/css/app.css";

function App() {
    return (
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
    );
}

export default App;
