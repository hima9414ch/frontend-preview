import React, { useState, useEffect } from 'react';

const PropertySortComponent = () => {
  const [properties, setProperties] = useState([]);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    fetchProperties();
  }, [sortBy]);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`/api/properties?sort=${sortBy}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <div id="PropertySortComponent_1" className="w-full max-w-4xl mx-auto p-4">
      <div id="PropertySortComponent_2" className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">Sort Properties</h2>
        <div id="PropertySortComponent_3" className="flex gap-2">
          <button
            onClick={() => handleSortChange('price_asc')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${sortBy === 'price_asc' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            Price: Low to High
          </button>
          <button
            onClick={() => handleSortChange('price_desc')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${sortBy === 'price_desc' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            Price: High to Low
          </button>
          <button
            onClick={() => handleSortChange('date_desc')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${sortBy === 'date_desc' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            Newest First
          </button>
          <button
            onClick={() => handleSortChange('popularity')}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${sortBy === 'popularity' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            Most Popular
          </button>
        </div>
      </div>

      <div id="PropertySortComponent_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">{property.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySortComponent;