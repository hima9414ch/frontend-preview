import React from 'react';
import images from '../assets/images';

const BioSection = () => {
  return (
    <div id="BioSection_1" className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              id="BioSection_2"
              src={images[0]}
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div id="BioSection_3" className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Dr. Sarah Johnson</h1>
            <p className="text-xl text-gray-600 font-light">Neuroscience Researcher & AI Specialist</p>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                With over 15 years of experience in neuroscience research and artificial intelligence, I've dedicated my career to understanding the intricate connections between human cognition and machine learning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently leading groundbreaking research at the Neural Computing Institute, focusing on brain-computer interfaces and cognitive enhancement technologies.
              </p>
            </div>
            <div id="BioSection_4" className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors">Neuroscience</span>
              <span className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm hover:bg-indigo-600 transition-colors">Machine Learning</span>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors">Brain-Computer Interfaces</span>
              <span className="px-4 py-2 bg-violet-500 text-white rounded-full text-sm hover:bg-violet-600 transition-colors">Cognitive Science</span>
            </div>
            <div id="BioSection_5" className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Download CV
              </button>
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div id="BioSection_6" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Publications</h3>
            <p className="text-gray-600">50+ research papers in top-tier journals</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Awards</h3>
            <p className="text-gray-600">Multiple international recognitions for research excellence</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Speaking</h3>
            <p className="text-gray-600">Regular speaker at global tech conferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioSection;