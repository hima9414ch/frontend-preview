import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const PropertyCardList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch properties');
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div id="PropertyCardList_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="PropertyCardList_2" className="text-center text-red-500 p-4">{error}</div>
    );
  }

  if (properties.length === 0) {
    return (
      <div id="PropertyCardList_3" className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 rounded-lg p-8">
        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-gray-700">No Properties Found</h3>
        <p className="mt-2 text-gray-500">Try adjusting your filters to find more properties</p>
      </div>
    );
  }

  return (
    <div id="PropertyCardList_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {properties.map((property, index) => (
        <div
          key={property.id}
          id={`PropertyCardList_${index + 5}`}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="relative">
            <img
              src={images[index % images.length]}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ${property.price?.toLocaleString()}
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">{property.location}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>{property.bedrooms} Beds</span>
              <span>{property.bathrooms} Baths</span>
              <span>{property.sqft} sqft</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{property.rating}</span>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCardList;