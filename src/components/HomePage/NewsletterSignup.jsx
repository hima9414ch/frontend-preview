import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setStatus('Success! Thank you for subscribing.');
        setEmail('');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="NewsletterSignup_1" className="bg-gradient-to-r from-purple-600 to-blue-600 min-h-[400px] flex items-center justify-center px-4">
      <div id="NewsletterSignup_2" className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        <h2 id="NewsletterSignup_3" className="text-3xl font-bold text-gray-800 mb-2 text-center">Stay Updated</h2>
        <p id="NewsletterSignup_4" className="text-gray-600 mb-6 text-center">Subscribe to our newsletter and get the latest updates, news, and exclusive offers.</p>
        
        <form id="NewsletterSignup_5" onSubmit={handleSubmit} className="space-y-4">
          <div id="NewsletterSignup_6" className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              required
            />
          </div>
          
          <button
            id="NewsletterSignup_7"
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Subscribe Now
          </button>
        </form>
        
        {status && (
          <p id="NewsletterSignup_8" className={`mt-4 text-center ${status.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
        
        <div id="NewsletterSignup_9" className="mt-6 text-center text-sm text-gray-500">
          <p>By subscribing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;