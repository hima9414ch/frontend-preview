import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const UserListings = () => {
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchListings();
  }, [page]);

  const fetchListings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/properties?page=${page}&limit=6`);
      const data = await response.json();
      setListings(prev => page === 1 ? data : [...prev, ...data]);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/properties/${id}`, { method: 'DELETE' });
      setListings(listings.filter(listing => listing.id !== id));
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  return (
    <div id="UserListings_1" className="container mx-auto px-4 py-8">
      <h2 id="UserListings_2" className="text-3xl font-bold text-gray-800 mb-8">My Listings</h2>
      
      <div id="UserListings_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <div
            key={listing.id}
            id={`UserListings_${index + 4}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={images[index % images.length]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 space-x-2">
                <button
                  onClick={() => handleDelete(listing.id)}
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{listing.title}</h3>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">${listing.price}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">{listing.bedrooms} beds</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{listing.bathrooms} baths</span>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{listing.location}</span>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => window.location.href = `/edit-listing/${listing.id}`}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {listings.length > 0 && (
        <div id="UserListings_5" className="mt-8 text-center">
          <button
            onClick={() => setPage(prev => prev + 1)}
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}

      {listings.length === 0 && !loading && (
        <div id="UserListings_6" className="text-center py-12">
          <p className="text-gray-600 text-xl">No listings found. Start by creating your first property listing!</p>
        </div>
      )}
    </div>
  );
};

export default UserListings;