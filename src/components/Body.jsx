import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import Home from "./Home/Body.jsx";
import PropertyDetails from "./PropertyDetails/Body.jsx";
import Login from "./Login/Body.jsx";
import UserProfile from "./UserProfile/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;