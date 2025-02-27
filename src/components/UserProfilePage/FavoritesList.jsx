import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('/api/user/favorites');
      setFavorites(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch favorites');
      setLoading(false);
    }
  };

  const removeFavorite = async (propertyId) => {
    try {
      await axios.delete(`/api/user/favorites/${propertyId}`);
      setFavorites(favorites.filter(fav => fav.id !== propertyId));
    } catch (err) {
      setError('Failed to remove from favorites');
    }
  };

  if (loading) {
    return (
      <div id="FavoritesList_1" className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="FavoritesList_2" className="text-red-500 text-center py-4">{error}</div>
    );
  }

  return (
    <div id="FavoritesList_3" className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Favorite Properties</h2>
      {favorites.length === 0 ? (
        <div id="FavoritesList_4" className="text-center text-gray-500 py-8">
          No favorite properties yet
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((property, index) => (
            <div
              key={property.id}
              id={`FavoritesList_${index + 5}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={images[index % images.length]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeFavorite(property.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    ${property.price.toLocaleString()}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>{property.beds} beds</span>
                    <span>•</span>
                    <span>{property.baths} baths</span>
                  </div>
                </div>
                <a
                  href={`/property/${property.id}`}
                  className="mt-4 block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;