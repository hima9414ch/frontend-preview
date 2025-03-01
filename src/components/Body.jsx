import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";
import ProductListPage from "./ProductListPage/Body.jsx";
import ProductDetailPage from "./ProductDetailPage/Body.jsx";

const Body = () => {
return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        <Route path="/productlistpage" element={<ProductListPage />} />
        <Route path="/productdetailpage" element={<ProductDetailPage />} />
        </Routes>
      <Footer />
    </Router>
);
};

export default Body;