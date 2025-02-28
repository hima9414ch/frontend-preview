import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div id="Footer_2" className="container mx-auto px-4">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="Footer_4" className="text-center md:text-left">
            <h3 id="Footer_5" className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav id="Footer_6" className="space-y-2">
              <Link to="/privacy-policy" className="block hover:text-blue-400 transition duration-300">Privacy Policy</Link>
              <Link to="/terms-of-use" className="block hover:text-blue-400 transition duration-300">Terms of Use</Link>
            </nav>
          </div>
          
          <div id="Footer_7" className="text-center">
            <h3 id="Footer_8" className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div id="Footer_9" className="flex justify-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          <div id="Footer_10" className="text-center md:text-right">
            <h3 id="Footer_11" className="text-xl font-semibold mb-4">Newsletter</h3>
            <form id="Footer_12" className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div id="Footer_13" className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p id="Footer_14" className="text-gray-400">
            Copyright © 2023 YourWebsiteName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;