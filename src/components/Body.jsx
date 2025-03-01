import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import ListingPage from "./ListingPage/Body.jsx";
import PropertyDetailPage from "./PropertyDetailPage/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/listingpage" element={<ListingPage />} />
        <Route path="/propertydetailpage" element={<PropertyDetailPage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;