import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="Footer_1" className="space-y-4">
            <h3 className="text-xl font-bold">Real Estate Hub</h3>
            <p className="text-gray-300">Your trusted partner in finding the perfect property.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400 transition-colors"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="hover:text-pink-400 transition-colors"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
              <a href="https://youtube.com" className="hover:text-red-400 transition-colors"><FaYoutube size={24} /></a>
            </div>
          </div>
          
          <div id="Footer_2" className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/homepage" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/listingpage" className="hover:text-gray-300 transition-colors">Listings</Link></li>
              <li><Link to="/propertydetailpage" className="hover:text-gray-300 transition-colors">Property Details</Link></li>
            </ul>
          </div>
          
          <div id="Footer_3" className="space-y-4">
            <h3 className="text-xl font-bold">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/loginpage" className="hover:text-gray-300 transition-colors">Login</Link></li>
              <li><Link to="/registerpage" className="hover:text-gray-300 transition-colors">Register</Link></li>
              <li><Link to="/userprofilepage" className="hover:text-gray-300 transition-colors">My Profile</Link></li>
            </ul>
          </div>
          
          <div id="Footer_4" className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Real Estate Avenue</li>
              <li>Property City, PC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@realestatehub.com</li>
            </ul>
          </div>
        </div>
        
        <div id="Footer_5" className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Real Estate Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;