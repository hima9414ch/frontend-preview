import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img id="Footer_1" src={images[0]} alt="Logo" className="h-12 w-auto" />
            <p id="Footer_2" className="text-gray-300">Your trusted partner in digital solutions. Building tomorrow's technology today.</p>
            <div className="flex space-x-4">
              <a id="Footer_3" href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a id="Footer_4" href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a id="Footer_5" href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 id="Footer_6" className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link id="Footer_7" to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link id="Footer_8" to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link id="Footer_9" to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link id="Footer_10" to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 id="Footer_11" className="text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li id="Footer_12" className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Business Avenue, Tech City, 12345</span>
              </li>
              <li id="Footer_13" className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li id="Footer_14" className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <span>info@example.com</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 id="Footer_15" className="text-xl font-semibold">Newsletter</h3>
            <p id="Footer_16" className="text-gray-300">Subscribe to our newsletter for updates and news.</p>
            <form className="space-y-2">
              <input
                id="Footer_17"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                id="Footer_18"
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p id="Footer_19" className="text-gray-300">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;