import React, { useState } from 'react';

const NewsletterSignUp = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <div id="NewsletterSignUp_1" className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-xl shadow-2xl max-w-xl mx-auto my-8">
      <div id="NewsletterSignUp_2" className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Our Newsletter</h2>
        <p className="text-gray-100 text-lg">Get exclusive access to:</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div id="NewsletterSignUp_3" className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h3 className="text-white font-semibold">🎯 Weekly Tips</h3>
            <p className="text-gray-200 text-sm">Expert insights delivered to you</p>
          </div>
          <div id="NewsletterSignUp_4" className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h3 className="text-white font-semibold">🎁 Special Offers</h3>
            <p className="text-gray-200 text-sm">Exclusive deals and promotions</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div id="NewsletterSignUp_5" className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </form>
      {status === 'success' && (
        <div id="NewsletterSignUp_6" className="mt-4 text-center text-green-300">
          Thank you for subscribing! 🎉
        </div>
      )}
      <p className="text-xs text-center text-gray-300 mt-4">
        By subscribing, you agree to our Privacy Policy and Terms of Service
      </p>
    </div>
  );
};

export default NewsletterSignUp;