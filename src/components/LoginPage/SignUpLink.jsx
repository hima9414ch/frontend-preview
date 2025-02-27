import React from 'react';
import { Link } from 'react-router-dom';

const SignUpLink = () => {
  return (
    <div id="SignUpLink_1" className="flex items-center justify-center min-h-[200px] bg-gradient-to-r from-purple-600 to-blue-500 p-8">
      <div id="SignUpLink_2" className="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
        <h2 id="SignUpLink_3" className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p id="SignUpLink_4" className="text-gray-100 mb-6">Join our community today and unlock exclusive features!</p>
        <Link
          to="/signup"
          id="SignUpLink_5"
          className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          Sign Up Now
        </Link>
        <p id="SignUpLink_6" className="mt-4 text-sm text-gray-200">
          Already have an account?
          <Link to="/login" id="SignUpLink_7" className="ml-2 text-white hover:text-purple-200 underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpLink;