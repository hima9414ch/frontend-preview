import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const QuickLinks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkLoginStatus();
  }, []);

  const links = [
    { id: 'QuickLinks_1', path: '/', icon: '🏠', label: 'Home' },
    { id: 'QuickLinks_2', path: '/about', icon: 'ℹ️', label: 'About Us' },
    { id: 'QuickLinks_3', path: '/contact', icon: '✉️', label: 'Contact' },
    { id: 'QuickLinks_4', path: '/services', icon: '🛠️', label: 'Services' },
    { id: 'QuickLinks_5', path: '/blog', icon: '📝', label: 'Blog' },
  ];

  return (
    <div id="QuickLinks_6" className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-l-xl shadow-lg z-50">
      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.id}
            id={link.id}
            to={link.path}
            className="flex items-center space-x-2 text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-1"
          >
            <span className="text-xl">{link.icon}</span>
            <span className="hidden group-hover:block">{link.label}</span>
          </Link>
        ))}
        {isLoggedIn && (
          <Link
            id="QuickLinks_7"
            to="/dashboard"
            className="flex items-center space-x-2 text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all duration-300 transform hover:translate-x-1 bg-gradient-to-r from-green-400 to-blue-400"
          >
            <span className="text-xl">👤</span>
            <span className="hidden group-hover:block">Dashboard</span>
          </Link>
        )}
      </nav>
      <div id="QuickLinks_8" className="mt-4 border-t border-white border-opacity-20 pt-4">
        <button
          className="w-full text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ⬆️
        </button>
      </div>
    </div>
  );
};

export default QuickLinks;