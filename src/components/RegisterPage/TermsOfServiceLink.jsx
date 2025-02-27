import React from 'react';

const TermsOfServiceLink = () => {
  return (
    <div id="TermsOfServiceLink_1" className="flex justify-center items-center min-h-[100px] p-4">
      <div id="TermsOfServiceLink_2" className="text-center">
        <p id="TermsOfServiceLink_3" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
          By continuing, you agree to our{' '}
          <a
            id="TermsOfServiceLink_4"
            href="/terms-of-service"
            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-300"
          >
            Terms of Service
          </a>
          {' '}and{' '}
          <a
            id="TermsOfServiceLink_5"
            href="/privacy-policy"
            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfServiceLink;