import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const DailyDealsSection = () => {
  const [products, setProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          params: {
            category: 'daily-deals',
            search: null
          }
        });
        setProducts(response.data || getDummyProducts());
      } catch (error) {
        setProducts(getDummyProducts());
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date().setHours(23, 59, 59, 999);
      const distance = end - now;

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getDummyProducts = () => [
    { id: 1, name: 'Smart Watch Pro', price: 99.99, originalPrice: 199.99, stock: 5, image: images[0] },
    { id: 2, name: 'Wireless Earbuds', price: 49.99, originalPrice: 89.99, stock: 8, image: images[1] },
    { id: 3, name: 'Gaming Keyboard', price: 79.99, originalPrice: 149.99, stock: 3, image: images[2] },
    { id: 4, name: 'HD Webcam', price: 39.99, originalPrice: 69.99, stock: 12, image: images[3] }
  ];

  return (
    <div id="DailyDeals_1" className="bg-gradient-to-r from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div id="DailyDeals_2" className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Daily Flash Deals</h2>
          <div id="DailyDeals_3" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg inline-block">
            <p className="text-xl font-semibold">
              Ends in: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </p>
          </div>
        </div>

        <div id="DailyDeals_4" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} id={`DailyDeals_${product.id + 4}`} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <div className="text-sm text-red-600 font-semibold">
                    Only {product.stock} left!
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition duration-300">
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

export default DailyDealsSection;