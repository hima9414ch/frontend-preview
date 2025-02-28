import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaHome, FaDollarSign } from 'react-icons/fa';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/properties/list', {
        location,
        minPrice,
        maxPrice,
        type: propertyType
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <div id="SearchBar_1" className="w-full max-w-4xl mx-auto p-6">
      <div id="SearchBar_2" className="bg-white rounded-xl shadow-2xl p-6 backdrop-blur-lg bg-opacity-90 border border-gray-200">
        <div id="SearchBar_3" className="flex flex-col md:flex-row gap-4">
          <div id="SearchBar_4" className="flex-1">
            <div id="SearchBar_5" className="relative">
              <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="SearchBar_6"
                type="text"
                placeholder="Enter location..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          
          <div id="SearchBar_7" className="flex-1 flex gap-2">
            <div id="SearchBar_8" className="relative flex-1">
              <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="SearchBar_9"
                type="number"
                placeholder="Min Price"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div id="SearchBar_10" className="relative flex-1">
              <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="SearchBar_11"
                type="number"
                placeholder="Max Price"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          
          <select
            id="SearchBar_12"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="condo">Condo</option>
          </select>
          
          <button
            id="SearchBar_13"
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;