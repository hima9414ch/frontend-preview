import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const CaptchaVerification = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setMessage('');
    setIsVerified(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleVerify = () => {
    if (userInput === captchaText) {
      setIsVerified(true);
      setMessage('Verification successful!');
    } else {
      setMessage('Incorrect captcha. Please try again.');
      generateCaptcha();
    }
  };

  return (
    <div id="CaptchaVerification_1" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 space-y-6">
        <h2 id="CaptchaVerification_2" className="text-2xl font-bold text-center text-gray-800 mb-6">Captcha Verification</h2>
        
        <div id="CaptchaVerification_3" className="relative">
          <div className="bg-gray-100 p-4 rounded-lg select-none">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 opacity-20 transform -skew-x-12"></div>
              <p className="text-2xl font-bold tracking-wider text-center font-mono" style={{textDecoration: 'line-through', letterSpacing: '0.5em'}}>
                {captchaText}
              </p>
            </div>
          </div>
          
          <button
            id="CaptchaVerification_4"
            onClick={generateCaptcha}
            className="absolute -right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div id="CaptchaVerification_5" className="space-y-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter captcha text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          
          <button
            onClick={handleVerify}
            disabled={isVerified}
            className={`w-full py-2 rounded-lg font-semibold text-white transition-all ${isVerified ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isVerified ? 'Verified' : 'Verify'}
          </button>
        </div>

        {message && (
          <p id="CaptchaVerification_6" className={`text-center ${isVerified ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CaptchaVerification;