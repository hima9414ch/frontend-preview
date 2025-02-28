import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/home');
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="flex items-center space-x-4">
            <Link to="/home" className="flex items-center">
              <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
              <span className="text-white font-bold text-xl ml-2 hover:text-gray-200 transition-colors">BrandName</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div id="Header_3" className="hidden md:flex items-center space-x-6">
            <Link to="/home" className="text-white hover:text-gray-200 transition-colors font-medium">Home</Link>
            <Link to="/dashboard" className="text-white hover:text-gray-200 transition-colors font-medium">Dashboard</Link>
            <Link to="/blog-post" className="text-white hover:text-gray-200 transition-colors font-medium">Blog Post</Link>
          </div>

          {/* Authentication Controls */}
          <div id="Header_4" className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
                >
                  <img src={images[1]} alt="User" className="h-8 w-8 rounded-full" />
                  <span>John Doe</span>
                </button>
                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-white hover:bg-white hover:text-blue-600 border-2 border-white rounded-md transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-white text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="Header_5" className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/home" className="text-white hover:text-gray-200 transition-colors">Home</Link>
              <Link to="/dashboard" className="text-white hover:text-gray-200 transition-colors">Dashboard</Link>
              <Link to="/blog-post" className="text-white hover:text-gray-200 transition-colors">Blog Post</Link>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-200 transition-colors text-left"
                >
                  Logout
                </button>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-center text-white hover:bg-white hover:text-blue-600 border-2 border-white rounded-md transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-center bg-white text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;