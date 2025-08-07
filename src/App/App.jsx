import './App.css'

import { Routes, Route } from "react-router-dom";

import HomePage from "s/App/pages/HomePage/HomePage.jsx";
import Toc from "s/App/pages/TocPage/Toc.jsx";
import TopMenu from "s/components/TopMenu/index.js";

function App() {
    return (
        <div>
            <TopMenu/>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/toc" element={<Toc />} />

                {/* 404 */}
                <Route path="*" element={<h1>404: Страница не найдена</h1>} />
            </Routes>
        </div>
    )
}

export default App
