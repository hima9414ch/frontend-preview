import React, { useState } from 'react';

const PasswordRecoveryLink = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Reset instructions sent to your email!'
        });
        setTimeout(() => setIsModalOpen(false), 3000);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send reset instructions.'
      });
    }
  };

  return (
    <div id="PasswordRecoveryLink_1">
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 hover:underline focus:outline-none"
        id="PasswordRecoveryLink_2"
      >
        Forgot Password?
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" id="PasswordRecoveryLink_3">
          <div className="bg-white rounded-lg p-8 w-96 shadow-2xl transform transition-all" id="PasswordRecoveryLink_4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800" id="PasswordRecoveryLink_5">Reset Password</h2>
            <form onSubmit={handleSubmit} className="space-y-4" id="PasswordRecoveryLink_6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" id="PasswordRecoveryLink_7">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                  id="PasswordRecoveryLink_8"
                />
              </div>

              {status.message && (
                <div
                  className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  id="PasswordRecoveryLink_9"
                >
                  {status.message}
                </div>
              )}

              <div className="flex justify-end space-x-3" id="PasswordRecoveryLink_10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                  id="PasswordRecoveryLink_11"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  id="PasswordRecoveryLink_12"
                >
                  Send Reset Instructions
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordRecoveryLink;