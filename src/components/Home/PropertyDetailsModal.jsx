import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyDetailsModal = ({ isOpen, onClose, propertyId }) => {
  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`/api/properties/${propertyId}`);
        const data = await response.json();
        setProperty(data || {
          title: 'Luxury Waterfront Villa',
          price: '$2,500,000',
          address: '123 Ocean View Drive, Miami, FL',
          description: 'Stunning waterfront property with modern architecture and premium finishes. Features include an infinity pool, private dock, and panoramic ocean views.',
          bedrooms: 4,
          bathrooms: 3.5,
          sqft: 3200,
          amenities: ['Pool', 'Beach Access', 'Smart Home', 'Wine Cellar', 'Home Theater', 'Gourmet Kitchen'],
          images: images.slice(0, 5)
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };
    if (isOpen) fetchPropertyDetails();
  }, [propertyId, isOpen]);

  if (!isOpen || loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="PropertyDetailsModal_1">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" id="PropertyDetailsModal_2">
        <div className="relative" id="PropertyDetailsModal_3">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
            id="PropertyDetailsModal_4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative h-96" id="PropertyDetailsModal_5">
            <img
              src={property.images[activeImage]}
              alt={property.title}
              className="w-full h-full object-cover rounded-t-xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" id="PropertyDetailsModal_6">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full ${activeImage === index ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          <div className="p-6" id="PropertyDetailsModal_7">
            <div className="flex justify-between items-start mb-4" id="PropertyDetailsModal_8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{property.title}</h2>
                <p className="text-gray-600">{property.address}</p>
              </div>
              <p className="text-3xl font-bold text-blue-600">{property.price}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6" id="PropertyDetailsModal_9">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Bedrooms</p>
                <p className="text-xl font-bold text-gray-800">{property.bedrooms}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Bathrooms</p>
                <p className="text-xl font-bold text-gray-800">{property.bathrooms}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Square Feet</p>
                <p className="text-xl font-bold text-gray-800">{property.sqft}</p>
              </div>
            </div>

            <div className="mb-6" id="PropertyDetailsModal_10">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            <div className="mb-6" id="PropertyDetailsModal_11">
              <h3 className="text-xl font-semibold mb-2">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4" id="PropertyDetailsModal_12">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Viewing
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;