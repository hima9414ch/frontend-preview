import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyDescription = ({ propertyId }) => {
  const [property, setProperty] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    fetchProperty();
  }, [propertyId]);

  if (!property) {
    return (
      <div id="PropertyDescription_1" className="animate-pulse p-6 bg-gray-100 rounded-lg">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    );
  }

  return (
    <div id="PropertyDescription_2" className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-full transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('features')}
          className={`px-4 py-2 rounded-full transition-all ${activeTab === 'features' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          Features
        </button>
        <button
          onClick={() => setActiveTab('location')}
          className={`px-4 py-2 rounded-full transition-all ${activeTab === 'location' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          Location
        </button>
      </div>

      <div className="space-y-6">
        {activeTab === 'overview' && (
          <div id="PropertyDescription_3" className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Property Overview</h2>
            <p className={`text-gray-600 leading-relaxed ${!isExpanded ? 'line-clamp-4' : ''}`}>
              {property.description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-700 mt-2 font-medium"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          </div>
        )}

        {activeTab === 'features' && (
          <div id="PropertyDescription_4" className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div id="PropertyDescription_5" className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Location Advantages</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
              <ul className="space-y-3">
                {property.locationAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div id="PropertyDescription_6" className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Property Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm text-gray-500">Size</span>
            <span className="block text-lg font-semibold text-gray-800">{property.size} sq ft</span>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm text-gray-500">Bedrooms</span>
            <span className="block text-lg font-semibold text-gray-800">{property.bedrooms}</span>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm text-gray-500">Bathrooms</span>
            <span className="block text-lg font-semibold text-gray-800">{property.bathrooms}</span>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm text-gray-500">Year Built</span>
            <span className="block text-lg font-semibold text-gray-800">{property.yearBuilt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;