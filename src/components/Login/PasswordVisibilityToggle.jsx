import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const PasswordVisibilityToggle = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="PasswordVisibilityToggle_1" className="relative w-full">
      <input
        id="PasswordVisibilityToggle_2"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent pr-12 bg-gray-50 hover:bg-gray-100 transition-all duration-300"
        placeholder="Enter your password"
      />
      <button
        id="PasswordVisibilityToggle_3"
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <AiOutlineEyeInvisible className="w-5 h-5" />
        ) : (
          <AiOutlineEye className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default PasswordVisibilityToggle;