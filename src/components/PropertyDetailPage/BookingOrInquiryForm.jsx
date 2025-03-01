import React, { useState } from 'react';

const BookingOrInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactMethod: 'email',
          message: ''
        });
      } catch (error) {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div id="BookingOrInquiryForm_1" className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 id="BookingOrInquiryForm_2" className="text-2xl font-bold mb-6 text-gray-800 text-center">Make an Inquiry</h2>
      
      {submitStatus === 'success' && (
        <div id="BookingOrInquiryForm_3" className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          Your inquiry has been submitted successfully!
        </div>
      )}

      {submitStatus === 'error' && (
        <div id="BookingOrInquiryForm_4" className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label id="BookingOrInquiryForm_5" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            id="BookingOrInquiryForm_6"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label id="BookingOrInquiryForm_7" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="BookingOrInquiryForm_8"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label id="BookingOrInquiryForm_9" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            id="BookingOrInquiryForm_10"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label id="BookingOrInquiryForm_11" className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
          <select
            id="BookingOrInquiryForm_12"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <div>
          <label id="BookingOrInquiryForm_13" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="BookingOrInquiryForm_14"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          id="BookingOrInquiryForm_15"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
};

export default BookingOrInquiryForm;