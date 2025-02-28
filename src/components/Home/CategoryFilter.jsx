import React, { useState, useEffect } from 'react';
const CategoryFilter = ({ onCategoryChange }) => {
  const [categories] = useState(['All', 'Technology', 'Travel', 'Food', 'Lifestyle', 'Fashion', 'Health', 'Business']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const fetchPosts = async (category) => {
    try {
      const queryParam = category === 'All' ? '' : `?category=${category}`;
      const response = await fetch(`/api/posts${queryParam}`);
      const data = await response.json();
      onCategoryChange(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    fetchPosts(category);
  };
  return (
    <div id="CategoryFilter_1" className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-700">{selectedCategory}</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(category)}
              className={`w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors duration-200 ${selectedCategory === category ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}
            >
              <div className="flex items-center">
                <span>{category}</span>
                {selectedCategory === category && (
                  <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default CategoryFilter;