import './App.css'

import { Routes, Route } from "react-router-dom";

import HomePage from "s/App/pages/HomePage/HomePage.jsx";
import Toc from "s/App/pages/TocPage/Toc.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/toc" element={<Toc />} />

            {/* 404 */}
            <Route path="*" element={<h1>404: Страница не найдена</h1>} />
        </Routes>
    )
}

export default App
