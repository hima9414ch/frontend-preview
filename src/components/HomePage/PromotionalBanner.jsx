import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PromotionalBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: 'Summer Sale',
      description: 'Up to 50% off on all summer collection',
      image: images[0],
      bgColor: 'from-orange-500 to-pink-500'
    },
    {
      id: 2,
      title: 'New Arrivals',
      description: 'Check out our latest collection',
      image: images[1],
      bgColor: 'from-blue-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Limited Time Offer',
      description: 'Free shipping on orders above $50',
      image: images[2],
      bgColor: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="PromotionalBanner_1" className="relative w-full h-[400px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promotions.map((promo) => (
          <div
            key={promo.id}
            id={`PromotionalBanner_${promo.id + 1}`}
            className={`flex-shrink-0 w-full h-full bg-gradient-to-r ${promo.bgColor} relative`}
          >
            <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12">
              <div className="text-white max-w-lg z-10 space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold animate-fadeIn">
                  {promo.title}
                </h2>
                <p className="text-xl md:text-2xl animate-slideUp">
                  {promo.description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold
                  transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                  Shop Now
                </button>
              </div>
              <div className="hidden md:block w-1/2 h-full">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="object-cover w-full h-full opacity-90"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            id={`PromotionalBanner_${index + 4}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionalBanner;