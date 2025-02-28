import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/homepage');
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="flex items-center space-x-2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YourBrand</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link id="Header_3" to="/homepage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</Link>
            <Link id="Header_4" to="/listingpage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Listings</Link>
            {isAuthenticated && (
              <Link id="Header_5" to="/dashboardpage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Dashboard</Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <Link id="Header_6" to="/loginpage" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Login
              </Link>
            ) : (
              <button
                id="Header_7"
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Logout
              </button>
            )}
          </div>

          <button
            id="Header_8"
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {isMenuOpen && (
          <div id="Header_9" className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/homepage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</Link>
              <Link to="/listingpage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Listings</Link>
              {isAuthenticated && (
                <Link to="/dashboardpage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Dashboard</Link>
              )}
              {!isAuthenticated ? (
                <Link to="/loginpage" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Login</Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;