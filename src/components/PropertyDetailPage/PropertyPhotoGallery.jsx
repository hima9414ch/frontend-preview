import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyPhotoGallery = ({ propertyId }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [propertyImages, setPropertyImages] = useState([]);

  useEffect(() => {
    fetchPropertyImages();
  }, []);

  const fetchPropertyImages = async () => {
    try {
      const response = await fetch(`/api/properties/${propertyId}`);
      const data = await response.json();
      setPropertyImages(data.images || images);
    } catch (error) {
      setPropertyImages(images);
    }
  };

  return (
    <div id="PropertyPhotoGallery_1" className="container mx-auto px-4 py-8">
      <div className="relative">
        <div id="PropertyPhotoGallery_2" className="relative h-[600px] overflow-hidden rounded-xl shadow-2xl">
          <img
            src={propertyImages[selectedImage]}
            alt={`Property view ${selectedImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          />
          <button
            id="PropertyPhotoGallery_3"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
            onClick={() => setSelectedImage((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1))}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="PropertyPhotoGallery_4"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
            onClick={() => setSelectedImage((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1))}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div id="PropertyPhotoGallery_5" className="mt-4 grid grid-cols-6 gap-2">
          {propertyImages.map((image, index) => (
            <div
              key={index}
              className={`h-24 cursor-pointer rounded-lg overflow-hidden ${selectedImage === index ? 'ring-4 ring-blue-500' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover hover:opacity-75 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div id="PropertyPhotoGallery_6" className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full">
            <img
              src={propertyImages[selectedImage]}
              alt={`Full view ${selectedImage + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              id="PropertyPhotoGallery_7"
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/75 transition-all"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyPhotoGallery;