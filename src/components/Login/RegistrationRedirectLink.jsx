import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationRedirectLink = () => {
  return (
    <div id="RegistrationRedirectLink_1" className="flex flex-col items-center justify-center p-6 space-y-4">
      <div className="text-center">
        <p className="text-gray-600 mb-4" id="RegistrationRedirectLink_2">Don't have an account yet?</p>
        <Link 
          to="/register"
          id="RegistrationRedirectLink_3"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800 transition-all duration-300 ease-in-out"
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 dark:bg-gray-900">
            Create New Account
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </span>
        </Link>
      </div>
      <div className="mt-4 text-sm text-gray-500" id="RegistrationRedirectLink_4">
        <span>Join thousands of users who trust our platform</span>
      </div>
    </div>
  );
};

export default RegistrationRedirectLink;