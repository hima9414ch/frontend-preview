import React, { useState } from 'react';

export default function CallToAction() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div id="CallToAction_1" className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
      <div id="CallToAction_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="CallToAction_3" className="lg:flex lg:items-center lg:justify-between">
          <div id="CallToAction_4" className="max-w-xl">
            <h2 id="CallToAction_5" className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Ready to Transform Your Business?
            </h2>
            <p id="CallToAction_6" className="mt-5 text-xl text-indigo-100">
              Join thousands of satisfied customers who have taken their business to the next level.
            </p>
          </div>
          <div id="CallToAction_7" className="mt-10 lg:mt-0 lg:ml-8">
            <form id="CallToAction_8" onSubmit={handleSubmit} className="sm:flex">
              <div id="CallToAction_9" className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="CallToAction_10"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  placeholder="Enter your email"
                />
              </div>
              <div id="CallToAction_11" className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </form>
            <p id="CallToAction_12" className="mt-3 text-sm text-indigo-100">
              Free 14-day trial. No credit card required.
            </p>
          </div>
        </div>
        <div id="CallToAction_13" className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div id="CallToAction_14" className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition duration-300">
            <h3 id="CallToAction_15" className="text-xl font-bold text-white">24/7 Support</h3>
            <p id="CallToAction_16" className="mt-2 text-indigo-100">Get help whenever you need it with our round-the-clock customer support.</p>
          </div>
          <div id="CallToAction_17" className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition duration-300">
            <h3 id="CallToAction_18" className="text-xl font-bold text-white">Flexible Plans</h3>
            <p id="CallToAction_19" className="mt-2 text-indigo-100">Choose from our range of customizable plans that grow with your business.</p>
          </div>
          <div id="CallToAction_20" className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition duration-300">
            <h3 id="CallToAction_21" className="text-xl font-bold text-white">Secure Platform</h3>
            <p id="CallToAction_22" className="mt-2 text-indigo-100">Your data is protected with enterprise-grade security measures.</p>
          </div>
        </div>
      </div>
    </div>
  );
}