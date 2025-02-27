import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/homepage' },
    { name: 'Listings', path: '/listingpage' },
    ...(!isAuthenticated ? [
      { name: 'Login', path: '/loginpage' },
      { name: 'Register', path: '/registerpage' }
    ] : [
      { name: 'Profile', path: '/userprofilepage' }
    ])
  ];

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/homepage" className="flex items-center space-x-3">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" />
            <span id="Header_3" className="text-white text-xl font-bold hover:text-blue-200 transition-colors">PropertyHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div id="Header_4" className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                id={`Header_${index + 5}`}
                className={`text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md ${location.pathname === link.path ? 'bg-blue-700' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Header_11"
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-200 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="Header_12" className="md:hidden mt-4 bg-blue-700 rounded-lg shadow-xl">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                id={`Header_${index + 13}`}
                className={`block text-white hover:bg-blue-600 transition-colors py-2 px-4 ${location.pathname === link.path ? 'bg-blue-800' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;