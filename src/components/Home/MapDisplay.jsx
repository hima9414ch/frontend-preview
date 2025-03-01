import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import images from '../assets/images';

const MapDisplay = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.0060 });

  useEffect(() => {
    fetch('/api/properties/locations')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error('Error fetching properties:', err));
  }, []);

  const mapStyles = {
    height: '70vh',
    width: '100%'
  };

  const defaultProperties = [
    { id: 1, lat: 40.7128, lng: -74.0060, price: '$500,000', address: '123 Main St', image: images[0] },
    { id: 2, lat: 40.7580, lng: -73.9855, price: '$750,000', address: '456 Park Ave', image: images[1] },
    { id: 3, lat: 40.7829, lng: -73.9654, price: '$1,200,000', address: '789 Fifth Ave', image: images[2] }
  ];

  return (
    <div id="MapDisplay_1" className="container mx-auto p-4">
      <div id="MapDisplay_2" className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div id="MapDisplay_3" className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <h2 className="text-2xl font-bold">Property Map</h2>
          <p className="text-sm opacity-80">Explore properties across the city</p>
        </div>
        
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            id="MapDisplay_4"
            mapContainerStyle={mapStyles}
            zoom={13}
            center={mapCenter}
          >
            {(properties.length ? properties : defaultProperties).map(property => (
              <Marker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
                onClick={() => setSelectedProperty(property)}
                icon={{
                  url: '/marker-icon.png',
                  scaledSize: { width: 40, height: 40 }
                }}
              />
            ))}

            {selectedProperty && (
              <InfoWindow
                position={{ lat: selectedProperty.lat, lng: selectedProperty.lng }}
                onCloseClick={() => setSelectedProperty(null)}
              >
                <div id="MapDisplay_5" className="p-2 max-w-xs">
                  <img 
                    src={selectedProperty.image} 
                    alt="Property"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-bold text-gray-800">{selectedProperty.address}</h3>
                  <p className="text-blue-600 font-semibold">{selectedProperty.price}</p>
                  <button 
                    onClick={() => window.location.href = `/property/${selectedProperty.id}`}
                    className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>

        <div id="MapDisplay_6" className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button 
                onClick={() => setMapCenter(mapCenter)}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Recenter Map
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search This Area
              </button>
            </div>
            <div className="text-sm text-gray-600">
              {properties.length || defaultProperties.length} properties found
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDisplay;