import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const ImageGalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [propertyImages, setPropertyImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.post('/api/properties/list', {
          propertyId: 'specific_property_id'
        });
        setPropertyImages(response.data || images);
      } catch (error) {
        setPropertyImages(images);
      }
    };
    fetchImages();
  }, []);

  return (
    <div id="ImageGalleryComponent_1" className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-4">
        <img
          id="ImageGalleryComponent_2"
          src={propertyImages[selectedImage]}
          alt={`Property view ${selectedImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <button
          id="ImageGalleryComponent_3"
          onClick={() => setSelectedImage((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          id="ImageGalleryComponent_4"
          onClick={() => setSelectedImage((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div id="ImageGalleryComponent_5" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {propertyImages.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer rounded-lg overflow-hidden h-24 ${selectedImage === index ? 'ring-4 ring-blue-500' : 'hover:opacity-75'} transition-all duration-300`}
          >
            <img
              id={`ImageGalleryComponent_6_${index}`}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryComponent;