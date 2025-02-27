import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SuccessMessageDisplay = ({ isVisible = true, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div id="SuccessMessageDisplay_1" className="fixed top-4 right-4 z-50 animate-slideIn">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-6 max-w-md transform transition-all hover:scale-105">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 id="SuccessMessageDisplay_2" className="text-lg font-semibold text-white mb-1">Registration Successful!</h3>
            <p id="SuccessMessageDisplay_3" className="text-green-100">Your account has been created successfully.</p>
          </div>
          <button
            id="SuccessMessageDisplay_4"
            onClick={onClose}
            className="text-green-100 hover:text-white transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div id="SuccessMessageDisplay_5" className="mt-4">
          <Link
            to="/login"
            className="inline-block bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors duration-300"
          >
            Proceed to Login
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SuccessMessageDisplay;