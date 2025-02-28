import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBed, FaBath, FaRulerCombined, FaWifi, FaCar, FaSwimmingPool, FaDumbbell } from 'react-icons/fa';

const PropertyFeaturesComponent = ({ propertyId }) => {
  const [features, setFeatures] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.post('/api/properties/list', { propertyId });
        setFeatures(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property features:', error);
        setLoading(false);
      }
    };
    fetchFeatures();
  }, [propertyId]);

  if (loading) {
    return (
      <div id="PropertyFeaturesComponent_1" className="animate-pulse p-6 rounded-lg bg-gray-100">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  const defaultFeatures = {
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 2000,
    amenities: ['WiFi', 'Parking', 'Pool', 'Gym']
  };

  const data = features || defaultFeatures;

  return (
    <div id="PropertyFeaturesComponent_2" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Property Features</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div id="PropertyFeaturesComponent_3" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FaBed className="text-blue-500 text-2xl" />
          <div>
            <p className="text-gray-600 text-sm">Bedrooms</p>
            <p className="text-gray-900 font-semibold">{data.bedrooms}</p>
          </div>
        </div>

        <div id="PropertyFeaturesComponent_4" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FaBath className="text-blue-500 text-2xl" />
          <div>
            <p className="text-gray-600 text-sm">Bathrooms</p>
            <p className="text-gray-900 font-semibold">{data.bathrooms}</p>
          </div>
        </div>

        <div id="PropertyFeaturesComponent_5" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FaRulerCombined className="text-blue-500 text-2xl" />
          <div>
            <p className="text-gray-600 text-sm">Square Footage</p>
            <p className="text-gray-900 font-semibold">{data.squareFootage} sq ft</p>
          </div>
        </div>
      </div>

      <div id="PropertyFeaturesComponent_6" className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.amenities.map((amenity, index) => (
            <div key={index} id={`PropertyFeaturesComponent_${index + 7}`} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              {amenity === 'WiFi' && <FaWifi className="text-blue-500" />}
              {amenity === 'Parking' && <FaCar className="text-blue-500" />}
              {amenity === 'Pool' && <FaSwimmingPool className="text-blue-500" />}
              {amenity === 'Gym' && <FaDumbbell className="text-blue-500" />}
              <span className="text-gray-700">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFeaturesComponent;