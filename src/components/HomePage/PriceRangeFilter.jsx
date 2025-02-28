import React, { useState } from 'react';

export default function PriceRangeFilter() {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000000
  });

  const [currentValues, setCurrentValues] = useState({
    min: 0,
    max: 1000000
  });

  const handleSliderChange = (e, type) => {
    const value = parseInt(e.target.value);
    setCurrentValues(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleApplyFilter = () => {
    setPriceRange(currentValues);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div id="PriceRangeFilter_1" className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 id="PriceRangeFilter_2" className="text-2xl font-semibold text-gray-800 mb-6">Price Range</h2>
      
      <div id="PriceRangeFilter_3" className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-gray-600">Minimum</label>
            <span className="text-blue-600 font-medium">{formatPrice(currentValues.min)}</span>
          </div>
          <input
            id="PriceRangeFilter_4"
            type="range"
            min={0}
            max={1000000}
            step={100}
            value={currentValues.min}
            onChange={(e) => handleSliderChange(e, 'min')}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-gray-600">Maximum</label>
            <span className="text-blue-600 font-medium">{formatPrice(currentValues.max)}</span>
          </div>
          <input
            id="PriceRangeFilter_5"
            type="range"
            min={0}
            max={1000000}
            step={100}
            value={currentValues.max}
            onChange={(e) => handleSliderChange(e, 'max')}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div id="PriceRangeFilter_6" className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Selected Range:</span>
            <span className="text-sm font-medium text-gray-800">
              {formatPrice(priceRange.min)} - {formatPrice(priceRange.max)}
            </span>
          </div>
          
          <button
            onClick={handleApplyFilter}
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg
            hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}