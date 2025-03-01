import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyTeaserCards = () => {
  const [properties, setProperties] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties');
      const data = await response.json();
      setProperties(data || mockProperties);
    } catch (error) {
      setProperties(mockProperties);
    }
  };

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const mockProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: '$1,250,000',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: 3200,
      image: images[0] || 'https://example.com/luxury-villa.jpg',
      description: 'Stunning modern villa with panoramic views'
    },
    {
      id: 2,
      title: 'Downtown Loft',
      price: '$750,000',
      location: 'Manhattan, NY',
      beds: 2,
      baths: 2,
      sqft: 1800,
      image: images[1] || 'https://example.com/downtown-loft.jpg',
      description: 'Spacious loft in prime location'
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      price: '$980,000',
      location: 'Miami Beach, FL',
      beds: 3,
      baths: 2,
      sqft: 2100,
      image: images[2] || 'https://example.com/beach-condo.jpg',
      description: 'Direct ocean access with private beach'
    }
  ];

  return (
    <div id="PropertyTeaserCards_1" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div
            key={property.id}
            id={`PropertyTeaserCards_${property.id + 1}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => toggleFavorite(property.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
              >
                <svg
                  className={`w-6 h-6 ${favorites.includes(property.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
                <p className="text-lg font-bold text-green-600">{property.price}</p>
              </div>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex items-center gap-4 mb-4 text-gray-700">
                <span>{property.beds} beds</span>
                <span>•</span>
                <span>{property.baths} baths</span>
                <span>•</span>
                <span>{property.sqft} sqft</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {property.location}
                </p>
                <a
                  href={`/property/${property.id}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyTeaserCards;