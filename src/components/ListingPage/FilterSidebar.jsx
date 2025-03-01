import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 1000000,
    propertyType: [],
    bedrooms: 0,
    bathrooms: 0,
    location: ''
  });

  const [isOpen, setIsOpen] = useState(true);

  const propertyTypes = ['House', 'Apartment', 'Condo', 'Villa', 'Townhouse'];

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      try {
        const response = await axios.get('/api/properties', { params: filters });
        onFilterChange(response.data);
      } catch (error) {
        console.error('Error fetching filtered properties:', error);
      }
    };
    fetchFilteredProperties();
  }, [filters]);

  const handlePropertyTypeChange = (type) => {
    setFilters(prev => ({
      ...prev,
      propertyType: prev.propertyType.includes(type)
        ? prev.propertyType.filter(t => t !== type)
        : [...prev.propertyType, type]
    }));
  };

  return (
    <div className={`transition-all duration-300 ${isOpen ? 'w-80' : 'w-16'}`}>
      <div id="FilterSidebar_1" className="bg-white shadow-lg rounded-lg p-4 h-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-full mb-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        {isOpen && (
          <div className="space-y-6">
            <div id="FilterSidebar_2" className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Price Range</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={filters.priceMax}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceMax: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>${filters.priceMax.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div id="FilterSidebar_3" className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Property Type</h3>
              <div className="space-y-2">
                {propertyTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.propertyType.includes(type)}
                      onChange={() => handlePropertyTypeChange(type)}
                      className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div id="FilterSidebar_4" className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Bedrooms</h3>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="0">Any</option>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}+ beds</option>
                ))}
              </select>
            </div>

            <div id="FilterSidebar_5" className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Bathrooms</h3>
              <select
                value={filters.bathrooms}
                onChange={(e) => setFilters(prev => ({ ...prev, bathrooms: parseInt(e.target.value) }))}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="0">Any</option>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}+ baths</option>
                ))}
              </select>
            </div>

            <div id="FilterSidebar_6">
              <h3 className="text-lg font-semibold mb-3">Location</h3>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Enter location"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={() => setFilters({
                priceMin: 0,
                priceMax: 1000000,
                propertyType: [],
                bedrooms: 0,
                bathrooms: 0,
                location: ''
              })}
              className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;