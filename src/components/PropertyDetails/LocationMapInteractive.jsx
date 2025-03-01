import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import images from '../assets/images';

const LocationMapInteractive = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [amenities, setAmenities] = useState([]);

  const mapStyles = {
    height: '70vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.0060
  };

  const amenityTypes = [
    { type: 'School', icon: '🏫', locations: [
      { lat: 40.7150, lng: -74.0080, name: 'Central High School' },
      { lat: 40.7110, lng: -74.0040, name: 'Primary School' }
    ]},
    { type: 'Shopping', icon: '🛍️', locations: [
      { lat: 40.7140, lng: -74.0020, name: 'City Mall' },
      { lat: 40.7120, lng: -74.0070, name: 'Shopping Plaza' }
    ]},
    { type: 'Transport', icon: '🚉', locations: [
      { lat: 40.7135, lng: -74.0050, name: 'Metro Station' },
      { lat: 40.7125, lng: -74.0030, name: 'Bus Terminal' }
    ]}
  ];

  useEffect(() => {
    // Simulating API call to fetch amenities
    setAmenities(amenityTypes);
  }, []);

  return (
    <div id="LocationMapInteractive_1" className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Location & Nearby Amenities</h2>
        <p className="text-gray-600">Explore the neighborhood and discover what's nearby</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            id={`LocationMapInteractive_${index + 2}`}
            className="flex items-center bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span className="mr-2">{amenity.icon}</span>
            <span className="font-medium text-gray-700">{amenity.type}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            {/* Property Marker */}
            <Marker
              position={defaultCenter}
              icon={{
                url: images[0],
                scaledSize: { width: 40, height: 40 }
              }}
            />

            {/* Amenity Markers */}
            {amenities.map((amenityType) =>
              amenityType.locations.map((location, index) => (
                <Marker
                  key={`${amenityType.type}-${index}`}
                  position={location}
                  icon={{
                    url: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><text y='15' font-size='15'>${amenityType.icon}</text></svg>`,
                    scaledSize: { width: 20, height: 20 }
                  }}
                  onClick={() => setSelectedPlace({ ...location, type: amenityType.type })}
                />
              ))
            )}

            {selectedPlace && (
              <InfoWindow
                position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div id="LocationMapInteractive_3" className="p-2">
                  <h3 className="font-semibold text-gray-800">{selectedPlace.name}</h3>
                  <p className="text-gray-600 text-sm">{selectedPlace.type}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      <div id="LocationMapInteractive_4" className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Location Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-blue-500">🏃</span>
            <p className="text-gray-600">Walking distance to metro</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-green-500">🌳</span>
            <p className="text-gray-600">Near to parks</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-purple-500">🏥</span>
            <p className="text-gray-600">Medical facilities nearby</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMapInteractive;