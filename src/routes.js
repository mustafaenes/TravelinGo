// src/routes.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './views/MainPage/MainPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Diğer sayfaları da burada tanımlayabilirsiniz */}
        </Routes>
    )
}

export default AppRoutes;
