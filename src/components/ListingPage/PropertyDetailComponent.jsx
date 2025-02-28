import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const PropertyDetailComponent = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.post('/api/properties/list', {
          propertyId: 'specific_property_id'
        });
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property details:', error);
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, []);

  if (loading) {
    return (
      <div id="PropertyDetailComponent_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="PropertyDetailComponent_2" className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="PropertyDetailComponent_3" className="relative overflow-hidden rounded-xl">
          <img 
            src={images[0] || 'https://example.com/default-property.jpg'} 
            alt="Property" 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
            For Sale
          </div>
        </div>

        <div id="PropertyDetailComponent_4" className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            Luxury Villa with Ocean View
          </h1>

          <div id="PropertyDetailComponent_5" className="flex items-center space-x-4">
            <span className="text-4xl font-bold text-blue-600">
              $1,250,000
            </span>
            <span className="text-gray-500 text-lg">
              $450/sq.ft
            </span>
          </div>

          <div id="PropertyDetailComponent_6" className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>4 Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>3 Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>2,800 sq.ft</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Built 2020</span>
            </div>
          </div>

          <p id="PropertyDetailComponent_7" className="text-gray-600 leading-relaxed">
            Stunning luxury villa featuring breathtaking ocean views, modern architecture, and premium finishes throughout. This exceptional property offers spacious living areas, a gourmet kitchen, private pool, and extensive outdoor entertainment spaces. Located in an exclusive neighborhood with easy access to amenities.
          </p>

          <div id="PropertyDetailComponent_8" className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex-1">
              Schedule Viewing
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailComponent;