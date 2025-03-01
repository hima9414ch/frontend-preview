import React, { useState, useEffect } from 'react';

const PaginationControls = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, [currentPage]);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`/api/properties?page=${currentPage}&limit=10`);
      const data = await response.json();
      setProperties(data.properties);
      setTotalPages(Math.ceil(data.total / 10));
      onPageChange && onPageChange(data.properties);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div id="PaginationControls_1" className="flex flex-col items-center space-y-4 py-8">
      <div className="flex items-center space-x-2">
        <button
          id="PaginationControls_2"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-200'}`}
        >
          First
        </button>
        <button
          id="PaginationControls_3"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-200'}`}
        >
          Previous
        </button>
        <div id="PaginationControls_4" className="flex items-center space-x-1">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 rounded-full ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'} flex items-center justify-center transform hover:scale-110 transition-all duration-200`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          id="PaginationControls_5"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-200'}`}
        >
          Next
        </button>
        <button
          id="PaginationControls_6"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-200'}`}
        >
          Last
        </button>
      </div>
      <div id="PaginationControls_7" className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default PaginationControls;