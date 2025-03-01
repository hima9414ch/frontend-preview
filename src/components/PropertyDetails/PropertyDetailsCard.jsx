import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import images from '../assets/images';

const PropertyDetailsCard = () => {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`/api/properties/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };
    fetchPropertyDetails();
  }, [id]);

  if (!property) {
    return (
      <div id="PropertyDetailsCard_1" className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="PropertyDetailsCard_2" className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
      <div className="grid md:grid-cols-2 gap-8">
        <div id="PropertyDetailsCard_3" className="space-y-4">
          <img
            src={images[0]}
            alt="Property"
            className="w-full h-[300px] object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="flex gap-2 overflow-x-auto py-2">
            {[1, 2, 3].map((_, index) => (
              <img
                key={index}
                src={images[index + 1]}
                alt={`Property view ${index + 1}`}
                className="w-24 h-24 rounded-md object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div id="PropertyDetailsCard_4" className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">Luxury Villa with Ocean View</h1>
            <p className="text-2xl font-semibold text-blue-600">$1,250,000</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">
                <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-600">123 Ocean Drive, Miami Beach, FL</span>
            </div>
          </div>

          <div id="PropertyDetailsCard_5" className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="text-center">
              <p className="text-gray-600">Bedrooms</p>
              <p className="text-xl font-semibold">4</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Bathrooms</p>
              <p className="text-xl font-semibold">3.5</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Square Ft</p>
              <p className="text-xl font-semibold">3,500</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Year Built</p>
              <p className="text-xl font-semibold">2020</p>
            </div>
          </div>

          <div id="PropertyDetailsCard_6" className="space-y-3">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Pool</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Garden</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Garage</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Smart Home</span>
              </li>
            </ul>
          </div>

          <div id="PropertyDetailsCard_7" className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
              Schedule a Visit
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold">
              Ask for Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;