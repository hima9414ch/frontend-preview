import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const LatestNews = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'Housing Market Shows Strong Recovery in Q2 2024',
      description: 'Latest market analysis reveals significant growth in residential property sales across major metropolitan areas.',
      date: 'March 15, 2024',
      image: images[0],
      category: 'Market Analysis'
    },
    {
      id: 2,
      title: 'New Sustainable Housing Development Project Launched',
      description: 'Revolutionary eco-friendly housing project introduces solar-powered homes with zero carbon footprint.',
      date: 'March 14, 2024',
      image: images[1],
      category: 'Company News'
    },
    {
      id: 3,
      title: 'Interest Rates Expected to Stabilize in Coming Months',
      description: 'Federal Reserve signals steady interest rates, potentially benefiting homebuyers in the near future.',
      date: 'March 13, 2024',
      image: images[2],
      category: 'Finance'
    }
  ]);

  return (
    <div id="LatestNews_1" className="max-w-7xl mx-auto px-4 py-12">
      <div id="LatestNews_2" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest News</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>
      
      <div id="LatestNews_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            id={`LatestNews_${item.id + 3}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm py-1 px-3 rounded-full">
                {item.category}
              </span>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div id="LatestNews_7" className="mt-10 text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
          View All News
        </button>
      </div>
    </div>
  );
};

export default LatestNews;