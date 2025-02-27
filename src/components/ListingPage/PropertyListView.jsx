import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const PropertyListView = () => {
  const [properties, setProperties] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties');
      const data = await response.json();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div id="PropertyListView_1" className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="PropertyListView_2" className="container mx-auto px-4 py-8">
      <div id="PropertyListView_3" className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Available Properties</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 transition duration-300`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 transition duration-300`}
          >
            List View
          </button>
        </div>
      </div>

      <div id="PropertyListView_4" className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}`}>
        {properties.map((property, index) => (
          <Link
            to={`/property/${property.id}`}
            key={property.id}
            className={`${viewMode === 'grid' ? 'block' : 'flex'} bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300`}
          >
            <div id="PropertyListView_5" className={`${viewMode === 'grid' ? 'w-full' : 'w-1/3'} relative`}>
              <img
                src={images[index % images.length]}
                alt={property.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ${property.price.toLocaleString()}
              </div>
            </div>
            <div id="PropertyListView_6" className={`${viewMode === 'grid' ? 'p-6' : 'w-2/3 p-6'}`}>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="fas fa-bed"></i> {property.bedrooms} beds
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-bath"></i> {property.bathrooms} baths
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-ruler-combined"></i> {property.sqft} sqft
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyListView;