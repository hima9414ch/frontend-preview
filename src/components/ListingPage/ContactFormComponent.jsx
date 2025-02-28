import React, { useState } from 'react';

export default function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div id="ContactForm_1" className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 id="ContactForm_2" className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Agent</h2>
      <form id="ContactForm_3" onSubmit={handleSubmit} className="space-y-4">
        <div id="ContactForm_4" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
            required
          />
        </div>
        <div id="ContactForm_5" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
            required
          />
        </div>
        <div id="ContactForm_6" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
            required
          />
        </div>
        <div id="ContactForm_7" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none resize-none"
            required
          ></textarea>
        </div>
        <button
          id="ContactForm_8"
          type="submit"
          className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-0.5 transition duration-200"
        >
          Contact Agent
        </button>
      </form>
    </div>
  );
}