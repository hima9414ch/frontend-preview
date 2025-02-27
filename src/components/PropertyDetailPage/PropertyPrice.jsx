import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyPrice = ({ propertyId }) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}`);
        setPrice(response.data.price);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch price');
        setLoading(false);
      }
    };
    fetchPrice();
  }, [propertyId]);

  if (loading) {
    return (
      <div id="PropertyPrice_1" className="animate-pulse bg-gray-200 rounded-lg p-4 w-64 h-16"></div>
    );
  }

  if (error) {
    return (
      <div id="PropertyPrice_2" className="text-red-500 font-medium">Price information unavailable</div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div id="PropertyPrice_3" className="relative group">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-lg font-medium">Price</span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Market Value</span>
        </div>
        <div className="mt-2">
          <span className="text-4xl font-bold text-indigo-600" id="PropertyPrice_4">
            {formatPrice(price)}
          </span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            Last updated today
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </div>
  );
};

export default PropertyPrice;