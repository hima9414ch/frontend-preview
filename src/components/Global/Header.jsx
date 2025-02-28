import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/home');
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/home" className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300" id="Header_2">
              <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            </Link>
            <div className="hidden md:flex space-x-6" id="Header_3">
              <Link to="/home" className="text-white hover:text-blue-200 font-medium transition duration-300 px-3 py-2 rounded-lg hover:bg-white/10">
                Home
              </Link>
              {isAuthenticated && (
                <Link to="/dashboard" className="text-white hover:text-blue-200 font-medium transition duration-300 px-3 py-2 rounded-lg hover:bg-white/10">
                  Dashboard
                </Link>
              )}
              <Link to="/blogpost" className="text-white hover:text-blue-200 font-medium transition duration-300 px-3 py-2 rounded-lg hover:bg-white/10">
                Blog Post
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4" id="Header_4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 text-white hover:text-blue-200 transition duration-300"
                >
                  <img src={images[1]} alt="Profile" className="h-8 w-8 rounded-full" />
                  <span className="hidden md:inline">My Profile</span>
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-white hover:text-blue-200 font-medium transition duration-300 px-4 py-2 rounded-lg border border-white hover:bg-white/10"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-blue-600 font-medium transition duration-300 px-4 py-2 rounded-lg hover:bg-blue-100"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;