import React from 'react';
import images from '../assets/images';

const AboutUsBrief = () => {
  return (
    <div id="AboutUsBrief_1" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={images[0]}
              alt="About Us"
              className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full h-[400px] object-cover"
              id="AboutUsBrief_2"
            />
          </div>
          <div className="lg:w-1/2" id="AboutUsBrief_3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Crafting Digital Excellence
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We are a passionate team of digital innovators, dedicated to transforming ideas into powerful digital solutions. With over a decade of experience, we've helped countless businesses thrive in the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">10+ Years</h3>
                <p className="text-gray-600">Of Excellence</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">500+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBrief;