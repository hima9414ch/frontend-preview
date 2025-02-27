import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';

const MapIntegrationForProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties');
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35]
  });

  if (loading) {
    return (
      <div id="MapIntegrationForProperties_1" className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="MapIntegrationForProperties_2" className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div id="MapIntegrationForProperties_3" className="h-screen w-full relative">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.latitude, property.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2 max-w-sm">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="font-bold text-lg mb-1">{property.title}</h3>
                <p className="text-gray-600 mb-2">${property.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {property.bedrooms} beds • {property.bathrooms} baths • {property.sqft} sqft
                </p>
                <Link
                  to={`/property/${property.id}`}
                  className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-[1000]">
        <h2 className="text-lg font-bold mb-2">Map Controls</h2>
        <div className="flex flex-col gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
            Reset View
          </button>
          <select className="border rounded p-2">
            <option>Show All Properties</option>
            <option>For Sale Only</option>
            <option>For Rent Only</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MapIntegrationForProperties;