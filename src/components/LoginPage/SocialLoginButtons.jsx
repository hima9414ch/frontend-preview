import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const SocialLoginButtons = () => {
  const handleGoogleLogin = () => {
    window.location.href = '/api/auth/google';
  };

  const handleFacebookLogin = () => {
    window.location.href = '/api/auth/facebook';
  };

  const handleTwitterLogin = () => {
    window.location.href = '/api/auth/twitter';
  };

  const handleGithubLogin = () => {
    window.location.href = '/api/auth/github';
  };

  return (
    <div id="SocialLoginButtons_1" className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
      <button
        id="SocialLoginButtons_2"
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md"
      >
        <FaGoogle className="text-red-500 text-xl" />
        Continue with Google
      </button>

      <button
        id="SocialLoginButtons_3"
        onClick={handleFacebookLogin}
        className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-[#1877F2] hover:bg-[#1865F2] text-white font-semibold rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
      >
        <FaFacebook className="text-xl" />
        Continue with Facebook
      </button>

      <button
        id="SocialLoginButtons_4"
        onClick={handleTwitterLogin}
        className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-[#1DA1F2] hover:bg-[#1A91DA] text-white font-semibold rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
      >
        <FaTwitter className="text-xl" />
        Continue with Twitter
      </button>

      <button
        id="SocialLoginButtons_5"
        onClick={handleGithubLogin}
        className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-[#24292e] hover:bg-[#2f363d] text-white font-semibold rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
      >
        <FaGithub className="text-xl" />
        Continue with GitHub
      </button>

      <div id="SocialLoginButtons_6" className="flex items-center justify-center space-x-4">
        <hr className="w-full border-gray-300" />
        <span className="text-gray-500 font-medium">OR</span>
        <hr className="w-full border-gray-300" />
      </div>
    </div>
  );
};

export default SocialLoginButtons;