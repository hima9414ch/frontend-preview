import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductFilter = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    brand: '',
    search: ''
  });

  const [products, setProducts] = useState([]);

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'];
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony'];

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products', {
        params: {
          category: filters.category,
          search: filters.search
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div id="ProductFilter_1" className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg">
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-semibold text-gray-700">Search</label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            placeholder="Search products..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-semibold text-gray-700">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-semibold text-gray-700">Price Range</label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-gray-600">${filters.priceRange[1]}</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-semibold text-gray-700">Brand</label>
          <div className="grid grid-cols-2 gap-2">
            {brands.map(brand => (
              <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brand === brand}
                  onChange={() => handleFilterChange('brand', filters.brand === brand ? '' : brand)}
                  className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-400"
                />
                <span className="text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => setFilters({ category: '', priceRange: [0, 1000], brand: '', search: '' })}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Reset Filters
        </button>
      </div>

      <div id="ProductFilter_2" className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-2 text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;