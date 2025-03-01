import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dummySuggestions = [
    'Wireless Headphones',
    'Smart Watch',
    'Laptop',
    'Gaming Console',
    'Camera',
    'Smartphone',
    'Tablet',
    'Bluetooth Speaker'
  ];

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = dummySuggestions.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowSuggestions(false);
  };

  return (
    <div id="SearchBar_1" className="relative max-w-xl w-full mx-auto px-4">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center">
          <input
            id="SearchBar_2"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className="w-full px-12 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-700 bg-white shadow-sm transition duration-200 ease-in-out"
          />
          <button
            id="SearchBar_3"
            type="submit"
            className="absolute left-4 text-gray-400 hover:text-blue-500 transition duration-200"
          >
            <FaSearch size={20} />
          </button>
          {searchTerm && (
            <button
              id="SearchBar_4"
              type="button"
              onClick={clearSearch}
              className="absolute right-4 text-gray-400 hover:text-red-500 transition duration-200"
            >
              <IoMdClose size={20} />
            </button>
          )}
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div id="SearchBar_5" className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              id={`SearchBar_6_${index}`}
              onClick={() => {
                setSearchTerm(suggestion);
                setShowSuggestions(false);
              }}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700 transition duration-200"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;