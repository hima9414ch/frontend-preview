import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import ListingPage from "./ListingPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import PropertyDetailPage from "./PropertyDetailPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";
import UserProfilePage from "./UserProfilePage/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/listingpage" element={<ListingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/propertydetailpage" element={<PropertyDetailPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/userprofilepage" element={<UserProfilePage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;