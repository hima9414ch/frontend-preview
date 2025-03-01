import React, { useState, useEffect } from 'react';
import images from '../assets/images';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const FeaturedPropertiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchProperties();
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('api/featured-properties');
      const data = await response.json();
      setProperties([
        {
          id: 1,
          title: 'Luxury Villa',
          price: '$1,200,000',
          location: 'Beverly Hills, CA',
          beds: 5,
          baths: 4,
          sqft: 4500,
          image: images[0]
        },
        {
          id: 2,
          title: 'Modern Apartment',
          price: '$650,000',
          location: 'Manhattan, NY',
          beds: 2,
          baths: 2,
          sqft: 1200,
          image: images[1]
        },
        {
          id: 3,
          title: 'Seaside Cottage',
          price: '$850,000',
          location: 'Malibu, CA',
          beds: 3,
          baths: 2,
          sqft: 2000,
          image: images[2]
        }
      ]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  const toggleFavorite = async (propertyId) => {
    try {
      await fetch('api/toggle-favorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ propertyId })
      });
      setFavorites(prev =>
        prev.includes(propertyId)
          ? prev.filter(id => id !== propertyId)
          : [...prev, propertyId]
      );
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (loading) {
    return (
      <div id="FeaturedPropertiesCarousel_1" className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="FeaturedPropertiesCarousel_2" className="relative w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="absolute w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="absolute w-full h-full"
              style={{ left: `${index * 100}%` }}
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 id="FeaturedPropertiesCarousel_3" className="text-3xl font-bold text-white mb-2">
                      {property.title}
                    </h2>
                    <p id="FeaturedPropertiesCarousel_4" className="text-xl text-white mb-2">{property.price}</p>
                    <p id="FeaturedPropertiesCarousel_5" className="text-gray-300 mb-4">{property.location}</p>
                    <div className="flex gap-4 text-white">
                      <span id="FeaturedPropertiesCarousel_6">{property.beds} Beds</span>
                      <span id="FeaturedPropertiesCarousel_7">{property.baths} Baths</span>
                      <span id="FeaturedPropertiesCarousel_8">{property.sqft} sqft</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {favorites.includes(property.id) ? (
                      <AiFillHeart className="w-6 h-6 text-red-500" />
                    ) : (
                      <AiOutlineHeart className="w-6 h-6 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <BiChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <BiChevronRight className="w-8 h-8 text-white" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertiesCarousel;