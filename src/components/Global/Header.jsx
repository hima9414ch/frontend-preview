import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span id="Header_3" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BrandName</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link id="Header_4" to="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</Link>
            <Link id="Header_5" to="/products" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Products</Link>
            <Link id="Header_6" to="/services" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Services</Link>
            <Link id="Header_7" to="/about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">About</Link>
            <Link id="Header_8" to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link id="Header_9" to="/login" className="px-4 py-2 text-purple-600 hover:text-purple-700 transition-colors duration-300">Login</Link>
            <Link id="Header_10" to="/signup" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-300">Sign Up</Link>
          </div>

          <button id="Header_11" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 hover:text-purple-600 transition-colors duration-300">
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
          <div id="Header_12" className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300">Products</Link>
            <Link to="/services" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300">Services</Link>
            <Link to="/about" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact</Link>
            <div className="pt-4 border-t border-gray-200">
              <Link to="/login" className="block text-purple-600 hover:text-purple-700 transition-colors duration-300">Login</Link>
              <Link to="/signup" className="block mt-2 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg py-2 hover:opacity-90 transition-opacity duration-300">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;