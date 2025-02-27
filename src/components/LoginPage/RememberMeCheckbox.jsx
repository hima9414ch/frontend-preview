import React, { useState } from 'react';

const RememberMeCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    localStorage.setItem('rememberMe', !isChecked);
  };

  return (
    <div id="RememberMeCheckbox_1" className="flex items-center space-x-2 select-none">
      <div className="relative">
        <input
          type="checkbox"
          id="remember"
          checked={isChecked}
          onChange={handleChange}
          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-md cursor-pointer checked:bg-blue-500 checked:border-blue-500 transition-all duration-200 ease-in-out"
        />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-200 ${isChecked ? 'opacity-100' : 'opacity-0'}`}>
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      </div>
      <label
        htmlFor="remember"
        className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors duration-200"
        id="RememberMeCheckbox_2"
      >
        Remember me
      </label>
    </div>
  );
};

export default RememberMeCheckbox;