import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'user', password: 'pass' })
      });
      if (response.ok) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST'
      });
      if (response.ok) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header id="Header_1" className="fixed top-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-auto mr-2" />
              <span id="Header_3" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RealEstate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              id="Header_4"
              to="/home"
              className={`${location.pathname === '/home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-300`}
            >
              Home
            </Link>
            <Link
              id="Header_5"
              to="/listing"
              className={`${location.pathname === '/listing' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-300`}
            >
              Listings
            </Link>
            <Link
              id="Header_6"
              to="/propertydetail"
              className={`${location.pathname === '/propertydetail' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-300`}
            >
              Properties
            </Link>
            <button
              id="Header_7"
              onClick={isLoggedIn ? handleLogout : handleLogin}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Header_8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="Header_9" className="md:hidden mt-4 pb-4">
            <Link
              to="/home"
              className="block py-2 text-gray-600 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/listing"
              className="block py-2 text-gray-600 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Listings
            </Link>
            <Link
              to="/propertydetail"
              className="block py-2 text-gray-600 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <button
              onClick={isLoggedIn ? handleLogout : handleLogin}
              className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;