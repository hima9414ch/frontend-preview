import React from 'react';
import images from '../assets/images';

const HeroBanner = () => {
  return (
    <div id="HeroBanner_1" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div id="HeroBanner_2" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 animate-fade-in">
          Transform Your Digital Experience
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl mx-auto text-gray-200">
          Create stunning websites and applications with our cutting-edge solutions and expert team
        </p>
        <div id="HeroBanner_3" className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
      
      <div id="HeroBanner_4" className="absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-8 text-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">300+</h3>
          <p className="text-gray-300">Happy Clients</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">24/7</h3>
          <p className="text-gray-300">Support Available</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;