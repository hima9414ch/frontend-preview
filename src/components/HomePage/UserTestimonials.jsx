import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const UserTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: images[0],
      quote: 'This platform has transformed how we handle our digital marketing campaigns. The results have been exceptional!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Tech Entrepreneur',
      image: images[1],
      quote: 'Incredible user experience and customer support. This tool has become indispensable for our business operations.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Product Manager',
      image: images[2],
      quote: 'The efficiency and reliability of this service have exceeded our expectations. Highly recommended!',
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="UserTestimonials_1" className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 id="UserTestimonials_2" className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        
        <div id="UserTestimonials_3" className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  id={`UserTestimonials_${testimonial.id + 3}`}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <span key={index} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="UserTestimonials_7" className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-purple-600 w-6' : 'bg-purple-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;