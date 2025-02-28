import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import Home from "./Home/Body.jsx";
import Dashboard from "./Dashboard/Body.jsx";
import BlogPost from "./Blog Post/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogpost" element={<BlogPost />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;
