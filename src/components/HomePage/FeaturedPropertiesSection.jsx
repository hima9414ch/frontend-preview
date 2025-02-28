import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const FeaturedPropertiesSection = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties/list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'featured' })
        });
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([
          { id: 1, title: 'Luxury Villa', price: '$1,200,000', location: 'Beverly Hills', beds: 5, baths: 4, sqft: 4500 },
          { id: 2, title: 'Modern Apartment', price: '$450,000', location: 'Downtown', beds: 2, baths: 2, sqft: 1200 },
          { id: 3, title: 'Seaside Cottage', price: '$850,000', location: 'Malibu', beds: 3, baths: 2, sqft: 2000 },
          { id: 4, title: 'Urban Loft', price: '$650,000', location: 'Manhattan', beds: 1, baths: 1, sqft: 950 },
        ]);
      }
    };
    fetchProperties();
  }, []);

  return (
    <section id="FeaturedPropertiesSection_1" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 id="FeaturedPropertiesSection_2" className="text-4xl font-bold text-center mb-4 text-gray-800">Featured Properties</h2>
        <p id="FeaturedPropertiesSection_3" className="text-center text-gray-600 mb-12">Discover our hand-picked premium properties</p>
        
        <div id="FeaturedPropertiesSection_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              id={`FeaturedPropertiesSection_5_${index}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={images[index % images.length]}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                
                <div className="flex justify-between mb-4 text-sm text-gray-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} Sqft</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Property
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;