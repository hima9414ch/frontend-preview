import React, { useState } from 'react';

export default function PropertyTypeFilter() {
  const [selectedType, setSelectedType] = useState('');
  const propertyTypes = ['Apartment', 'House', 'Studio', 'Villa', 'Condo', 'Townhouse'];

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div id="PropertyTypeFilter_1" className="w-full max-w-md mx-auto p-4">
      <div className="relative">
        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 shadow-sm appearance-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out cursor-pointer hover:bg-gray-50"
          id="PropertyTypeFilter_2"
        >
          <option value="" disabled>Select Property Type</option>
          {propertyTypes.map((type, index) => (
            <option key={index} value={type} className="py-2">
              {type}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {selectedType && (
        <div id="PropertyTypeFilter_3" className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-700">Selected property type: <span className="font-semibold">{selectedType}</span></p>
        </div>
      )}
    </div>
  );
}