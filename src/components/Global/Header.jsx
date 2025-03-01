import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header id="Header_1" className="fixed w-full top-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RealEstate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="Header_3">
            <Link to="/home" className="nav-link hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link to="/propertydetails" className="nav-link hover:text-blue-600 transition-colors duration-200">Properties</Link>
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                id="Header_4"
              >
                <span>Profile</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50" id="Header_5">
                  <Link to="/userprofile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Sign Out</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            id="Header_6"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4" id="Header_7">
            <Link to="/home" className="block py-2 hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link to="/propertydetails" className="block py-2 hover:text-blue-600 transition-colors duration-200">Properties</Link>
            <Link to="/userprofile" className="block py-2 hover:text-blue-600 transition-colors duration-200">My Profile</Link>
            <Link to="/login" className="block py-2 hover:text-blue-600 transition-colors duration-200">Sign Out</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;