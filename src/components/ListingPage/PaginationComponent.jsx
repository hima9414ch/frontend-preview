import React, { useState, useEffect } from 'react';

const PaginationComponent = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProperties(currentPage);
  }, [currentPage]);

  const fetchProperties = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/properties?page=${page}`);
      const data = await response.json();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          id={`PaginationComponent_${i}`}
          onClick={() => handlePageChange(i)}
          className={`${currentPage === i 
            ? 'bg-blue-600 text-white' 
            : 'bg-white text-gray-700 hover:bg-blue-50'} 
            px-4 py-2 mx-1 rounded-lg transition-all duration-200 font-semibold
            border border-gray-200 shadow-sm text-sm md:text-base`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div id="PaginationComponent_main" className="flex flex-col items-center space-y-4 py-8">
      <div className="flex items-center justify-center flex-wrap gap-2">
        <button
          id="PaginationComponent_first"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${currentPage === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-blue-600 hover:bg-blue-50'} 
            border border-gray-200 shadow-sm transition-all duration-200 font-semibold`}
        >
          First
        </button>
        <button
          id="PaginationComponent_prev"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${currentPage === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-blue-600 hover:bg-blue-50'} 
            border border-gray-200 shadow-sm transition-all duration-200 font-semibold`}
        >
          ←
        </button>
        <div className="flex flex-wrap justify-center gap-2">
          {renderPageNumbers()}
        </div>
        <button
          id="PaginationComponent_next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-blue-600 hover:bg-blue-50'} 
            border border-gray-200 shadow-sm transition-all duration-200 font-semibold`}
        >
          →
        </button>
        <button
          id="PaginationComponent_last"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-blue-600 hover:bg-blue-50'} 
            border border-gray-200 shadow-sm transition-all duration-200 font-semibold`}
        >
          Last
        </button>
      </div>
      <div id="PaginationComponent_info" className="text-gray-600 text-sm">
        Page {currentPage} of {totalPages}
      </div>
      {loading && (
        <div id="PaginationComponent_loading" className="text-blue-600 font-semibold">
          Loading...
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;