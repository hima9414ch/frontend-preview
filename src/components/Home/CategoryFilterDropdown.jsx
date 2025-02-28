import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryFilterDropdown = () => {
  const [categories, setCategories] = useState(['All', 'Technology', 'Lifestyle', 'Travel', 'Food', 'Fashion']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]);

  const fetchPosts = async () => {
    try {
      const params = selectedCategory === 'All' ? {} : { category: selectedCategory };
      const response = await axios.get('/api/posts', { params });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div id="CategoryFilterDropdown_1" className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-700">{selectedCategory}</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div id="CategoryFilterDropdown_2" className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
          <ul className="py-1 overflow-auto max-h-60">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-blue-50 transition-colors duration-150
                  ${selectedCategory === category ? 'bg-blue-100 text-blue-700' : 'text-gray-700'}`}
              >
                <div className="flex items-center">
                  <span>{category}</span>
                  {selectedCategory === category && (
                    <svg
                      className="w-5 h-5 ml-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div id="CategoryFilterDropdown_3" className="mt-4">
        <p className="text-sm text-gray-500">
          Showing results for <span className="font-medium text-blue-600">{selectedCategory}</span>
        </p>
      </div>
    </div>
  );
};

export default CategoryFilterDropdown;