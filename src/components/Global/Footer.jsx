import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="Footer_1" className="space-y-4">
            <img src={images[0]} alt="Logo" className="h-12" />
            <p className="text-gray-300">Your trusted partner in creating amazing digital experiences. We bring innovation to life.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          
          <div id="Footer_2" className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div id="Footer_3" className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Digital Marketing</li>
            </ul>
          </div>
          
          <div id="Footer_4" className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center"><i className="fas fa-map-marker-alt mr-2"></i> 123 Business Street, Tech City</p>
              <p className="flex items-center"><i className="fas fa-phone mr-2"></i> +1 234 567 890</p>
              <p className="flex items-center"><i className="fas fa-envelope mr-2"></i> info@company.com</p>
            </div>
          </div>
        </div>
        
        <div id="Footer_5" className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;