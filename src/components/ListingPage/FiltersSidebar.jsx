import React, { useState } from 'react';

const FiltersSidebar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [ratings, setRatings] = useState(0);

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports'];
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG'];

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange, categories: selectedCategories, brands: selectedBrands, ratings });
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onFilterChange({ priceRange, categories: updatedCategories, brands: selectedBrands, ratings });
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
    onFilterChange({ priceRange, categories: selectedCategories, brands: updatedBrands, ratings });
  };

  const handleRatingChange = (value) => {
    setRatings(value);
    onFilterChange({ priceRange, categories: selectedCategories, brands: selectedBrands, ratings: value });
  };

  return (
    <div id="FiltersSidebar_1" className="w-64 bg-white shadow-lg p-6 rounded-lg">
      <h2 id="FiltersSidebar_2" className="text-xl font-semibold mb-6 text-gray-800">Filters</h2>
      
      <div id="FiltersSidebar_3" className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Price Range</h3>
        <div className="flex flex-col gap-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div id="FiltersSidebar_4" className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-600 hover:text-gray-800">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div id="FiltersSidebar_5" className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-600 hover:text-gray-800">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div id="FiltersSidebar_6" className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Rating</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`p-2 rounded-full ${ratings >= star ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-500 transition-colors`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <button
        id="FiltersSidebar_7"
        onClick={() => {
          setPriceRange([0, 1000]);
          setSelectedCategories([]);
          setSelectedBrands([]);
          setRatings(0);
          onFilterChange({ priceRange: [0, 1000], categories: [], brands: [], ratings: 0 });
        }}
        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FiltersSidebar;