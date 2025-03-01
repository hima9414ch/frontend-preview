import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        setIsLoading(true);
        try {
          const response = await axios.get(`/api/properties?search=${query}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
        setIsLoading(false);
      } else {
        setSuggestions([]);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div id="SearchBar_1" className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        <div className="flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <input
            id="SearchBar_2"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for properties, locations, or keywords..."
            className="w-full px-8 py-4 rounded-full outline-none text-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
          <button
            id="SearchBar_3"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mr-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </div>

        {isLoading && (
          <div id="SearchBar_4" className="absolute w-full bg-white mt-2 rounded-lg shadow-lg p-4">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        )}

        {!isLoading && suggestions.length > 0 && (
          <div id="SearchBar_5" className="absolute w-full bg-white mt-2 rounded-lg shadow-lg overflow-hidden">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 flex items-center gap-3"
                onClick={() => setQuery(suggestion.title)}
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">{suggestion.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div id="SearchBar_6" className="flex flex-wrap gap-2 justify-center mt-4">
        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors duration-200">Popular</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors duration-200">Apartments</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors duration-200">Houses</button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors duration-200">Villas</button>
      </div>
    </div>
  );
};

export default SearchBar;