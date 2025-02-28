import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationLink = () => {
  return (
    <div id="RegistrationLink_1" className="flex items-center justify-center p-4">
      <Link
        to="/register"
        className="group relative inline-block text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 ease-in-out"
      >
        <span id="RegistrationLink_2" className="relative inline-block">
          Not registered yet? Sign up here!
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
        <span id="RegistrationLink_3" className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          →
        </span>
      </Link>
    </div>
  );
};

export default RegistrationLink;