import React, { useEffect, useState } from 'react';
import images from '../assets/images';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const dummyTestimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        image: images[0],
        content: 'Working with this team has been an absolute game-changer for our business. Their innovative solutions and dedication to excellence have helped us achieve remarkable results.',
        rating: 5
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Tech Entrepreneur',
        image: images[1],
        content: 'The level of professionalism and expertise demonstrated by this company is unmatched. They truly understand our needs and deliver beyond expectations.',
        rating: 5
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Creative Director',
        image: images[2],
        content: 'I am thoroughly impressed with the quality of service and attention to detail. Their team s creativity and technical prowess have transformed our vision into reality.',
        rating: 4
      }
    ];
    setTestimonials(dummyTestimonials);
  }, []);

  return (
    <div id="Testimonials_1" className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="Testimonials_2" className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p id="Testimonials_3" className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`Testimonials_${testimonial.id + 3}`}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            id="Testimonials_7"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            View More Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;