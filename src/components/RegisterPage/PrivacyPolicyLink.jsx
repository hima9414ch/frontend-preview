import React from 'react';

const PrivacyPolicyLink = () => {
  return (
    <div id="PrivacyPolicyLink_1" className="flex items-center justify-center min-h-[200px] bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
      <div id="PrivacyPolicyLink_2" className="max-w-2xl w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
        <h2 id="PrivacyPolicyLink_3" className="text-2xl font-semibold text-gray-800 mb-4 text-center">Privacy Policy</h2>
        <p id="PrivacyPolicyLink_4" className="text-gray-600 mb-6 text-center">Learn how we collect, use, and protect your personal information</p>
        <div id="PrivacyPolicyLink_5" className="flex justify-center">
          <a
            href="/privacy-policy"
            id="PrivacyPolicyLink_6"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <span id="PrivacyPolicyLink_7" className="mr-2">Read Our Privacy Policy</span>
            <svg
              id="PrivacyPolicyLink_8"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <div id="PrivacyPolicyLink_9" className="mt-6 text-center text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyLink;