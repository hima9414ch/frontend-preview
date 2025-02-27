import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const UserTestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Property Buyer',
      image: images[0],
      quote: 'Found my dream home through this platform. The process was seamless and professional. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Property Seller',
      image: images[1],
      quote: 'Sold my property in record time! The exposure and support I received were exceptional.'
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Tenant',
      image: images[2],
      quote: 'Renting made easy! The platform helped me find the perfect apartment in my desired location.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="UserTestimonialsCarousel_1" className="relative w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8">
        <div className="relative overflow-hidden min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute w-full transform transition-all duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div id="UserTestimonialsCarousel_2" className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div id="UserTestimonialsCarousel_3" className="max-w-2xl">
                  <p className="text-gray-600 text-lg italic mb-4">"{testimonial.quote}"</p>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-purple-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="UserTestimonialsCarousel_4" className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-purple-600 w-6' : 'bg-gray-300 hover:bg-purple-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          id="UserTestimonialsCarousel_5"
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          id="UserTestimonialsCarousel_6"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserTestimonialsCarousel;