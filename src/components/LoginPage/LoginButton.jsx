import React, { useState } from 'react';

const LoginButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      id="LoginButton_1"
      className={`px-6 py-2.5 text-sm font-semibold transition-all duration-300 rounded-full ${isHovered ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white transform scale-105' : 'bg-white text-gray-800 border-2 border-gray-300'} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div id="LoginButton_2" className="flex items-center justify-center space-x-2">
        <svg
          id="LoginButton_3"
          className={`w-5 h-5 ${isHovered ? 'text-white' : 'text-gray-600'}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        <span id="LoginButton_4">Sign In</span>
      </div>
    </button>
  );
};

export default LoginButton;