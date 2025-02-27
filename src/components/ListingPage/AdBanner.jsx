import React from 'react';
import { useState, useEffect } from 'react';
import images from '../assets/images';

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ads = [
    {
      title: "Summer Sale!",
      description: "Get up to 50% off on all summer collections",
      image: images[0] || 'https://source.unsplash.com/random/800x400/?summer,fashion',
      cta: "Shop Now"
    },
    {
      title: "New Arrivals",
      description: "Check out our latest collection",
      image: images[1] || 'https://source.unsplash.com/random/800x400/?fashion,new',
      cta: "Explore"
    },
    {
      title: "Limited Time Offer",
      description: "Free shipping on orders above $50",
      image: images[2] || 'https://source.unsplash.com/random/800x400/?shopping',
      cta: "Learn More"
    }
  ];

  return (
    <div id="AdBanner_1" className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-xl">
      <div className="relative h-[400px] transition-all duration-500 ease-in-out">
        <img
          src={ads[currentAd].image}
          alt={ads[currentAd].title}
          id="AdBanner_2"
          className="absolute w-full h-full object-cover"
        />
        <div id="AdBanner_3" className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="text-white p-8 max-w-lg">
            <h2 id="AdBanner_4" className="text-4xl font-bold mb-4 animate-fade-in">
              {ads[currentAd].title}
            </h2>
            <p id="AdBanner_5" className="text-lg mb-6 animate-fade-in">
              {ads[currentAd].description}
            </p>
            <button
              id="AdBanner_6"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold
                hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
            >
              {ads[currentAd].cta}
            </button>
          </div>
        </div>
        <div id="AdBanner_7" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {ads.map((_, index) => (
            <button
              key={index}
              id={`AdBanner_dot_${index}`}
              onClick={() => setCurrentAd(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${currentAd === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;