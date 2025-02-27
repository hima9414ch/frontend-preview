import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('api/products/featured')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const dummyProducts = [
    { id: 1, name: 'Premium Wireless Headphones', price: 199.99, rating: 4.8, image: images[0] },
    { id: 2, name: 'Smart Fitness Watch', price: 149.99, rating: 4.6, image: images[1] },
    { id: 3, name: 'Ultra HD Camera', price: 599.99, rating: 4.9, image: images[2] },
    { id: 4, name: 'Gaming Laptop Pro', price: 1299.99, rating: 4.7, image: images[3] }
  ];

  return (
    <div id="FeaturedProducts_1" className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div id="FeaturedProducts_2" className="max-w-7xl mx-auto">
        <h2 id="FeaturedProducts_3" className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Featured Products
          <span className="block text-indigo-600 text-lg font-medium mt-2">Discover our top picks</span>
        </h2>
        
        <div id="FeaturedProducts_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(products.length ? products : dummyProducts).map(product => (
            <div
              key={product.id}
              id={`FeaturedProducts_${product.id + 4}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative pb-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">
                      ★
                    </span>
                    <span className="text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <button
                  className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                  onClick={() => console.log(`Add ${product.name} to cart`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;