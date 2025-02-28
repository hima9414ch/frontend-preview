import React, { useState } from 'react';

const LocationFilter = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    { id: 1, name: 'City Center', description: 'Vibrant urban area with modern amenities', properties: 150 },
    { id: 2, name: 'Suburb', description: 'Peaceful residential neighborhoods', properties: 200 },
    { id: 3, name: 'Rural', description: 'Serene countryside settings', properties: 75 },
    { id: 4, name: 'Beachfront', description: 'Stunning oceanview properties', properties: 45 },
    { id: 5, name: 'Mountain View', description: 'Scenic mountain locations', properties: 60 }
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  return (
    <div id="LocationFilter_1" className="w-full max-w-md mx-auto p-4">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 text-left bg-white border rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700">
              {selectedLocation ? selectedLocation.name : 'Select Location'}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div id="LocationFilter_2" className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => handleLocationSelect(location)}
                className="p-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200 border-b last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.description}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {location.properties} properties
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedLocation && (
        <div id="LocationFilter_3" className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800">Selected Location:</h4>
          <p className="text-lg font-semibold text-blue-900">{selectedLocation.name}</p>
          <p className="text-sm text-blue-700">{selectedLocation.description}</p>
          <p className="text-sm font-medium text-blue-800 mt-2">{selectedLocation.properties} available properties</p>
        </div>
      )}
    </div>
  );
};

export default LocationFilter;