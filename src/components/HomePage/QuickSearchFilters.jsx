import React, { useState, useEffect } from 'react';

const QuickSearchFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    propertyType: '',
    priceRange: '',
    location: '',
    bedrooms: '',
    amenities: []
  });

  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/properties');
      const data = await response.json();
      setLocations([...new Set(data.map(property => property.location))]);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onFilterChange({ ...filters, [name]: value });
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => {
      const updatedAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: updatedAmenities };
    });
  };

  return (
    <div id="QuickSearchFilters_1" className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div id="QuickSearchFilters_2" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={filters.propertyType}
            onChange={(e) => handleFilterChange('propertyType', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div id="QuickSearchFilters_3" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          >
            <option value="">Any Price</option>
            <option value="0-100000">$0 - $100,000</option>
            <option value="100000-300000">$100,000 - $300,000</option>
            <option value="300000-500000">$300,000 - $500,000</option>
            <option value="500000+">$500,000+</option>
          </select>
        </div>

        <div id="QuickSearchFilters_4" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div id="QuickSearchFilters_5" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
      </div>

      <div id="QuickSearchFilters_6" className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
        <div className="flex flex-wrap gap-3">
          {['Pool', 'Garage', 'Garden', 'Gym', 'Security'].map((amenity) => (
            <button
              key={amenity}
              onClick={() => handleAmenityToggle(amenity)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filters.amenities.includes(amenity) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>

      <div id="QuickSearchFilters_7" className="mt-6 flex justify-end">
        <button
          onClick={() => setFilters({
            propertyType: '',
            priceRange: '',
            location: '',
            bedrooms: '',
            amenities: []
          })}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all mr-4"
        >
          Clear All
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          onClick={() => onFilterChange(filters)}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default QuickSearchFilters;