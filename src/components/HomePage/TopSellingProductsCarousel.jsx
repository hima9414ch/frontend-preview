import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import images from '../assets/images';

const TopSellingProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          params: {
            category: 'bestsellers',
            search: 'null'
          }
        });
        setProducts([
          {
            id: 1,
            name: 'Premium Wireless Headphones',
            price: 199.99,
            image: images[0],
            sales: 1234
          },
          {
            id: 2,
            name: 'Smart Fitness Watch',
            price: 299.99,
            image: images[1],
            sales: 987
          },
          {
            id: 3,
            name: 'Wireless Gaming Mouse',
            price: 79.99,
            image: images[2],
            sales: 856
          },
          {
            id: 4,
            name: 'Mechanical Keyboard',
            price: 159.99,
            image: images[3],
            sales: 654
          }
        ]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="TopSellingProductsCarousel_1" className="relative w-full max-w-6xl mx-auto py-12 px-4">
      <h2 id="TopSellingProductsCarousel_2" className="text-3xl font-bold text-center mb-8 text-gray-800">
        Top Selling Products
      </h2>
      <div id="TopSellingProductsCarousel_3" className="relative overflow-hidden">
        <div className="flex items-center justify-center">
          <button
            id="TopSellingProductsCarousel_4"
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-6 transition-transform duration-500 ease-in-out">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={`TopSellingProductsCarousel_${index + 5}`}
                className={`w-72 p-4 rounded-xl shadow-lg bg-white transform transition-all duration-300 hover:scale-105 ${index === currentIndex ? 'opacity-100' : 'opacity-40'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-indigo-600">${product.price}</p>
                  <p className="text-sm text-gray-500">{product.sales} sold</p>
                </div>
                <button className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
          <button
            id="TopSellingProductsCarousel_9"
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div id="TopSellingProductsCarousel_10" className="flex justify-center mt-6 gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-600 w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellingProductsCarousel;