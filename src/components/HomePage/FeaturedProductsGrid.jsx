import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const FeaturedProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products?category=featured');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div id="FeaturedProductsGrid_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="FeaturedProductsGrid_2" className="container mx-auto px-4 py-8">
      <h2 id="FeaturedProductsGrid_3" className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Featured Products
      </h2>
      <div id="FeaturedProductsGrid_4" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 ? products.map((product, index) => (
          <div
            key={product.id}
            id={`FeaturedProductsGrid_5_${index}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative pb-[100%]">
              <img
                src={product.image || images[index % images.length]}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full
                  hover:from-blue-600 hover:to-purple-600 transform transition-all duration-300 hover:shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )) : (
          <div id="FeaturedProductsGrid_6" className="col-span-full text-center text-gray-500 py-8">
            No featured products available
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductsGrid;