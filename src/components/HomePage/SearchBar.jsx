import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`/api/properties?search=${searchTerm}`);
        const data = await response.json();
        setSuggestions(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
      setIsLoading(false);
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return (
    <div id="SearchBar_1" className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="relative">
        <div className="flex items-center relative bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <input
            id="SearchBar_2"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter keyword or property ID..."
            className="w-full px-8 py-4 rounded-full focus:outline-none text-lg"
          />
          <button
            id="SearchBar_3"
            className="absolute right-0 h-full px-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            <FaSearch className="text-xl" />
          </button>
        </div>

        {isLoading && (
          <div id="SearchBar_4" className="absolute w-full bg-white mt-2 rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          </div>
        )}

        {!isLoading && suggestions.length > 0 && (
          <div id="SearchBar_5" className="absolute w-full bg-white mt-2 rounded-lg shadow-lg overflow-hidden">
            {suggestions.map((suggestion, index) => (
              <div
                key={suggestion.id}
                id={`SearchBar_suggestion_${index}`}
                className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b last:border-b-0 border-gray-100"
                onClick={() => setSearchTerm(suggestion.title)}
              >
                <div className="font-medium text-gray-800">{suggestion.title}</div>
                <div className="text-sm text-gray-500">ID: {suggestion.id}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div id="SearchBar_6" className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-gray-500">Popular searches:</span>
        {['Apartments', 'Houses', 'Condos', 'Villas', 'Penthouses'].map((term, index) => (
          <button
            key={index}
            id={`SearchBar_popular_${index}`}
            onClick={() => setSearchTerm(term)}
            className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors duration-200"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;