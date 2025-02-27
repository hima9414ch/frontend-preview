import React, { useState } from 'react';
import axios from 'axios';

const EmailVerificationPrompt = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/verify-email', { email });
      setMessage('Verification email sent! Please check your inbox.');
    } catch (error) {
      setMessage('Error sending verification email. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div id="EmailVerificationPrompt_1" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div id="EmailVerificationPrompt_2" className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <div id="EmailVerificationPrompt_3" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
          <p className="text-gray-600">Enter your email address to receive a verification link</p>
        </div>

        <form id="EmailVerificationPrompt_4" onSubmit={handleVerification} className="space-y-6">
          <div id="EmailVerificationPrompt_5" className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <button
            id="EmailVerificationPrompt_6"
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Send Verification Link'}
          </button>

          {message && (
            <div id="EmailVerificationPrompt_7" className={`text-center p-3 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}
        </form>

        <div id="EmailVerificationPrompt_8" className="mt-6 text-center text-sm text-gray-600">
          <p>Didn't receive the email? Check your spam folder or</p>
          <button
            onClick={handleVerification}
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPrompt;