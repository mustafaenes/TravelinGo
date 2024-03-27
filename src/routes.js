// src/routes.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './views/MainPage/MainPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import CitiesPage from './views/CitiesPage/CitiesPage';
import ContactWithUsPage from './views/ContactWithUsPage/ContactWithUsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cities' element={<CitiesPage />} />
            <Route path='/contact' element={<ContactWithUsPage />} />
            {/* Diğer sayfaları da burada tanımlayabilirsiniz */}
        </Routes>
    )
}

export default AppRoutes;
