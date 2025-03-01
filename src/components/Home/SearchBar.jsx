import React, { useState } from 'react';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    price_range: '',
    type: ''
  });

  const propertyTypes = ['Apartment', 'House', 'Villa', 'Condo', 'Townhouse'];
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco'];
  const priceRanges = ['0-100k', '100k-300k', '300k-500k', '500k-1M', '1M+'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/properties?' + new URLSearchParams(searchParams));
      const data = await response.json();
      console.log('Search results:', data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <div id="SearchBar_1" className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div id="SearchBar_2" className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              list="locations"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Enter location"
            />
            <datalist id="locations">
              {locations.map((loc, index) => (
                <option key={index} value={loc} />
              ))}
            </datalist>
          </div>

          <div id="SearchBar_3" className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select
              name="price_range"
              value={searchParams.price_range}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out appearance-none"
            >
              <option value="">Select Price Range</option>
              {priceRanges.map((range, index) => (
                <option key={index} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div id="SearchBar_4" className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
            <select
              name="type"
              value={searchParams.type}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out appearance-none"
            >
              <option value="">Select Property Type</option>
              {propertyTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div id="SearchBar_5" className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 transition duration-200 ease-in-out"
          >
            Search Properties
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;