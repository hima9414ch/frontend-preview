import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const FeaturedPropertiesShowcase = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div id="FeaturedPropertiesShowcase_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const dummyProperties = [
    {
      id: 1,
      title: 'Luxury Beachfront Villa',
      location: 'Malibu, California',
      price: '$5,900,000',
      features: ['5 Beds', '6 Baths', '6,200 sqft'],
      image: images[0] || 'https://example.com/luxury-villa.jpg'
    },
    {
      id: 2,
      title: 'Modern Downtown Penthouse',
      location: 'Manhattan, New York',
      price: '$3,750,000',
      features: ['3 Beds', '3.5 Baths', '3,100 sqft'],
      image: images[1] || 'https://example.com/penthouse.jpg'
    },
    {
      id: 3,
      title: 'Mountain View Estate',
      location: 'Aspen, Colorado',
      price: '$8,250,000',
      features: ['7 Beds', '8 Baths', '8,500 sqft'],
      image: images[2] || 'https://example.com/estate.jpg'
    }
  ];

  return (
    <div id="FeaturedPropertiesShowcase_2" className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(properties.length ? properties : dummyProperties).map((property) => (
          <div
            key={property.id}
            id={`FeaturedPropertiesShowcase_${property.id + 3}`}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">
                {property.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{property.title}</h3>
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">{property.location}</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {property.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold transform transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPropertiesShowcase;