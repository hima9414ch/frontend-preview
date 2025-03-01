import React, { useState, useEffect } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaParking, FaHome } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { id } = useParams();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) return (
    <div id="PropertyDetails_1" className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div id="PropertyDetails_2" className="max-w-7xl mx-auto px-4 py-8">
      <h1 id="PropertyDetails_3" className="text-4xl font-bold text-gray-800 mb-6">{property.title}</h1>
      
      <div id="PropertyDetails_4" className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div id="PropertyDetails_5" className="flex border-b">
          {['overview', 'features', 'location', 'pricing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-lg font-medium transition-colors duration-200 ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div id="PropertyDetails_6" className="p-6">
          {activeTab === 'overview' && (
            <div id="PropertyDetails_7" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FaBed className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="text-lg font-semibold">{property.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FaBath className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="text-lg font-semibold">{property.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FaRulerCombined className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="text-lg font-semibold">{property.area} sq ft</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FaHome className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Property Type</p>
                    <p className="text-lg font-semibold">{property.type}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>
          )}

          {activeTab === 'features' && (
            <div id="PropertyDetails_8" className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'location' && (
            <div id="PropertyDetails_9" className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-700">{property.address}</span>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg">
                {/* Map integration would go here */}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div id="PropertyDetails_10" className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                <p className="text-2xl font-bold">${property.price.toLocaleString()}</p>
                <p className="text-sm opacity-80">Listed Price</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-gray-500">Est. Monthly Payment</p>
                  <p className="text-xl font-semibold">${(property.price * 0.005).toLocaleString()}</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-gray-500">Price per sq ft</p>
                  <p className="text-xl font-semibold">${Math.round(property.price / property.area)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;