import React, { useState } from 'react';
import axios from 'axios';

const PropertyFilterComponent = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    location: '',
    bedrooms: '',
    bathrooms: ''
  });

  const handleFilterChange = async (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    try {
      const response = await axios.get('/api/properties', { params: newFilters });
      onFilterChange(response.data);
    } catch (error) {
      console.error('Error fetching filtered properties:', error);
    }
  };

  const handleReset = () => {
    setFilters({
      type: '',
      minPrice: '',
      maxPrice: '',
      location: '',
      bedrooms: '',
      bathrooms: ''
    });
  };

  return (
    <div id="PropertyFilterComponent_1" className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div id="PropertyFilterComponent_2" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div id="PropertyFilterComponent_3" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Min Price</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            placeholder="Min Price"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div id="PropertyFilterComponent_4" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            placeholder="Max Price"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div id="PropertyFilterComponent_5" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Enter location"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div id="PropertyFilterComponent_6" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </div>

        <div id="PropertyFilterComponent_7" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
          <select
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </div>
      </div>

      <div id="PropertyFilterComponent_8" className="mt-6 flex justify-end space-x-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          Reset Filters
        </button>
        <button
          onClick={() => handleFilterChange({})}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default PropertyFilterComponent;