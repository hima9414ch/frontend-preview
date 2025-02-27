import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationMap = () => {
  const position = [20.5937, 78.9629];
  const locations = [
    { id: 1, name: 'Delhi Office', position: [28.6139, 77.2090], description: 'Main Headquarters' },
    { id: 2, name: 'Mumbai Branch', position: [19.0760, 72.8777], description: 'Western Region Office' },
    { id: 3, name: 'Bangalore Tech Hub', position: [12.9716, 77.5946], description: 'Technology Center' },
  ];

  return (
    <div id="LocationMap_1" className="w-full p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <h2 id="LocationMap_2" className="text-3xl font-bold text-center mb-8 text-indigo-800">Our Locations</h2>
      
      <div id="LocationMap_3" className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div id="LocationMap_4" className="grid md:grid-cols-2 gap-6">
          <div id="LocationMap_5" className="p-6">
            <h3 id="LocationMap_6" className="text-2xl font-semibold mb-4 text-gray-800">Find Us Here</h3>
            <div id="LocationMap_7" className="space-y-4">
              {locations.map((location) => (
                <div key={location.id} id={`LocationMap_${location.id + 7}`} className="p-4 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition duration-300">
                  <h4 className="font-semibold text-indigo-700">{location.name}</h4>
                  <p className="text-gray-600">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div id="LocationMap_11" className="h-[500px] w-full">
            <MapContainer
              center={position}
              zoom={5}
              style={{ height: '100%', width: '100%' }}
              className="rounded-lg overflow-hidden"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location) => (
                <Marker key={location.id} position={location.position}>
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-semibold">{location.name}</h3>
                      <p>{location.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;