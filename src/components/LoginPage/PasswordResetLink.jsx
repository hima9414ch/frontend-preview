import React, { useState } from 'react';
import axios from 'axios';

const PasswordResetLink = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/auth/reset-password-link', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div id="PasswordResetLink_1" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="PasswordResetLink_2" className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div id="PasswordResetLink_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
        </div>
        <form id="PasswordResetLink_4" className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div id="PasswordResetLink_5" className="rounded-md shadow-sm -space-y-px">
            <div id="PasswordResetLink_6">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {message && (
            <div id="PasswordResetLink_7" className={`text-sm text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </div>
          )}

          <div id="PasswordResetLink_8">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing
                </span>
              ) : 'Send reset link'}
            </button>
          </div>
        </form>

        <div id="PasswordResetLink_9" className="text-center">
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 ease-in-out">Back to login</a>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetLink;