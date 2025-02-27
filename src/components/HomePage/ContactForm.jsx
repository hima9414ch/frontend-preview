import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div id="ContactForm_1" className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 mt-10 mb-10">
      <h2 id="ContactForm_2" className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
      
      {submitStatus === 'success' && (
        <div id="ContactForm_3" className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div id="ContactForm_4" className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          Something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div id="ContactForm_5">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div id="ContactForm_6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div id="ContactForm_7">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
            placeholder="Your message here..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;