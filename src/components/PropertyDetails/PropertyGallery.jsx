import React, { useState, useEffect } from 'react';
import images from '../assets/images';
import axios from 'axios';

const PropertyGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [propertyImages, setPropertyImages] = useState([]);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get('/api/properties/1');
        setPropertyImages(response.data.images || images);
      } catch (error) {
        setPropertyImages(images);
      }
    };
    fetchPropertyDetails();
  }, []);

  return (
    <div id="PropertyGallery_1" className="container mx-auto px-4 py-8">
      <div className={`relative ${isFullScreen ? 'fixed inset-0 bg-black z-50' : ''}}`}>
        <div id="PropertyGallery_2" className="relative h-[70vh] overflow-hidden rounded-xl">
          <img
            src={propertyImages[selectedImage]}
            alt={`Property view ${selectedImage + 1}`}
            className={`w-full h-full object-cover transition-transform duration-500 ${isFullScreen ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setIsFullScreen(!isFullScreen)}
          />
          <button
            id="PropertyGallery_3"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            onClick={() => setSelectedImage((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1))}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="PropertyGallery_4"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            onClick={() => setSelectedImage((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1))}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div id="PropertyGallery_5" className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {propertyImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${selectedImage === index ? 'ring-4 ring-blue-500' : 'hover:opacity-75'}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20 object-cover"
              />
            </div>
          ))}
        </div>

        <div id="PropertyGallery_6" className="mt-4 text-center text-gray-600">
          <p className="text-sm">{selectedImage + 1} of {propertyImages.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;