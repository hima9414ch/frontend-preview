import React, { useState } from 'react';

const MapViewToggle = () => {
  const [isMapView, setIsMapView] = useState(false);

  return (
    <div id="MapViewToggle_1" className="flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-2">
        <div className="flex space-x-1">
          <button
            id="MapViewToggle_2"
            onClick={() => setIsMapView(false)}
            className={`px-4 py-2 rounded-l-lg transition-all duration-300 ${!isMapView ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <span>List View</span>
            </div>
          </button>
          <button
            id="MapViewToggle_3"
            onClick={() => setIsMapView(true)}
            className={`px-4 py-2 rounded-r-lg transition-all duration-300 ${isMapView ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Map View</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapViewToggle;