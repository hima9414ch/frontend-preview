import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span id="Header_3" className="ml-3 text-2xl font-bold">TechHub</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link id="Header_4" to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
            <Link id="Header_5" to="/products" className="hover:text-yellow-300 transition duration-300">Products</Link>
            <Link id="Header_6" to="/services" className="hover:text-yellow-300 transition duration-300">Services</Link>
            <Link id="Header_7" to="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
            <Link id="Header_8" to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link id="Header_9" to="/login" className="px-4 py-2 rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300">Login</Link>
            <Link id="Header_10" to="/signup" className="px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-yellow-300 hover:text-white transition duration-300">Sign Up</Link>
          </div>

          <button
            id="Header_11"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_12" className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-yellow-300 transition duration-300">Home</Link>
            <Link to="/products" className="block hover:text-yellow-300 transition duration-300">Products</Link>
            <Link to="/services" className="block hover:text-yellow-300 transition duration-300">Services</Link>
            <Link to="/about" className="block hover:text-yellow-300 transition duration-300">About</Link>
            <Link to="/contact" className="block hover:text-yellow-300 transition duration-300">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;