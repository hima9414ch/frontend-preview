import React from 'react';

const ErrorNotification = ({ message, onClose }) => {
  return (
    <div id="ErrorNotification_1" className="fixed top-4 right-4 flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 z-50">
      <div id="ErrorNotification_2" className="mr-3">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div id="ErrorNotification_3" className="flex-1">
        <p className="font-semibold">{message || 'An error occurred!'}</p>
      </div>
      <button
        id="ErrorNotification_4"
        onClick={onClose}
        className="ml-4 text-white hover:text-red-200 transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ErrorNotification;