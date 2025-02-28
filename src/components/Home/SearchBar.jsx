import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === '') {
        setSuggestions([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search/suggestions?q=${searchTerm}`);
        const data = await response.json();
        setSuggestions(data.suggestions);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/search?q=${searchTerm}`);
      const data = await response.json();
      // Handle search results
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div id="SearchBar_1" className="w-full max-w-2xl mx-auto px-4">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            id="SearchBar_2"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog posts..."
            className="w-full px-12 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300 bg-white text-gray-800 placeholder-gray-400"
          />
          <button
            id="SearchBar_3"
            type="submit"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {isLoading && (
            <div id="SearchBar_4" className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
            </div>
          )}
        </div>
        {suggestions.length > 0 && (
          <div id="SearchBar_5" className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(suggestion)}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150 text-gray-700 cursor-pointer"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;