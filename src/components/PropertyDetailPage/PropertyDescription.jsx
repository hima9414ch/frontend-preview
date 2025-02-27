import React, { useEffect, useState } from 'react';
import images from '../assets/images';

const PropertyDescription = () => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch property details from backend
    fetch('/api/property/123')
      .then(res => res.json())
      .then(data => setProperty(data))
      .catch(err => console.error(err));
  }, []);

  const dummyProperty = {
    title: 'Luxury Beachfront Villa',
    price: '$2,500,000',
    location: 'Malibu, California',
    beds: 5,
    baths: 4,
    area: '4,500 sq ft',
    description: 'Experience coastal living at its finest in this stunning beachfront villa. Featuring panoramic ocean views, high-end finishes, and direct beach access. The open-concept living space seamlessly connects to expansive terraces perfect for entertaining.',
    features: [
      'Private Beach Access',
      'Infinity Pool',
      'Gourmet Kitchen',
      'Home Theater',
      'Wine Cellar',
      'Smart Home System'
    ]
  };

  const propertyData = property || dummyProperty;

  return (
    <div id="PropertyDescription_1" className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <img 
            id="PropertyDescription_2"
            src={images[0] || 'https://example.com/luxury-home.jpg'} 
            alt="Property" 
            className="w-full h-[400px] object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <div id="PropertyDescription_3" className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600">Bedrooms</p>
              <p className="text-xl font-bold text-gray-800">{propertyData.beds}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600">Bathrooms</p>
              <p className="text-xl font-bold text-gray-800">{propertyData.baths}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <p className="text-gray-600">Area</p>
              <p className="text-xl font-bold text-gray-800">{propertyData.area}</p>
            </div>
          </div>
        </div>

        <div id="PropertyDescription_4" className="space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{propertyData.title}</h1>
            <p className="text-2xl font-semibold text-blue-600">{propertyData.price}</p>
            <p className="text-lg text-gray-600">{propertyData.location}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
            <p className="text-gray-600 leading-relaxed">{propertyData.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
            <div className="grid grid-cols-2 gap-4">
              {propertyData.features.map((feature, index) => (
                <div 
                  key={index}
                  id={`PropertyDescription_${index + 5}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            id="PropertyDescription_11"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            onClick={() => window.location.href = '/contact-agent'}
          >
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;