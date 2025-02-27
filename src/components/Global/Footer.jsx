import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4" id="Footer_1">
            <img src={images[0]} alt="Logo" className="h-12 w-auto"/>
            <p className="text-gray-300">Your trusted partner in creating amazing digital experiences.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="space-y-4" id="Footer_2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4" id="Footer_3">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-apps" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-300 hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/consulting" className="text-gray-300 hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4" id="Footer_4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-gray-400"></i>
                <span className="text-gray-300">123 Business Street, NY 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-gray-400"></i>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-gray-400"></i>
                <span className="text-gray-300">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700" id="Footer_5">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;