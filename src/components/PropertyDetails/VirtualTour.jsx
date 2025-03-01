import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const VirtualTour = () => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    fetchTourData();
  }, []);

  const fetchTourData = async () => {
    try {
      const response = await fetch('/api/virtual-tour');
      const data = await response.json();
      setTourData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tour data:', error);
      setTourData([
        { id: 1, name: 'Living Room', description: 'Spacious living area with modern furnishings', image: images[0] },
        { id: 2, name: 'Kitchen', description: 'Fully equipped kitchen with island', image: images[1] },
        { id: 3, name: 'Master Bedroom', description: 'Large bedroom with ensuite bathroom', image: images[2] },
        { id: 4, name: 'Garden', description: 'Beautiful landscaped garden with patio', image: images[3] }
      ]);
      setLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentRoom((prev) => (prev + 1) % tourData.length);
  };

  const handlePrev = () => {
    setCurrentRoom((prev) => (prev - 1 + tourData.length) % tourData.length);
  };

  if (loading) {
    return (
      <div id="VirtualTour_1" className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="VirtualTour_2" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 id="VirtualTour_3" className="text-4xl font-bold text-white mb-8 text-center">Virtual Property Tour</h2>
        
        <div id="VirtualTour_4" className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <img
            src={tourData[currentRoom].image}
            alt={tourData[currentRoom].name}
            className="w-full h-[600px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
            <h3 id="VirtualTour_5" className="text-2xl font-semibold text-white mb-2">{tourData[currentRoom].name}</h3>
            <p id="VirtualTour_6" className="text-gray-300 mb-4">{tourData[currentRoom].description}</p>
            
            <div className="flex justify-between items-center">
              <button
                id="VirtualTour_7"
                onClick={handlePrev}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <div id="VirtualTour_8" className="flex gap-2">
                {tourData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRoom(index)}
                    className={`w-3 h-3 rounded-full ${currentRoom === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                  />
                ))}
              </div>
              
              <button
                id="VirtualTour_9"
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 flex items-center"
              >
                Next
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div id="VirtualTour_10" className="mt-8 grid grid-cols-4 gap-4">
          {tourData.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setCurrentRoom(index)}
              className={`p-4 rounded-lg transition duration-300 ${currentRoom === index ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {room.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;