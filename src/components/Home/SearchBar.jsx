import React, { useState } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div id="SearchBar_1" className="w-full max-w-3xl mx-auto px-4 py-6">
      <div className="relative flex items-center">
        <input
          id="SearchBar_2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="w-full px-6 py-3 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-200 bg-white shadow-sm hover:shadow-md"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          id="SearchBar_3"
          onClick={handleSearch}
          disabled={isSearching}
          className="absolute right-3 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSearching ? (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </button>
      </div>
      
      {results.length > 0 && (
        <div id="SearchBar_4" className="mt-6 space-y-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-800">{result.title}</h3>
              <p className="text-gray-600 mt-1">{result.excerpt}</p>
            </div>
          ))}
        </div>
      )}
      
      {searchQuery && results.length === 0 && !isSearching && (
        <div id="SearchBar_5" className="mt-6 text-center text-gray-600">
          No results found for "{searchQuery}"
        </div>
      )}
    </div>
  );
}