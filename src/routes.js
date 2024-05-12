// src/routes.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './views/MainPage/MainPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
import CitiesPage from './views/CitiesPage/CitiesPage';
import ContactWithUsPage from './views/ContactWithUsPage/ContactWithUsPage';
import DetailPage from './views/DetailPage/DetailPage';
import RestaurantsPage from './views/RestaurantsPage/RestaurantsPage';
import HotelsPage from './views/HotelsPage/HotelsPage';
import DestinationsPage from './views/DestinationsPage/DestionationsPage';
import HotelDetailPage from './views/HotelsPage/HotelDetailPage';
import DestinationDetailPage from './views/DestinationsPage/DestinationDetailPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cities' element={<CitiesPage />} />
            <Route path='/contact' element={<ContactWithUsPage />} />
            <Route path='/detail/:locationId' element={<DetailPage />} />
            <Route path='/restaurants/:city' element={<RestaurantsPage />} />
            <Route path='/hotels/:city' element={<HotelsPage />} />
            <Route path='/destinations/:city' element={<DestinationsPage />} />
            <Route path='/HotelDetail/:locationId' element={<HotelDetailPage />} />
            <Route path='/DestinationDetail/:locationId' element={<DestinationDetailPage />} />
            {/* Diğer sayfaları da burada tanımlayabilirsiniz */}
        </Routes>
    )
}

export default AppRoutes;
