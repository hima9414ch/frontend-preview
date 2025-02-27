import React, { useState } from 'react';

const SortDropdown = ({ onSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort By');

  const sortOptions = [
    { id: 'price_asc', label: 'Price: Low to High' },
    { id: 'price_desc', label: 'Price: High to Low' },
    { id: 'name_asc', label: 'Name: A to Z' },
    { id: 'name_desc', label: 'Name: Z to A' },
    { id: 'date_desc', label: 'Newest First' },
    { id: 'date_asc', label: 'Oldest First' }
  ];

  const handleSort = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    if (onSort) onSort(option.id);
  };

  return (
    <div id="SortDropdown_1" className="relative inline-block text-left w-48">
      <div>
        <button
          id="SortDropdown_2"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {selectedOption}
          <svg
            className={`-mr-1 ml-2 h-5 w-5 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id="SortDropdown_3"
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
        >
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSort(option)}
                className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150"
              >
                <span className="flex-grow text-left">{option.label}</span>
                {selectedOption === option.label && (
                  <svg
                    className="h-5 w-5 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;