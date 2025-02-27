import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../assets/images';

const FeaturedPropertiesCarousel = () => {
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties?featured=true');
        setProperties(response.data || [
          { id: 1, title: 'Luxury Villa', price: '$1,200,000', location: 'Beverly Hills', beds: 5, baths: 4, sqft: 4500 },
          { id: 2, title: 'Modern Apartment', price: '$850,000', location: 'Downtown', beds: 3, baths: 2, sqft: 2200 },
          { id: 3, title: 'Beachfront Condo', price: '$950,000', location: 'Malibu', beds: 4, baths: 3, sqft: 3000 }
        ]);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [properties.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + properties.length) % properties.length);
  };

  return (
    <div id="FeaturedPropertiesCarousel_1" className="relative w-full h-[600px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <img
            src={images[currentIndex % images.length]}
            alt={properties[currentIndex]?.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-4xl font-bold text-white mb-4">{properties[currentIndex]?.title}</h2>
            <div className="flex items-center gap-6 text-white mb-4">
              <span className="text-2xl font-semibold">{properties[currentIndex]?.price}</span>
              <span className="text-xl">{properties[currentIndex]?.location}</span>
            </div>
            <div className="flex gap-6 text-white/80">
              <span>{properties[currentIndex]?.beds} Beds</span>
              <span>{properties[currentIndex]?.baths} Baths</span>
              <span>{properties[currentIndex]?.sqft} sqft</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        id="FeaturedPropertiesCarousel_2"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        id="FeaturedPropertiesCarousel_3"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2" id="FeaturedPropertiesCarousel_4">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPropertiesCarousel;