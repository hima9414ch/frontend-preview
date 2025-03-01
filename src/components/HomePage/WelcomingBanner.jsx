import React from 'react';
import images from '../assets/images';

const WelcomingBanner = () => {
  return (
    <div id="WelcomingBanner_1" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[0] || 'https://images.unsplash.com/photo-1492052722242-2554d0e99e3a'}
          alt="Welcome Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 id="WelcomingBanner_2" className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our World</span>
        </h1>
        
        <p id="WelcomingBanner_3" className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up">
          Discover amazing experiences and unleash your potential with our innovative solutions.
        </p>
        
        <div id="WelcomingBanner_4" className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started
          </button>
          
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>
        
        <div id="WelcomingBanner_5" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WelcomingBanner;