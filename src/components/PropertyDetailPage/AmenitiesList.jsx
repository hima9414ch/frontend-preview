import React from 'react';
import images from '../assets/images';

const amenities = [
  { id: 'AmenitiesList_1', icon: images[0], title: 'Swimming Pool', description: 'Olympic-sized pool with heated water' },
  { id: 'AmenitiesList_2', icon: images[1], title: 'Fitness Center', description: '24/7 access to state-of-the-art equipment' },
  { id: 'AmenitiesList_3', icon: images[2], title: 'Spa & Wellness', description: 'Luxurious treatments and massages' },
  { id: 'AmenitiesList_4', icon: images[3], title: 'Restaurant', description: 'Fine dining with panoramic views' },
  { id: 'AmenitiesList_5', icon: images[4], title: 'Conference Rooms', description: 'Modern meeting spaces with AV equipment' },
  { id: 'AmenitiesList_6', icon: images[5], title: 'Parking', description: 'Secure underground parking facility' }
];

const AmenitiesList = () => {
  return (
    <div id="AmenitiesList_7" className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="AmenitiesList_8" className="text-4xl font-bold text-center mb-12 text-gray-900 hover:text-indigo-600 transition-colors duration-300">
          Our Premium Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              id={amenity.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={amenity.icon}
                  alt={amenity.title}
                  className="w-16 h-16 object-cover rounded-full bg-indigo-100 p-2"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-center">{amenity.description}</p>
              <button
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesList;