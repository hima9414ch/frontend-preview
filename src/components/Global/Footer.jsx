import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-[#343a40] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="Footer_2" className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-[#d1d1d1] leading-relaxed">
              We are committed to providing exceptional service and creating meaningful connections in the real estate industry.
            </p>
          </div>
          
          <div id="Footer_3" className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/homepage" className="text-[#d1d1d1] hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/listingpage" className="text-[#d1d1d1] hover:text-white transition-colors">Listings</Link></li>
              <li><Link to="/loginpage" className="text-[#d1d1d1] hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/dashboardpage" className="text-[#d1d1d1] hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          
          <div id="Footer_4" className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-[#d1d1d1]">
                <FaPhone className="text-lg" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1234567890</a>
              </p>
              <p className="flex items-center gap-2 text-[#d1d1d1]">
                <FaEnvelope className="text-lg" />
                <a href="mailto:info@company.com" className="hover:text-white transition-colors">info@company.com</a>
              </p>
            </div>
          </div>
          
          <div id="Footer_5" className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="http://facebook.com/company" target="_blank" rel="noopener noreferrer" className="text-[#d1d1d1] hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="http://twitter.com/company" target="_blank" rel="noopener noreferrer" className="text-[#d1d1d1] hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="http://instagram.com/company" target="_blank" rel="noopener noreferrer" className="text-[#d1d1d1] hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div id="Footer_6" className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-[#d1d1d1]">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;