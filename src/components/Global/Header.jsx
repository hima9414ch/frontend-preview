import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="Header_1" className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="flex items-center">
            <img src={images[0]} alt="Logo" className="h-12 w-12 rounded-full border-2 border-white" />
            <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">TechStore</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link id="Header_3" to="/" className="hover:text-pink-400 transition-colors duration-300">Home</Link>
            <Link id="Header_4" to="/products" className="hover:text-pink-400 transition-colors duration-300">Products</Link>
            <Link id="Header_5" to="/about" className="hover:text-pink-400 transition-colors duration-300">About</Link>
            <Link id="Header_6" to="/contact" className="hover:text-pink-400 transition-colors duration-300">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link id="Header_7" to="/login" className="px-4 py-2 rounded-full border-2 border-pink-500 hover:bg-pink-500 transition-colors duration-300">Login</Link>
            <Link id="Header_8" to="/signup" className="px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors duration-300">Sign Up</Link>
          </div>

          <button
            id="Header_9"
            className="md:hidden focus:outline-none"
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
          <div id="Header_10" className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-pink-400 transition-colors duration-300">Home</Link>
            <Link to="/products" className="block hover:text-pink-400 transition-colors duration-300">Products</Link>
            <Link to="/about" className="block hover:text-pink-400 transition-colors duration-300">About</Link>
            <Link to="/contact" className="block hover:text-pink-400 transition-colors duration-300">Contact</Link>
            <Link to="/login" className="block hover:text-pink-400 transition-colors duration-300">Login</Link>
            <Link to="/signup" className="block hover:text-pink-400 transition-colors duration-300">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;