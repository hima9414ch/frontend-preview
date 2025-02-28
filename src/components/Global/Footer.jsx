import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer_1" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 sticky bottom-0 w-full">
      <div id="Footer_2" className="container mx-auto px-4">
        <div id="Footer_3" className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav id="Footer_4" className="flex space-x-6">
            <Link to="/home" className="hover:text-blue-400 transition duration-300 ease-in-out">Home</Link>
            <Link to="/dashboard" className="hover:text-blue-400 transition duration-300 ease-in-out">Dashboard</Link>
            <Link to="/blog-post" className="hover:text-blue-400 transition duration-300 ease-in-out">Blog Post</Link>
          </nav>
          
          <div id="Footer_5" className="text-center">
            <p className="text-sm">&copy; {currentYear} Your Company. All rights reserved.</p>
          </div>
          
          <div id="Footer_6" className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors duration-300" 
               aria-label="Visit our Facebook page">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors duration-300" 
               aria-label="Visit our Twitter page">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-pink-400 transition-colors duration-300" 
               aria-label="Visit our Instagram page">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors duration-300" 
               aria-label="Visit our LinkedIn page">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;