import React, { useState, useEffect } from 'react';

const PropertiesFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [propertyTypes, setPropertyTypes] = useState({
    house: false,
    apartment: false,
    villa: false,
    condo: false
  });
  const [bedrooms, setBedrooms] = useState(0);
  const [filteredCount, setFilteredCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredProperties = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/properties/filter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ priceRange, propertyTypes, bedrooms })
        });
        const data = await response.json();
        setFilteredCount(data.count);
      } catch (error) {
        console.error('Error fetching filtered properties:', error);
      }
      setLoading(false);
    };

    fetchFilteredProperties();
  }, [priceRange, propertyTypes, bedrooms]);

  const handleTypeChange = (type) => {
    setPropertyTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div id="PropertiesFilter_1" className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-8">
      <h2 id="PropertiesFilter_2" className="text-2xl font-bold text-gray-800 mb-6">Filter Properties</h2>
      
      <div id="PropertiesFilter_3" className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Price Range</label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="1000000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-600">${priceRange[0].toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <input
            type="range"
            min="0"
            max="1000000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-600">${priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      <div id="PropertiesFilter_4" className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Property Type</label>
        <div className="grid grid-cols-2 gap-3">
          {Object.keys(propertyTypes).map(type => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={type}
                checked={propertyTypes[type]}
                onChange={() => handleTypeChange(type)}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={type} className="ml-2 text-sm font-medium text-gray-700 capitalize">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div id="PropertiesFilter_5" className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Bedrooms</label>
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(parseInt(e.target.value))}
          className="w-full p-2.5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={0}>Any</option>
          {[1,2,3,4,5].map(num => (
            <option key={num} value={num}>{num}+ Beds</option>
          ))}
        </select>
      </div>

      <div id="PropertiesFilter_6" className="mt-6 p-4 bg-gray-50 rounded-md">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <p className="text-center text-gray-700">
            <span className="font-semibold">{filteredCount}</span> properties found
          </p>
        )}
      </div>

      <button
        id="PropertiesFilter_7"
        className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
        onClick={() => console.log('Apply filters')}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default PropertiesFilter;