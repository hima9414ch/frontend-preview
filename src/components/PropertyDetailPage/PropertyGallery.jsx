import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const PropertyGallery = ({ propertyId }) => {
  const [propertyImages, setPropertyImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const fetchPropertyImages = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}`);
        setPropertyImages(response.data.images || images);
      } catch (error) {
        setPropertyImages(images);
      }
    };
    fetchPropertyImages();
  }, [propertyId]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="PropertyGallery_1" className="max-w-7xl mx-auto px-4 py-8">
      <div className={`relative ${isFullScreen ? 'fixed inset-0 bg-black z-50' : ''}}`}>
        <div className="relative h-[600px] overflow-hidden rounded-xl shadow-2xl">
          <img
            src={propertyImages[currentIndex]}
            alt={`Property view ${currentIndex + 1}`}
            className={`w-full h-full object-cover transition-transform duration-500 ${isFullScreen ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setIsFullScreen(!isFullScreen)}
          />
          <button
            id="PropertyGallery_2"
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="PropertyGallery_3"
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div id="PropertyGallery_4" className="mt-4 flex space-x-2 overflow-x-auto pb-4">
          {propertyImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 ${currentIndex === index ? 'ring-4 ring-blue-500' : ''}`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div id="PropertyGallery_5" className="mt-4 text-center text-gray-600">
          <p className="text-sm">{currentIndex + 1} of {propertyImages.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;